import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document as MongooseDocument } from 'mongoose';
import { Taxonomy } from './taxonomy.schema';
import { Acl } from './acl.schema';
import { Retention } from './retention.schema';

export type DocumentDocument = Document & MongooseDocument;

@Schema({
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
})
export class Document {
  @Prop({ required: true, type: String })
  @ApiProperty()
  customerId: string;

  @Prop({ required: false, type: String })
  @ApiProperty({ required: false })
  processId?: string;

  @Prop({ type: Taxonomy })
  @ApiProperty({ type: Taxonomy })
  taxonomy: Taxonomy;

  @Prop()
  @ApiProperty({ required: false })
  currentVersion?: string;

  @Prop({ type: Acl })
  @ApiProperty({ type: Acl })
  acl: Acl;

  @Prop({ type: Retention })
  @ApiProperty({ type: Retention })
  retention: Retention;

  @Prop()
  @ApiProperty({ required: false })
  deletedAt?: Date;
}

export const DocumentSchema = SchemaFactory.createForClass(Document);

DocumentSchema.index({
  customerId: 1,
  'taxonomy.domain': 1,
  'taxonomy.category': 1,
});
DocumentSchema.index({ 'retention.deleteAt': 1 });
