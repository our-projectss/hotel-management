import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isLogined: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }
}
