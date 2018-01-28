export class CustomerSearchCriteria {

  constructor (public firstName: string,
               public lastName: string,
               public emailAddress?: string,
               public city?: string,
               public state?: string,
               public zip?: string) {}

}
