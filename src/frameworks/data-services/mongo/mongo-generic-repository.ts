import { Model } from "mongoose";
import { IGenericRepository } from "../../../core";

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  private _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  getAll(): Promise<T[]> {
    return this._repository
      .find({ deletedAt: null })
      .populate(this._populateOnFind)
      .exec();
  }

  get(id: any): Promise<T> {
    return this._repository
      .findById(id)
      .where("deletedAt", null)
      .populate(this._populateOnFind)
      .exec();
  }
  findByAttribute(attribute: string, value: any): Promise<T> {
    return this._repository
      .findOne({ [attribute]: value, deletedAt: null })
      .populate(this._populateOnFind)
      .exec();
  }
  findAllByAttribute(attribute: string, value: any): Promise<T[]> {
    return this._repository
      .find({ [attribute]: value, deletedAt: null })
      .populate(this._populateOnFind)
      .exec();
  }

  create(item: T): Promise<T> {
    return this._repository.create(item);
  }

  update(id: string, item: T) {
    return this._repository.findByIdAndUpdate(id, item, {
      returnOriginal: false,
    });
  }
  //soft delete
  async delete(id: string): Promise<T> {
    return this._repository.findByIdAndUpdate(id, { deletedAt: new Date() });
  }

  countByCriteria(criteria: any): Promise<number> {
    return this._repository.countDocuments(criteria).exec();
  }
}
