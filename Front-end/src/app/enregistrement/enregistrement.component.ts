import { Component, OnInit } from '@angular/core';
import { EnregestementServiceService } from '../Services/enregestement-service.service';
import { Router } from '@angular/router';
import { IsLoginService } from '../Services/is-login.service';

export class Administrator {
  constructor( 
    public email: string,
    public password: string
    ){}
 
}
export class Citizen {
  constructor(
    public id: Number,
    public name: string,
    public prenom: String,
    public dateNaissance: Date,
    public adresse: String,
    public idNational: String,
    public hasvoted: boolean

  ) { }
}
@Component({
  selector: 'app-enregistrement',
  templateUrl: './enregistrement.component.html',
  styleUrls: ['./enregistrement.component.css']
})

export class EnregistrementComponent implements OnInit {

  constructor(private Islogin:IsLoginService, private router: Router, private EnregertrementService: EnregestementServiceService) { }
  citizen: Citizen
  citizens: Citizen[]
  message: string
  Admin : Administrator
  ngOnInit(): void {
    this.citizen = new Citizen(1, '', '', new Date(), '', '', false);
    this.Admin= new Administrator('','')

  }
  // retriveAllCitizens(){
  //   this.EnregertrementService.retriveAllCitizens().subscribe(
  //     Response=>{
  //       console.log("retiveAllCitizen");
  //       console.log(Response);
  //   this.citizens=Response;
  //     }
  //   );
  // }
  AddCitizen() {
    this.EnregertrementService.AddCitizen(this.citizen).subscribe(
      Response => {
        console.log(Response);
        console.log("Add one civil");
        //this.router.navigate(['VotePage/',Response.id]);
        sessionStorage.setItem("authenticateUser", this.citizen.name);

      }
    );
  }
  FindByIdNational() {
    this.EnregertrementService.FinByIdnational(this.citizen.idNational).subscribe(
      Response => {
        console.log("finb by id national");
        console.log(Response)
        if (Response === null) {
          this.AddCitizen()

        }
        else if (!Response.hasvoted) {
          console.log("count founded but not Voted");
          this.router.navigate(['VotePage/', Response.id]);
          sessionStorage.setItem("authenticateUser", Response.name);
        }
        else {
          this.message = `vous avez deja voté ${Response.name}`;
        }

      }
    );
  }
  FindAdministrator(){
    this.EnregertrementService.retriveAdmin(this.Admin.email).subscribe(
      Response=>{
        if(Response!=null)
        {
          if(this.Admin.password === Response.password)
        {
          sessionStorage.setItem("authenticateUser", Response.email)
            this.router.navigate(['ResualtVote'])
        }
      }
      }
    )
}
}
