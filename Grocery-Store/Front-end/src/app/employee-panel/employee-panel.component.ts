import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-panel',
  templateUrl: './employee-panel.component.html',
  styleUrls: ['./employee-panel.component.css']
})
export class EmployeePanelComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  backToSignIn(){
    this.router.navigate(["EmployeeSignIn"]);
  }
}
