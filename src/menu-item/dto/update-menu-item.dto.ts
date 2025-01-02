import { IsString } from 'class-validator';

export class UpdateMenuItemDto {
  @IsString()
  name?: string;
}
