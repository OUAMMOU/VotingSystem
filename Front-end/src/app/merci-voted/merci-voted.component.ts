import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnregestementServiceService } from '../Services/enregestement-service.service';
import { Candidate } from '../votepage/votepage.component';

@Component({
  selector: 'app-merci-voted',
  templateUrl: './merci-voted.component.html',
  styleUrls: ['./merci-voted.component.css']
})
export class MerciVotedComponent implements OnInit {
  candidat: Candidate
  message: String
  constructor(private route :ActivatedRoute, private UpdateService : EnregestementServiceService) { }
    id :number
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.candidat=new Candidate('',0);
   this.UpdateService.retriveCandidat(this.id).subscribe(
      Response=>{
        console.log("retrive candidat")
        this.candidat=Response;
        console.log(this.candidat)
        this.candidat.nbVotes=this.candidat.nbVotes + 1
        this.updateVote(this.id,this.candidat);
        this.messageAff(this.candidat.name)
      }
    )
  
  }
  updateVote(id,candidat){
    this.UpdateService.UpdateCandidat(id,candidat).subscribe(
      Response=>{
        console.log("je suis en update de candidat")
          console.log(Response)
      }
    )

  }
  messageAff(nom){
    this.message=nom;

  }



}
