import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Length, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateContactDto {
  @ApiProperty({example: "Munisa"})
  @IsString()
  @Length(1, 50, { message: 'First name must be between 1 and 50 characters' })
  firstName: string;

  @ApiProperty({example: "Ibodullayeva"})
  @IsString()
  @Length(1, 50, { message: 'Last name must be between 1 and 50 characters' })
  lastName: string;

  @ApiProperty({example: "munisaforuse22@gmail.com"})
  @IsNotEmpty()
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email: string;

  @ApiProperty({example: "It is good!"})
  @IsString()
  @IsNotEmpty()
  @Length(5, 1000, { message: 'Message must be between 5 and 1000 characters' })
  message: string;
}

