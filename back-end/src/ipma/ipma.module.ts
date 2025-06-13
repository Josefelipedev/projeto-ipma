import { Module } from '@nestjs/common';
import { IpmaController } from './ipma.controller';
import { IpmaService } from './ipma.service';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [ConfigModule],
  controllers: [IpmaController],
  providers: [IpmaService],
})
export class IpmaModule {}
