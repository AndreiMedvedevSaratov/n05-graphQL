import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UsersModule } from './modules/users/users.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';

import { ArtistsModule } from './modules/artists/artists.module';

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			typePaths: ['./**/*.graphql'],
			definitions: {
				path: join(process.cwd(), 'src/graphql.ts'),
				outputAs: 'class',
			},

			context: ({ req }) => {
				const token: string = req.headers.authorization || '';

				return {
					config: {
						headers: {
							Authorization: token,
						},
					},
				};
			},
		}),

		UsersModule,
		ArtistsModule,
	],
})
	
export class AppModule { }
