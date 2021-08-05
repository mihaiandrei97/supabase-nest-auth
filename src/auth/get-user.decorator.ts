import { createParamDecorator, ExecutionContext } from '@nestjs/common';
//import { User } from '../user/user.entity'; // Your user entity or type

export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): any => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);

// export const GetUser = createParamDecorator(
//   (data, ctx: ExecutionContext): User => {
//     const request = ctx.switchToHttp().getRequest();
//     return request.user;
//   },
// );
