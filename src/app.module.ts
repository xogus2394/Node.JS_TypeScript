import { ApolloDriver } from '@nestjs/apollo';
import { ApolloDriverConfig } from '@nestjs/apollo/dist/interfaces';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '23942394',
      database: 'test',
      entities: [User],
      synchronize: true,

  }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
