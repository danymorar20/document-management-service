import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DocumentRepository } from '../../domain/repositories/document.repository';
import { Document } from '../../domain/entities/document.entity';

@Injectable()
export class GetDocumentByIdUseCase {
  constructor(private readonly documentRepository: DocumentRepository) {}

  async execute(id: string): Promise<Document> {
    const document = await this.documentRepository.findById(id);
    if (!document) {
      throw new HttpException('Document not found', HttpStatus.NOT_FOUND);
    }
    return document
  }
}
