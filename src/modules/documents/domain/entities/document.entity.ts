import { Acl } from "./acl.entity";
import { Retention } from "./retention.entity";
import { Taxonomy } from "./taxonomy.entity";

export class Document {
  id: string;
  customerId: string;
  processId?: string;
  taxonomy: Taxonomy;
  acl: Acl;
  retention: Retention;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  currentVersion?: any;
}
