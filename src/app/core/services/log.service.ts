import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  track = (module: string, method: string, entityName: string, entity: any): void => {
    console.log(`${module}->${method}->${entityName}: `, entity);
  }

}
