import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Livro } from './entidade/Livro';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

  getLivroById(id: number): Observable<Livro> {
    return this.http.get<Livro>(`${this.apiUrl}/${id}`);
  }

  getLivrosByTitulo(titulo: string): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.apiUrl}?q=${titulo}`).pipe(
      catchError((error) => {
        throw error;
      })
    );
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

  put(id :number, livro: Livro): Promise<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .put(url, livro)
      .toPromise()
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  }

  deleteById(id: number): Promise<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .delete(url)
      .toPromise()
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  }
}
