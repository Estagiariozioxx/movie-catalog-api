import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger'; 
import { MoviesService } from './movies.service';
import { Movie } from './movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('movies') 
@Controller('movies')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth() 
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new movie' })
  @ApiResponse({ status: 201, description: 'The movie has been successfully created.', type: Movie })
  create(@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all movies' })
  @ApiResponse({ status: 200, description: 'Return all movies.', type: [Movie] })
  findAll(): Promise<Movie[]> {
    return this.moviesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a movie by ID' })
  @ApiResponse({ status: 200, description: 'Return the movie.', type: Movie })
  @ApiResponse({ status: 404, description: 'Movie not found.' })
  findOne(@Param('id') id: number): Promise<Movie> {
    return this.moviesService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a movie' })
  @ApiResponse({ status: 200, description: 'The movie has been successfully updated.', type: Movie })
  @ApiResponse({ status: 404, description: 'Movie not found.' })
  update(@Param('id') id: number, @Body() updateMovieDto: CreateMovieDto): Promise<Movie> {
    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a movie' })
  @ApiResponse({ status: 204, description: 'The movie has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Movie not found.' })
  remove(@Param('id') id: number): Promise<void> {
    return this.moviesService.remove(id);
  }
}
