import { Component, OnInit } from '@angular/core';
import { EnregestementServiceService } from '../Services/enregestement-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Citizen } from '../enregistrement/enregistrement.component';
export class Candidate{
  constructor(
    public name: String,
    public nbVotes : number

  ){}
}
@Component({
  selector: 'app-votepage',
  templateUrl: './votepage.component.html',
  styleUrls: ['./votepage.component.css']
})
export class VotepageComponent implements OnInit {
  idCiti:number 
  constructor(private router: Router,private route : ActivatedRoute, private candidateService: EnregestementServiceService) { }
  Candidates  : Candidate[]
  candidat : Candidate
  citizin: Citizen
  utilisateur: string 
  ngOnInit(): void {
    this.utilisateur=sessionStorage.getItem("authenticateUser");
    this.idCiti=this.route.snapshot.params['id'];
    this.retriveAllCandidtes();
  this.citizin=new Citizen(1,'','',new Date,'','',false)
  this.candidateService.retriveCitizen(this.idCiti).subscribe(
    Response=>
    {
      this.citizin=Response;
    }
  )
  console.log(this.citizin)
  }
  retriveAllCandidtes(){
    this.candidateService.retriveAllCandidates().subscribe(
      Response=>{
        this.Candidates=Response
        console.log(this.Candidates);
      }
    )
  }
  VoteUpdate(id){
    this.citizin.hasvoted=true;
   this.candidateService.UpdateCitizen(this.idCiti,this.citizin).subscribe(
     Response=>{
       console.log("update of citizen suc")

     }
   )
    this.router.navigate(['merciVoted/',id])

  }
 

}
