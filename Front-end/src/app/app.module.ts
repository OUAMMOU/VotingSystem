import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { EnregistrementComponent } from './enregistrement/enregistrement.component';
import { VotepageComponent } from './votepage/votepage.component';

import { MerciVotedComponent } from './merci-voted/merci-voted.component';
import { ResultaVoteComponent } from './resulta-vote/resulta-vote.component';
import { LogoutComponent } from './logout/logout.component';


const appRoutes:Routes = [
 
  {path: '',component: EnregistrementComponent},
  {path: 'VotePage/:id',component: VotepageComponent},
  {path: 'merci',component: MenuComponent},
  {path: 'merci/:id',component: MenuComponent},
  {path: 'merciVoted/:id',component: MerciVotedComponent},
  {path: 'ResualtVote',component: ResultaVoteComponent},
  {path: 'Logout',component: LogoutComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    EnregistrementComponent,
    VotepageComponent,
  
    MerciVotedComponent,
  
    ResultaVoteComponent,
  
    LogoutComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{enableTracing: true}),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
