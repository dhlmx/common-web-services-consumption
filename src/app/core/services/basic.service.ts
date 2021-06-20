import { Injectable } from '@angular/core';
import { from, Observable, of, scheduled } from 'rxjs';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  private readonly aNumber = 3.1416;
  private readonly anArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  private readonly tenStrings = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  private readonly fourArrays = [
    [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
  ];

  constructor(private log: LogService) {
  }

  getANumber = (): Observable<number> => {
    return of<number>(this.aNumber);
  }

  getAnArray = (): Observable<number[]> => {
    return of<number[]>(this.anArray);
  }

  getFourArrays = (): Observable<number[]> => {
    return from<number[][]>(this.fourArrays);
  }

  getFourObservables = (): Observable<Observable<number[]>> => {
    return from<Observable<number[]>[]>(this.fourArrays.map((numericArray: number[]) => of<number[]>(numericArray)));
  }

  getTenStrings = (): Observable<string> => {
    return from<string[]>(this.tenStrings);
  }

}
