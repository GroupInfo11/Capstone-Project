import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-panel',
  templateUrl: './employee-panel.component.html',
  styleUrls: ['./employee-panel.component.css']
})
export class EmployeePanelComponent implements OnInit {
  username?:string;
  constructor(public activatedRoute:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>this.username=data.uname);
  }
  backToSignIn(){
    this.router.navigate(["EmployeeSignIn"]);
  }
}
