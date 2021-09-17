import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmpRequestService} from '../services/emp-request.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emp-sendrequest',
  templateUrl: './emp-sendrequest.component.html',
  styleUrls: ['./emp-sendrequest.component.css']
})
export class EmpSendrequestComponent implements OnInit {

  msg:String;

  tasks = [
    { id: 1, name: "Add" },
    { id: 2, name: "Update" },
    { id: 3, name: "Delete" },
  ];
 
  requestRef = new FormGroup({
    empEmail:new FormControl(),
    productName: new FormControl(),
    operation: new FormControl(),
    qty: new FormControl()
  });
  
  constructor(public empRequestSer: EmpRequestService,
    public activatedRoute:ActivatedRoute, 
    public router:Router) { }

  ngOnInit(): void {
  }

  sendRequest(){ 
      let empReq = this.requestRef.value;
      this.empRequestSer.addEmployerRequest(empReq).subscribe(result => {
        this.msg = result
        , err => {console.log(err);}
      })

      this.requestRef.reset();
  }

  back(){
    this.router.navigate(["EmployeePanel/:uname"]);
  }

}
