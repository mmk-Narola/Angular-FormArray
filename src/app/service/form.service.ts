import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private httpclient: HttpClient) {}

  subjectStatus$ = new BehaviorSubject<any>(null);

  callApi() {
    return this.httpclient
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        tap((data) => {
          this.subjectStatus$.next(data);
        })
      );
  }

  secondeCall() {
    return this.httpclient.get('https://jsonplaceholder.typicode.com/posts');
  }
}
