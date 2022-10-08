import { Static, Type } from '@sinclair/typebox';
import { CrudSchema, CrudType } from '@smithjke/2p-core/crud';

export const entity = Type.Object({
  id: Type.String(),
  name: Type.String(),
  passwordHash: Type.String(),
  passwordSalt: Type.String(),
  createdAt: Type.Integer(),
  updatedAt: Type.Integer(),
});

export const singleEntity = entity;

export const listedEntity = entity;

export const createEntity = Type.Omit(entity, [
  'id',
  'createdAt',
  'updatedAt',
]);

export const updateEntity = Type.Partial(createEntity);

export const entityKey = Type.Pick(entity, ['id']);

export const entityFilter = Type.Object({});

export enum EntityOrderField {
  ID = 'id',
}

export const entityOrderField = Type.Enum(EntityOrderField);

export type SingleEntity = Static<typeof singleEntity>;
export type ListedEntity = Static<typeof listedEntity>;
export type CreateEntity = Static<typeof createEntity>;
export type UpdateEntity = Static<typeof updateEntity>;
export type EntityKey = Static<typeof entityKey>;
export type EntityFilter = Static<typeof entityFilter>;

export const entityCrudSchema: CrudSchema = {
  singleEntity,
  listedEntity,
  createEntity,
  updateEntity,
  entityKey,
  entityFilter,
  entityOrderField,
};

export type EntityCrudType = CrudType<
  SingleEntity,
  ListedEntity,
  CreateEntity,
  UpdateEntity,
  EntityKey,
  EntityFilter,
  EntityOrderField>;
