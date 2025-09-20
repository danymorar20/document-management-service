import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuditLog, AuditLogSchema } from './schemas/audit-log.schema';

@Module({
  imports: [
    // MongooseModule.forFeature([
    //   { name: AuditLog.name, schema: AuditLogSchema },
    // ]),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AuditModule {}
