import { Injectable } from '@nestjs/common';
import { IContext } from 'src/types';
import axios, { AxiosInstance } from 'axios';

@Injectable()
	
export class BandsService {
	client: AxiosInstance;

	constructor() {
		this.client = axios.create({
			baseURL: 'http://localhost:3003/v1/bands',
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

	async create(
		name: string,
		origin: string,
		members: any[],
		website: string,
		genresIds: string[],
		config: IContext['config'],
	) {
		const res = await this.client.post(
			'/',
			{ name, origin, members, website, genresIds },
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

		return res.data.items;
	}


	async remove(id: string, config: IContext['config']) {
		const res = await this.client.delete(`/${id}`, config);

		return res.data;
	}


	async update(
		id: string,
		name: string,
		origin: string,
		members: any[],
		website: string,
		genresIds: string[],
		config: IContext['config'],
	) {
		const res = await this.client.put(
			`/${id}`,
			{ name, origin, members, website, genresIds },
			config,
		);

		return res.data;
	}
}
