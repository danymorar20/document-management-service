import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  DocumentVersion,
  DocumentVersionSchema,
} from './schemas/document-version.schema';

@Module({
  imports: [
    // MongooseModule.forFeature([
    //   { name: DocumentVersion.name, schema: DocumentVersionSchema },
    // ]),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class VersionsModule {}
