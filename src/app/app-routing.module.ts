import { CreatecandComponent } from './components/createcand/createcand.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component:CandidatesComponent},
  {path:'candidate/:id',component:CandidateComponent},
  {path:'createcandidate',component:CreatecandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
