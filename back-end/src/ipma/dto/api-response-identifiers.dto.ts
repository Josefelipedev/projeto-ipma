import { ApiProperty } from '@nestjs/swagger';
import { LocationDto } from './location.dto';

export class ApiResponseIdentifiers {
  @ApiProperty({ type: String })
  owner: string;

  @ApiProperty({ type: String })
  country: string;

  @ApiProperty({ type: [String] })
  data: LocationDto[];
}
