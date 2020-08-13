import { Observable } from 'rxjs';
import { VoteService, Cand } from './../../services/voting/vote.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  candidates: Observable<Cand[]>;
  constructor(private vote:VoteService,private router:Router) { }

  ngOnInit(): void {
    this.candidates=this.vote.getCandidates(); 
  }

  redirectCandidate(id:string){
    this.router.navigate(['/candidate',id]);
  }
  Vote(id:string) {
    this.vote.voteCand(id);
  }

}
