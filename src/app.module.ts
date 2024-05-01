import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from './movies/movies.module';
import { AuthModule } from './auth/auth.module';
import { Movie } from './movies/movie.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-copb3tljm4es738er0v0-a', // Alterado para o nome do serviço do banco de dados
      port: 5432,
      username: 'postgress_7oc7_user',
      password: 'o65U3DLHVemBCW0m4nwMobBhQR1YxA5t',
      database: 'postgress_7oc7',
      autoLoadEntities: true,
      synchronize: true,
      entities: [Movie], // Adicionando a entidade Movie aqui
    }),
    MoviesModule,
    AuthModule,
  ],
})
export class AppModule {}
