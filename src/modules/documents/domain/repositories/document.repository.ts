import { Document } from "../entities/document.entity";

export abstract class DocumentRepository {
  abstract create(document: Omit<Document, 'id'>): Promise<Document>;
  abstract findById(id: string): Promise<Document | null>;
}
