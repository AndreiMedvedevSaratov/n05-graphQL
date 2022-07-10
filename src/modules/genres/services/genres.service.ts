import { IContext } from 'src/types';
import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';


@Injectable()
	
export class GenresService {
	client: AxiosInstance;

	constructor() {
		this.client = axios.create({
			baseURL: 'http://localhost:3001/v1/genres',
		});

		this.client.interceptors.response.use((res) => {
			res.data.items = res.data.items?.map((item: { _id: any; }) => ({ ...item, id: item._id }));

			return res;
		});
	}

	async create(
		name: string,
		description: string,
		country: string,
		year: number,
		config: IContext['config'],
	) {
		const res = await this.client.post(
			'/',
			{
				name,
				description,
				country,
				year,
			},
			config,
		);

		return res.data;
	}


	async findOne(id: string) {
		const res = await this.client.get(`/${id}`);

		return res.data;
	}


	async findAll(limit: number, offset: number) {
		const res = await this.client.get('/', {
			params: { limit, offset },
		});

		return res.data;
	}


	async remove(id: string, config: IContext['config']) {
		const res = await this.client.delete(`/${id}`, config);

		return res.data;
	}


	async update(
		id: string,
		name: string,
		description: string,
		country: string,
		year: number,
		config: IContext['config'],
	) {
		const res = await this.client.put(
			`/${id}`,
			{
				name,
				description,
				country,
				year,
			},
			config,
		);

		return res.data;
	}
}