import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  title: string = 'Projetos'
  message: string = 'Registros de Projetos';
  
  projectList: any [] = [];
  
  columns = [
    {'Title': 'NOME DO PROJETO', 'Value': 'name' },
    {'Title': 'STATUS', 'Value': 'email' },
    {'Title': 'GERENTE RESPONSÁVEL', 'Value': 'phone' },
    {'Title': 'AÇÕES', 'Value': '' } 
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadDataList();
  }

  loadDataList() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result: any)=> {
     this.projectList = result;
    })
  }

  viewProject(item: any) {
    debugger;
  }

  editProject(item: any) {
    debugger;
  }
  deleteProject(item: any) {
    debugger;
  }
}
