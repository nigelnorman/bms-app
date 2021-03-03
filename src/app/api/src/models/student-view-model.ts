/* tslint:disable */
import { BookViewModel } from './book-view-model';
export interface StudentViewModel {
  id?: number;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  favoriteBooksList?: Array<BookViewModel>;
}
