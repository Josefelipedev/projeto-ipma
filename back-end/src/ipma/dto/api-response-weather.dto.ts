import { ApiProperty } from '@nestjs/swagger';
import { WeatherDto } from './weather.dto';

export class ApiResponseWeatherDto {
  @ApiProperty({ type: String })
  owner: string;

  @ApiProperty({ type: String })
  country: string;

  @ApiProperty({ type: [String] })
  data: WeatherDto[];
}
