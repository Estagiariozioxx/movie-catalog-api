import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from './movies/movies.module'; // Importe seu módulo MoviesModule
import { Movie } from './movies/movie.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'postgres123',
      database: 'movie_catalog',
      autoLoadEntities: true,
      synchronize: true,
    })
    ,
    MoviesModule,
    AuthModule, // Adicione o MoviesModule aqui
  ],
})
export class AppModule {}
