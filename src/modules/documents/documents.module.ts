import { Module } from '@nestjs/common';
import { DocumentsController } from './infrastructure/http-api/controllers/documents.controller';
import { CreateDocumentUseCase } from './application/use-cases/create-document.use-case';
import { DocumentMockRepository } from './infrastructure/persistence/mock/document.repository.impl';
import { GetDocumentByIdUseCase } from './application/use-cases/get-document-by-id.use-case';
import { DocumentRepository } from './domain/repositories/document.repository';

@Module({
  imports: [],
  controllers: [DocumentsController],
  providers: [
    CreateDocumentUseCase,
    GetDocumentByIdUseCase,
    {
      provide: DocumentRepository,
      useClass: DocumentMockRepository,
    },
  ],
})
export class DocumentsModule {}
