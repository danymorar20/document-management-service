import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { TaxonomyDto } from './taxonomy.dto';
import { AclDto } from './acl.dto';
import { RetentionDto } from './retention.dto';

export class CreateDocumentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  customerId: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  processId?: string;

  @ApiProperty({ type: TaxonomyDto })
  @ValidateNested()
  @Type(() => TaxonomyDto)
  taxonomy: TaxonomyDto;

  @ApiProperty({ type: AclDto, required: false })
  @ValidateNested()
  @Type(() => AclDto)
  @IsOptional()
  acl?: AclDto;

  @ApiProperty({ type: RetentionDto })
  @ValidateNested()
  @Type(() => RetentionDto)
  retention: RetentionDto;
}
