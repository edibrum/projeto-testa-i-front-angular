import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'Início'
  message: string = 'Projeto Testa - I';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
