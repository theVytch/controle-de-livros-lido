import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Livro } from './entidade/Livro';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiUrl: string = 'http://localhost:3000/livros';
  private atualizarListaSubject = new BehaviorSubject<boolean>(false);
  atualizarLista$ = this.atualizarListaSubject.asObservable();

  constructor(private http: HttpClient) {}

  atualizarLista(): void {
    this.atualizarListaSubject.next(true);
  }

  fetchData(): Promise<any> {
    return this.http
      .get(this.apiUrl)
      .toPromise()
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  }

  getLivrosByTitulo(titulo: string): Promise<Livro[]> {
    return this.http
      .get<Livro[]>(`${this.apiUrl}?q=${titulo}`)
      .toPromise()
      .then((response) => {
        if (response) {
          return response;
        } else {
          return [];
        }
      })
      .catch((error) => {
        throw error;
      });
  }

  post(livro: Livro): Promise<any> {
    return this.http
      .post(this.apiUrl, livro)
      .toPromise()
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  }
}
