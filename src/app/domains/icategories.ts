import { IBooks } from './ibooks';

export interface ICategories {
  id : number;

  title : String;

  Books: IBooks[];

}
