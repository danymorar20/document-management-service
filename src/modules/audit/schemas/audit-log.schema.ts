import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document as MongooseDocument, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type AuditLogDocument = MongooseDocument & AuditLog;

@Schema({
  timestamps: { createdAt: 'timestamp' },
})
export class AuditLog {
  @Prop({ required: true, type: Types.ObjectId, ref: 'Document' })
  @ApiProperty()
  documentId: string;

  @Prop()
  @ApiProperty({ required: false })
  version?: number;

  @Prop({ required: true })
  @ApiProperty()
  action: string;

  @Prop({ required: true })
  @ApiProperty()
  actorId: string;

  @Prop([String])
  @ApiProperty({ type: [String], required: false })
  roles?: string[];

  @Prop()
  @ApiProperty()
  ip: string;

  @Prop()
  @ApiProperty()
  userAgent: string;

  @Prop({ required: true })
  @ApiProperty({ enum: ['SUCCESS', 'FAILURE'] })
  result: string;

  @Prop()
  @ApiProperty({ required: false })
  reason?: string;
}

export const AuditLogSchema = SchemaFactory.createForClass(AuditLog);

AuditLogSchema.index({ documentId: 1 });
AuditLogSchema.index({ timestamp: 1 });
