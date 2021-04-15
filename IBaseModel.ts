export class IBaseModel<T>{
  protected data:T;
  constructor(instance:T){
    this.data = instance;
  }
}