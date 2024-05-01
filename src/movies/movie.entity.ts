import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @Column()
  @ApiProperty({ example: 'Meu Filme' })
  title: string;

  @Column()
  @ApiProperty({ example: 'Diretor do Filme' })
  director: string;

  @Column()
  @ApiProperty({ example: 2024 })
  year: number;

  @Column({ default: false })
  @ApiProperty({ example: false })
  watched: boolean;
}
