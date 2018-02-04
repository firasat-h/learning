import { Injectable } from '@angular/core';

@Injectable()
export class AbstractBaseService {

  constructor() { }

  log(serviceName: string, message: string) {
    //this.messageService.add('HeroService: ' + message);
    console.log(serviceName + ":: " + message);
  }

}
