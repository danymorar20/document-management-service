import { Prop, Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema()
export class Acl {
  @Prop([String])
  @ApiProperty({ type: [String] })
  owners: string[];

  @Prop([String])
  @ApiProperty({ type: [String] })
  readers: string[];

  @Prop([String])
  @ApiProperty({ type: [String] })
  updaters: string[];

  @Prop([String])
  @ApiProperty({ type: [String] })
  roles: string[];
}
