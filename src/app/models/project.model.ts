export class Project {
    constructor(
      public id: number,
      public name: string,
      public startDate: Date,
      public expectedEndDate: Date,
      public endDate: Date,
      public description: string,
      public status: string,
      public budget: number,
      public risk: string,
      public managerId: number,
    ) {}
}