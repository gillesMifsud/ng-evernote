import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import * as Evernote from 'evernote/lib/index.js';
import { catchError, map, tap } from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class NoteService {

  prodUrl = 'https://www.evernote.com';
  testUrl = 'https://sandbox.evernote.com';

  client = new Evernote.Client({token: this.authService.handleAuthentication()});
  noteStore = this.client.getNoteStore();

  constructor( private http: HttpClient,
               private authService: AuthService) {}

  getNotes() {
    return this.noteStore.listNotebooks(function (err, notebooks) {});
  }
}
