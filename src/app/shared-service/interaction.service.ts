import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private countNum = new Subject()
  counter$ = this.countNum.asObservable()
  constructor() { }

  sendNumber(value: number) {
    this.countNum.next(value)
  }
}
