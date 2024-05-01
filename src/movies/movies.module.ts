import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { Movie } from './movie.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie]), // Apenas importe o Movie aqui
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
