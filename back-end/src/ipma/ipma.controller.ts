import { Controller, Get } from '@nestjs/common';
import { IpmaService } from './ipma.service';
import { plainToInstance } from 'class-transformer';
import { WeatherResponseDto } from './dto/weather-response.dto';

@Controller('ipma')
export class IpmaController {
  constructor(private readonly ipmaService: IpmaService) {}

  @Get('/weather-faro')
  async getFaroIstritsIslands() {
    const weather = await this.ipmaService.getWeatherFaro();

    const weatherDto = plainToInstance(WeatherResponseDto, weather.data, {
      excludeExtraneousValues: true,
    });
    const dateWeather = weatherDto.map((date) => date.forecastDate);

    return {
      weather: weatherDto,
      dateWeather: dateWeather,
    };
  }
}
