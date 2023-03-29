import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Entity, Column } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";

@ObjectType()
@Entity()
export class User {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column()
    name: string;
}











