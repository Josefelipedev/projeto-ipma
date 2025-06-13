import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private configService: NestConfigService) {}

  baseUrlIpma(): string {
    const baseUrl = this.configService.get<string>('BASE_URL_IPMA');
    if (!baseUrl) {
      throw new Error(
        'BASE_URL_IPMA is not defined in the environment variables.'
      );
    }
    return baseUrl;
  }
}
