//GraphQL작업을 데이터로 전환하기 위한 방식을 제공합니다.
//스키마에서 지정한 것과 동일한 형태의 데이터를 동기적으로 또는 해당 형태의 결과로 확인되는 Promise를 반환합니다. 일반적으로 리졸버 맵은 수동으로 생성 합니다.
//@Nestjs/GraphQL 패키지는 클래스에 주석을 추가는데 사용하는 데코레이터를 제공하는 메타데이터를 사용하여 자동으로 리졸버 맵을 생성
import { Args, Mutation, Resolver, Query, Int} from "@nestjs/graphql";
import { CreateUserDto } from "./createUser.dto";
import { User } from "./user.entity";
import { UserService } from "./user.service";
@Resolver(() => User)
export class UserResolver {
    constructor(
        private readonly USER_SERVICE: UserService
        ) {}

    @Mutation(() => User)
    async createUser(@Args('users') users: CreateUserDto) {
        return await this.USER_SERVICE.create(users)
    }

    @Query(() => User)
  async user(@Args('id', { type: () => Int }) id: number) {
    return this.USER_SERVICE.findById(id);
  }

    @Query(() => [User], { name: 'users' })
    async getUser() {
        return this.USER_SERVICE.findUsers();
    }
}









