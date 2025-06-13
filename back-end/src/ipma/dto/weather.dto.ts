import { ApiProperty } from '@nestjs/swagger';

export class WeatherDto {
  @ApiProperty()
  precipitaProb: string;

  @ApiProperty()
  tMin: string;

  @ApiProperty()
  tMax: string;

  @ApiProperty()
  predWindDir: string;

  @ApiProperty()
  idWeatherType: number;

  @ApiProperty()
  classWindSpeed: number;

  @ApiProperty()
  longitude: string;

  @ApiProperty()
  forecastDate: string;

  @ApiProperty()
  latitude: string;
}
