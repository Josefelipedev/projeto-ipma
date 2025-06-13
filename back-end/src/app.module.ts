import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { IpmaModule } from './ipma/ipma.module';
import { ConfigService } from './config/config.service';

@Module({
  imports: [ConfigModule, IpmaModule],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule {}
