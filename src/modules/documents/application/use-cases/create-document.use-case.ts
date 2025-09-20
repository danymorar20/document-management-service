import { Injectable } from '@nestjs/common';
import { DocumentRepository } from '../../domain/repositories/document.repository';
import { Document } from '../../domain/entities/document.entity';

@Injectable()
export class CreateDocumentUseCase {
  constructor(private readonly documentRepository: DocumentRepository) {}

  async execute(
    createDocument: Omit<Document, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Document> {
    const newDocument = {
      ...createDocument,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    return await this.documentRepository.create(newDocument);
  }
}
