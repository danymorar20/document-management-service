import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document as MongooseDocument, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type DocumentVersionDocument = MongooseDocument & DocumentVersion;

@Schema({
  timestamps: { createdAt: 'createdAt' },
})
export class DocumentVersion {
  @Prop({ required: true, type: Types.ObjectId, ref: 'Document' })
  @ApiProperty()
  documentId: string;

  @Prop({ required: true })
  @ApiProperty()
  version: number;

  @Prop({ required: true })
  @ApiProperty()
  filename: string;

  @Prop({ required: true })
  @ApiProperty()
  mimeType: string;

  @Prop({ required: true })
  @ApiProperty()
  size: number;

  @Prop()
  @ApiProperty({ required: false })
  hash?: string;

  @Prop({ required: true })
  @ApiProperty()
  storageKey: string;

  @Prop({ required: true })
  @ApiProperty()
  createdBy: string;
}

export const DocumentVersionSchema =
  SchemaFactory.createForClass(DocumentVersion);

DocumentVersionSchema.index({ documentId: 1, version: 1 }, { unique: true });
