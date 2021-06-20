import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicService } from 'src/app/core/services/basic.service';
import { LogService } from 'src/app/core/services/log.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  aNumber: number = 0;
  anArray: number[] = [];
  tenStrings: string[] = [];
  fourArrays: number[][] = [];
  fourObservables: number[][] = [];

  constructor(private basic: BasicService, private log: LogService) { }

  ngOnInit(): void {
    setTimeout(() => {
      // A number
      this.basic.getANumber().subscribe({
        next: (aNumber: number) => {
          this.aNumber = aNumber;
        },
        error: (e: any) => {
          this.log.track('BasicComponent', this.ngOnInit.name, 'basic.getOneNumber', e);
          this.aNumber = -1;
        },
        complete: () => {
          setTimeout(() => {
            // An array
            this.basic.getAnArray().subscribe({
              next: (anArray: number[]) => {
                this.anArray = anArray;
              },
              complete: () => {
                setTimeout(()=> {
                  // Ten strings
                  this.basic.getTenStrings().pipe( ).subscribe({
                    next: (eachString: string) => {
                      this.tenStrings.push(eachString);
                    },
                    complete: () => {
                      setTimeout(() => {
                        // Four arrays
                        this.basic.getFourArrays().subscribe({
                          next: (eachArray: number[]) => {
                            this.fourArrays.push(eachArray);
                          },
                          complete: () => {
                            setTimeout(() => {
                              this.basic.getFourObservables().subscribe({
                                next: (o: Observable<number[]>) => {
                                  o.subscribe({
                                    next: (eachNumber: number[]) => {
                                      this.fourObservables.push(eachNumber);
                                    }
                                  });
                                }
                              });
                            }, 2000);
                          }
                        });
                      }, 2000);
                    }
                  });
                }, 2000);
              }
            });
          }, 2000);
        },
      })
    }, 2000);
  }


  /*
  get someArray() {
    return this.basic.someArray;
  }
  */
}
