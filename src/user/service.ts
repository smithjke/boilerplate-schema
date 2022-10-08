import { CrudAxiosService, CrudService } from '@smithjke/2p-core/crud';
import { EntityCrudType, listedEntity, singleEntity } from './schema';

export interface Service extends CrudService<EntityCrudType> {}

export class ClientService extends CrudAxiosService<EntityCrudType> implements Service {
  protected singleEntity = singleEntity;

  protected listedEntity = listedEntity;
}
