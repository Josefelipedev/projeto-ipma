import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class WeatherResponseDto {
  @ApiProperty()
  @Expose({ name: 'tMin' })
  minTemperature: string;

  @ApiProperty()
  @Expose({ name: 'tMax' })
  maxTemperature: string;

  @ApiProperty()
  @Expose({ name: 'precipitaProb' })
  precipitationProbability: string;

  @ApiProperty()
  @Expose({ name: 'predWindDir' })
  windDirection: string;

  @ApiProperty()
  @Expose({ name: 'classWindSpeed' })
  windSpeed: number;

  @ApiProperty()
  @Expose()
  latitude: string;

  @ApiProperty()
  @Expose()
  longitude: string;

  @ApiProperty()
  @Expose({ name: 'forecastDate' })
  forecastDate: string;
}
