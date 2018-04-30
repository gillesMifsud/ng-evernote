import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import * as Evernote from 'evernote/lib/index.js';
import { catchError, map, tap } from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class NoteService {

  prodUrl = 'https://www.evernote.com';
  testUrl = 'https://sandbox.evernote.com/';

  constructor( private http: HttpClient,
               private authService: AuthService) {}
}
