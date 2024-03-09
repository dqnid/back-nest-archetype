import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Throttle } from '@nestjs/throttler';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Override default configuration for Rate limiting and duration.
  @Throttle({ default: { limit: 10, ttl: 1000 } })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
