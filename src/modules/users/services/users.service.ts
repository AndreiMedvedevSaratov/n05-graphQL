import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
	
export class UsersService {
	client: AxiosInstance;

	constructor() {
		this.client = axios.create({
			baseURL: 'http://localhost:3004/v1/users',
		});

		this.client.interceptors.response.use((res) => {
			if (!res.data) {
				res.data = null;
				return res;
			}

			if (res.data.items) {
				res.data.items = res.data.items.map((item: { _id: any; }) => ({ ...item, id: item._id }));
			} else {
				res.data = { ...res.data, id: res.data._id };
			}

			return res;
		});
	}

	async register(
		firstName: string,
		lastName: string,
		email: string,
		password: string,
	) {
		const res = await this.client.post('/register', {
			firstName,
			lastName,
			email,
			password,
		});

		return res.data;
	}

	async login(email: string, password: string) {
		const res = await this.client.post('/login', { email, password });

		return res.data;
	}

	async getById(id: string) {
		const res = await this.client.get(`/${id}`);

		return res.data;
	}
	
}