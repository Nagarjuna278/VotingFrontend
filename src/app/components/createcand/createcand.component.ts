import { VoteService, CreateCand } from './../../services/voting/vote.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createcand',
  templateUrl: './createcand.component.html',
  styleUrls: ['./createcand.component.scss']
})
export class CreatecandComponent implements OnInit {

  newcandidate : CreateCand = {
    name:"",
    challengesSolved:0,
    candidateExpertiseLevel:0,
    expertIn : {
        java:0,
        python:0,
        DataStructures:0,
        Algorithms:0,
        Cpp:0,
    },
    candidateId:"",
  }
  key:string;

  constructor(private vote:VoteService) { }

  ngOnInit(): void {
  }
  createcandidate(){
    this.vote.createCandidate(this.key,this.newcandidate);
    this.newcandidate = {
      name:"",
      challengesSolved:0,
      candidateExpertiseLevel:0,
      expertIn : {
          java:0,
          python:0,
          DataStructures:0,
          Algorithms:0,
          Cpp:0,
      },
      candidateId:"",
    } 
  }

}
