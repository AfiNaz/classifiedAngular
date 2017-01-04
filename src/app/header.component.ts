import { Component, OnInit,Input } from '@angular/core';
import {Advertise} from "../shared/Advertisment";
import { Homeapplicance } from "../shared/HomeApplicance";
import { Servies  } from '../Services/addService';

@Component({
  selector: 'app-header',
  template: `
    <div *ngFor="let hom_app of Homeapp">
    <img src="{{hom_app.img}}"></img>
    <strong>{{hom_app.title}}</strong>
<br>
<strong > Price:  {{hom_app.price}} </strong>
<strong > Location:  {{hom_app.area}} </strong>

     &nbsp; Owner: {{hom_app.owner}} <br> 
                  &nbsp; Contact Number:  &nbsp; {{hom_app.contact_number}} <br>
                  &nbsp; Type:  {{hom_app.type}} <br> 
                  &nbsp; Condition Details:  {{hom_app.Condition}} <br></strong>
                   &nbsp; Condition Details:  {{hom_app.category}} <br></strong>
                   <button type="button" style="margin-left:10px;" class="btn btn-info" data-toggle="collapse" attr.href="#hom_app{{i}}">Details</button>
              
    </div>
    
  `,
  providers:[Servies]
})
export class HeaderComponent implements OnInit {
Homeapp:Homeapplicance[];
  constructor(private service:Servies) {
    this.service.getAdvertsie().then(homeapp=>this.Homeapp=homeapp)
   }

  ngOnInit() {
   
    this.service.getAdvertsie();
  }

}
