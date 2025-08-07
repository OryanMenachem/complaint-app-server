import { IsString, IsNotEmpty } from 'class-validator';

export class CreateComplaintDto {
  @IsString()
  @IsNotEmpty({ message: 'Complaint content must not be empty' })
  content: string;

  @IsString()
  @IsNotEmpty({ message: 'Complaint category must not be empty' })
  category: string;
}
