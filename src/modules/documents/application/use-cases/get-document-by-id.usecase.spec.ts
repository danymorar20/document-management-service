import { GetDocumentByIdUseCase } from './get-document-by-id.use-case';
import { DocumentRepository } from '../../domain/repositories/document.repository';
import { HttpException } from '@nestjs/common';

class MockRepo implements DocumentRepository {
  async create(): Promise<any> {
    return null;
  }
  async findById(id: string) {
    if (id === 'mock-doc-123') {
      return { id: 'mock-doc-123', customerId: 'cust-1' } as any;
    }
    return null;
  }
}

describe('GetDocumentByIdUseCase', () => {
  let useCase: GetDocumentByIdUseCase;

  beforeEach(() => {
    useCase = new GetDocumentByIdUseCase(new MockRepo());
  });

  it('should return document when found', async () => {
    const result = await useCase.execute('mock-doc-123');
    expect(result).toEqual({ id: 'mock-doc-123', customerId: 'cust-1' });
  });

  it('should throw 404 if document not found', async () => {
    await expect(useCase.execute('nonexistent')).rejects.toThrow(HttpException);
  });
});
