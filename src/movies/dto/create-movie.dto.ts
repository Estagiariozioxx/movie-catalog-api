import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto {
  @ApiProperty({ example: 'Meu Filme' })
  readonly title: string;

  @ApiProperty({ example: 'Diretor do Filme' })
  readonly director: string;

  @ApiProperty({ example: 2024 })
  readonly year: number;

  @ApiProperty({ example: false })
  readonly watched: boolean;
}
