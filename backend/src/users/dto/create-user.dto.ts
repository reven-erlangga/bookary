import { Expose } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Expose({ name: 'first_name' })
  public firstName: string;

  @IsString()
  @IsNotEmpty()
  @Expose({ name: 'phone_number' })
  public phoneNumber: string;

  @IsString()
  @Expose({ name: 'last_name' })
  public lastName: string;

  @IsDate()
  @Expose({ name: 'date_of_birth' })
  public dateOfBirth: Date;
}
