import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { GenresService } from '../services/genres.service';
import { IContext } from 'src/types';


@Resolver('Genre')
	
export class GenresResolver {
	constructor(private readonly genresService: GenresService) {

	}

	@Mutation('createGenre')
		
	create(
		@Args('name') name: string,
		@Args('description') description: string,
		@Args('country') country: string,
		@Args('year') year: number,
		@Context() ctx: IContext,
	) {
		const { config } = ctx;

		return this.genresService.create(name, description, country, year, config);
	}


	@Query('genre')
		
	findOne(@Args('id') id: string) {
		return this.genresService.findOne(id);
	}


	@Query('genres')
		
	findAll(
		@Args('limit', { defaultValue: 5 }) limit: number,
		@Args('offset', { defaultValue: 0 }) offset: number,
	) {
		return this.genresService.findAll(limit, offset);
	}


	@Mutation('deleteGenre')
		
	remove(@Args('id') id: string, @Context() ctx: IContext) {
		const { config } = ctx;

		return this.genresService.remove(id, config);
	}


	@Mutation('updateGenre')
		
	update(
		@Args('id') id: string,
		@Args('name') name: string,
		@Args('description') description: string,
		@Args('country') country: string,
		@Args('year') year: number,
		@Context() ctx: IContext,
	) {
		const { config } = ctx;
		
		return this.genresService.update(
			id,
			name,
			description,
			country,
			year,
			config,
		);
	}

}
