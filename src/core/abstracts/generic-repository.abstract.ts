
export abstract class IGenericRepository<T> {
  abstract getAll(): Promise<T[]>;

  abstract get(id: string): Promise<T>;

  abstract findByAttribute(attribute: string, value: any): Promise<T>;

  abstract findAllByAttribute(attribute: string, value: any): Promise<T[]>;

  abstract create(item: T): Promise<T>;

  abstract update(id: string, item: T);

  abstract delete(id: string): Promise<T>;

  abstract countByCriteria(criteria: any): Promise<number>;
  

}
