import { Injectable } from '@nestjs/common';
import { Document } from 'src/modules/documents/domain/entities/document.entity';
import { DocumentRepository } from 'src/modules/documents/domain/repositories/document.repository';

@Injectable()
export class DocumentMockRepository implements DocumentRepository {
  async create(createDocumentDto: Omit<Document, 'id'>): Promise<Document> {
    const newDoc: Document = {
      id: 'mock-doc-' + Math.random().toString(36).substring(7),
      customerId: createDocumentDto.customerId,
      taxonomy: createDocumentDto.taxonomy,
      acl: createDocumentDto.acl,
      retention: createDocumentDto.retention,
      createdAt: createDocumentDto.createdAt,
      updatedAt: createDocumentDto.updatedAt,
      deletedAt: undefined,
      currentVersion: undefined,
    };
    return newDoc;
  }

  async findById(id: string): Promise<Document | null> {
    if (id !== 'mock-doc-123') {
      return null;
    }
    const mockDocument: Document = {
      id: 'mock-doc-123',
      customerId: 'mock-customer',
      taxonomy: {
        domain: 'Legal',
        category: 'Contracts',
        docType: 'PDF',
      },
      acl: {
        owners: ['mock-owner'],
        readers: ['user-A'],
        updaters: [],
        roles: [],
      },
      retention: {
        mode: 'SOFT',
        deleteAt: new Date('2025-12-31T23:59:59Z').toISOString(),
      },
      createdAt: new Date('2025-09-20T10:00:00Z').toISOString(),
      updatedAt: new Date('2025-09-20T10:00:00Z').toISOString(),
      currentVersion: {
        version: 1,
        filename: 'mock-contract.pdf',
        size: 1024,
        mimeType: 'application/pdf',
      },
    };
    return mockDocument;
  }
}
