import { Controller, Get } from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('user')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  //user
  @Get()
  index() {
    return {
      status:true,
      message: 'User works!'
    }
  }

  //user/register
  @Get('register')
  register() {
    return {
      status:true,
      message: 'User register works!'
    }    
  }
  //user/login
  @Get('login')
  login() {
    return {
      status:true,
      message: 'User login works!'
    }
  }
}
