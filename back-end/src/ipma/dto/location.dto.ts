import { ApiProperty } from '@nestjs/swagger';

export class LocationDto {
  @ApiProperty()
  idRegiao: number;

  @ApiProperty()
  idAreaAviso: string;

  @ApiProperty()
  idConcelho: number;

  @ApiProperty()
  globalIdLocal: number;

  @ApiProperty()
  latitude: string;

  @ApiProperty()
  longitude: string;

  @ApiProperty()
  idDistrito: number;

  @ApiProperty()
  local: string;


}
