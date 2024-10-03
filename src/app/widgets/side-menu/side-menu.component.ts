import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarParaInicio() {
    this.router.navigate(['/home']);
  }

  navegarParaPessoas() {
    this.router.navigate(['/people']);
  }

  navegarParaProjetos() {
    this.router.navigate(['/projects']);
  }

}
