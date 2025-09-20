import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CreateDocumentDto } from './dtos/create-document.dto';
import { CreateDocumentUseCase } from 'src/modules/documents/application/use-cases/create-document.use-case';
import { DocumentMockRepository } from '../../../infrastructure/persistence/mock/document.repository.impl';

@ApiTags('documents')
@Controller('documents')
export class DocumentsController {
  private readonly repository = new DocumentMockRepository();

  constructor(private readonly createDocumentUseCase: CreateDocumentUseCase) {}

  @Post()
  @ApiOperation({ summary: 'Create a new document (mock)' })
  @ApiBody({ type: CreateDocumentDto })
  @ApiResponse({ status: 201, description: 'Document created successfully' })
  async create(@Body() dto: CreateDocumentDto) {
    const acl = dto.acl ?? { owners: [], readers: [], updaters: [], roles: [] };
    const doc = await this.createDocumentUseCase.execute({
      ...dto,
      acl,
    });
    return doc;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get document by ID (mock)' })
  @ApiResponse({ status: 200, description: 'Document found' })
  @ApiResponse({ status: 404, description: 'Document not found' })
  async findById(@Param('id') id: string) {
    const doc = await this.repository.findById(id);
    if (!doc) throw new NotFoundException('Document not found');
    return doc;
  }
}
