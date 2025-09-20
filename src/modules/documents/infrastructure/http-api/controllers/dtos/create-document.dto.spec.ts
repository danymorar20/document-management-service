import { validate } from 'class-validator';
import { CreateDocumentDto } from './create-document.dto';
import { TaxonomyDto } from './taxonomy.dto';
import { RetentionDto } from './retention.dto';
import { AclDto } from './acl.dto';

describe('CreateDocumentDto', () => {
  it('should fail validation if required fields are missing', async () => {
    const dto = new CreateDocumentDto();
    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should pass validation with valid data', async () => {
    const dto = new CreateDocumentDto();
    dto.customerId = 'string-uuid';
    dto.processId = 'string-uuid';
    dto.taxonomy = Object.assign(new TaxonomyDto(), {
      domain: 'string',
      category: 'document',
      docType: 'pdf',
    });
    dto.acl = Object.assign(new AclDto(), {
      owners: ['user-a', 'user-b'],
      readers: ['user-c'],
      updaters: ['user-d', 'user-e'],
      roles: ['admin'],
    });
    dto.retention = Object.assign(new RetentionDto(), {
      policyId: 'string',
      deleteAt: '132025-12-31T23:59:59Z',
      mode: 'SOFT',
    });

    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });
});
