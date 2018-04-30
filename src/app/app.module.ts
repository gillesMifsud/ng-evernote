import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { NoteComponent } from './note/note.component';
import {NoteService} from './note/note.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService, NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
