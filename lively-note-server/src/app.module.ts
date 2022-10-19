import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": 'mysql',
      "host": 'localhost',
      "port": 3306,
      "username": 'root',
      "password": 'root',
      "database": 'lively_note_db',
      "synchronize": false,
      "entities": ['dist/**/*.entity{.ts, .js}'],
      "migrations": ["dist/migration/*.js"],
      "migrationsTableName": "migrations"
    }),
    UsersModule,
  ],
})
export class AppModule {}
