export class Person {
    constructor(
      public id: number,
      public name: string,
      public birthDate: Date,
      public cpf: string,
      public employee: boolean,
      public manager: boolean
    ) {}
}