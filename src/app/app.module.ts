import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { BasicmoduleModule} from './modules/basicmodule/basicmodule.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { CreatecandComponent } from './components/createcand/createcand.component'

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    CandidateComponent,
    CreatecandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasicmoduleModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
