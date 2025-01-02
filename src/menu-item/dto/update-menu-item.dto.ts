import { IsString, IsInt, IsOptional, IsUUID } from 'class-validator';

export class UpdateMenuItemDto {
  @IsString()
  name?: string;
}
