import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getData(): Observable<string[]> {
    return of(['Denys', 'Hriaznov']);
  }
}
