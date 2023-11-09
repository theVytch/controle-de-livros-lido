import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from './entidade/Livro';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiUrl: string = 'http://localhost:3000/livros/';

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getById(id: number): Observable<any>{
    return this.http.get(this.apiUrl + `${id}`)
  }

  post(livro: Livro): Observable<any>{
    return this.http.post(this.apiUrl, livro);
  }
}
