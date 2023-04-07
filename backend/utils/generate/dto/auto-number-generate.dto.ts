import { IsInt, IsNotEmpty } from 'class-validator';

export class AutoNumberDto {
  @IsNotEmpty()
  @IsInt()
  public min: number;

  @IsNotEmpty()
  @IsInt()
  public max: number;
}
