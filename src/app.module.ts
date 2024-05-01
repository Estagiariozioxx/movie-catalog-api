import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from './movies/movies.module';
import { AuthModule } from './auth/auth.module';
import { Movie } from './movies/movie.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres', // Alterado para o nome do serviço do banco de dados
      port: 5432,
      username: 'postgres',
      password: 'postgres123',
      database: 'movie_catalog',
      autoLoadEntities: true,
      synchronize: true,
      entities: [Movie], // Adicionando a entidade Movie aqui
    }),
    MoviesModule,
    AuthModule,
  ],
})
export class AppModule {}
