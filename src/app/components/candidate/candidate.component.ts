import { Observable } from 'rxjs';
import { VoteService, Cand, UpdateCand } from './../../services/voting/vote.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  candDetails:Observable<Cand>;
  id:string;
  candkey:string;
  Updatecand:UpdateCand={
    name:"",
    challengesSolved:0,
    candidateExpertiseLevel:0,
    expertIn : {
        java:0,
        python:0,
        DataStructures:0,
        Algorithms:0,
        Cpp:0,
    }
  };
  key:string;
  constructor(private vote:VoteService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id=params['id'];
    })
    this.candDetails=this.vote.getCandidate(this.id)
  }
  updateCand(id:string){
    this.vote.updateCandidate(id,this.Updatecand)
  }
  deletecandidate(id:string){
    this.vote.deleteCandidate(id,this.key)
    this.router.navigateByUrl('')
  }
}
