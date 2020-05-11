import { Component, OnInit } from '@angular/core';
import { Candidate } from '../votepage/votepage.component';
import { EnregestementServiceService } from '../Services/enregestement-service.service';

@Component({
  selector: 'app-resulta-vote',
  templateUrl: './resulta-vote.component.html',
  styleUrls: ['./resulta-vote.component.css']
})
export class ResultaVoteComponent implements OnInit {

  constructor(private ServiceCandidates: EnregestementServiceService) { }
  candidates: Candidate[]
  
  ngOnInit(): void {
    this.retriveAllCandidtes();
  }
  retriveAllCandidtes(){
    this.ServiceCandidates.retriveAllCandidates().subscribe(
      Response=>{
        this.candidates=Response
        console.log(this.candidates);
      }
    )
  }
  
  
}
