import { Person } from "./person.model";
import { Project } from "./project.model";

export class ProjectMember {
    constructor(
      public id: number,
      public person: Person,
      public project: Project,
      public startDate: Date,
      public endDate: Date,
      public active: boolean,
      public role: string,
    ) {}
}