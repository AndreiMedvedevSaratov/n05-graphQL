import { UsersService } from '../services/users.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver('User')
	
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {
		
	}


	@Query('user')

	async getById(@Args('id') id: string) {
		return this.usersService.getById(id);
	}


	@Query('jwt')
		
	async login(
		@Args('email') email: string,
		@Args('password') password: string,
	) {
		return this.usersService.login(email, password);
	}

	
	@Mutation()

	async register(
		@Args('firstName') firstName: string,
		@Args('lastName') lastName: string,
		@Args('email') email: string,
		@Args('password') password: string,
	) {
		return this.usersService.register(firstName, lastName, email, password);
	}
}
