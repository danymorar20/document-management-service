import { Prop, Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema()
export class Retention {
  @Prop()
  @ApiProperty({ required: false })
  policyId?: string;

  @Prop()
  @ApiProperty({ required: false })
  deleteAt?: Date;

  @Prop({ required: true })
  @ApiProperty({ enum: ['SOFT', 'HARD'] })
  mode: string;
}
