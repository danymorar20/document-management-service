import { Prop, Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema()
export class Taxonomy {
  @Prop({ required: true })
  @ApiProperty()
  domain: string;

  @Prop({ required: true })
  @ApiProperty()
  category: string;

  @Prop({ required: true })
  @ApiProperty()
  docType: string;
}
