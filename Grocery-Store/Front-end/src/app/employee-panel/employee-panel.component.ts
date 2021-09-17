import { Component, OnInit,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-panel',
  templateUrl: './employee-panel.component.html',
  styleUrls: ['./employee-panel.component.css']
})
export class EmployeePanelComponent implements OnInit {

  username?:string;
  msg?:string;
  constructor(public activatedRoute:ActivatedRoute, 
              public router:Router,
              public interaction: EmployeeService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>this.username=data.uname);
    
  }
  backToSignIn(){
    this.router.navigate(["EmployeeSignIn"]);
  }

  sendRequest(){
    this.router.navigate(["emp-sendRequest"]);
  }

  updateOrder(){
    this.router.navigate(["emp-updateOrder"]);
  }

  userUnlock(){
    this.router.navigate(["unlock-user"]);
  }

  empUpdate(){
    this.router.navigate(["EmpProfileUpdate"]);
  }
}
