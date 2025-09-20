import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsOptional, IsString } from "class-validator";

export class RetentionDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  policyId?: string;

  @IsOptional()
  @ApiProperty({ type: Date, required: false })
  deleteAt?: string;

  @ApiProperty({ enum: ['SOFT', 'HARD'] })
  @IsIn(['SOFT', 'HARD'])
  mode: 'SOFT' | 'HARD';
}