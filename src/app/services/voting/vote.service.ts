import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VoteService {

  url="http://localhost:4000"
  constructor(private http:HttpClient) { }

  createCandidate(key:string,cand:CreateCand){
    console.log(cand)
    console.log(key)
   this.http.post(`${this.url}/vote/createCandidtae/${key}`,cand).subscribe(data=>{})
  }
  voteCand(id:string){
    this.http.get(`${this.url}/vote/candidate/${id}`).subscribe(data=>{})
  }
  getCandidate(id:string){
   return this.http.get<Cand>(`${this.url}/vote/${id}`)
  }
  getCandidates(){
    return this.http.get<Cand[]>(`${this.url}/vote/`)
  }
  updateCandidate(ckey:string,cand:UpdateCand){
    this.http.put(`${this.url}/vote/candidate/update/${ckey}`,cand).subscribe(data=>{})
  }
  deleteCandidate(id:string,key:string){
    this.http.delete(`${this.url}/vote/candidate/delete/${id}/${key}`).subscribe(data=>{})
  }

}
export interface CreateCand {
  name:string;
  challengesSolved:number;
  candidateExpertiseLevel:number;
  expertIn : {
      java:number;
      python:number;
      DataStructures:number;
      Algorithms:number;
      Cpp:number;
  }
  candidateId:string;
}
export interface UpdateCand {
  name:string;
  challengesSolved:number;
  candidateExpertiseLevel:number;
  expertIn : {
      java:number;
      python:number;
      DataStructures:number;
      Algorithms:number;
      Cpp:number;
  }
}
export interface Cand {
  _id:string;
  __v:number;
  name:string;
  votes:number;
  candidateId:string;
  challengesSolved:number;
  candidateExpertiseLevel:number;
  expertIn : {
      java:number;
      python:number;
      DataStructures:number;
      Algorithms:number;
      Cpp:number;
  }
}
