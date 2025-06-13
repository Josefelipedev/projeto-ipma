import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import axios from 'axios';
import { ApiResponseIdentifiers } from './dto/api-response-identifiers.dto';
import { ApiResponseWeatherDto } from './dto/api-response-weather.dto';

@Injectable()
export class IpmaService {
  private readonly baseUrlIpma: string;
  constructor(private configService: ConfigService) {
    this.baseUrlIpma = this.configService.baseUrlIpma();
  }

  async getFaroIdentifiers() {
    try {
      const { data } = await axios.get<ApiResponseIdentifiers>(
        `${this.baseUrlIpma}/open-data/distrits-islands.json`
      );
      const findFaro = data.data.find((local) => local.local == 'Faro');
      return findFaro?.globalIdLocal;
    } catch (e: any) {
      console.log(e);
      throw new HttpException(e?.response?.data, 400, e);
    }
  }

  async getWeatherFaro(): Promise<ApiResponseWeatherDto> {
    try {
      const globalIdLocal = await this.getFaroIdentifiers();
      const response = await axios.get<ApiResponseWeatherDto>(
        `${this.baseUrlIpma}/open-data/forecast/meteorology/cities/daily/${globalIdLocal}.json`
      );

      return response?.data;
    } catch (e: any) {
      throw new HttpException(e?.response?.data, 400, e);
    }
  }
}
