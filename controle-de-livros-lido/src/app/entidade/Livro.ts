import { Comentario } from './Comentario';
export class Livro {
  autor: string;
  titulo: string;
  tipoDeLivro: string;
  categoria: string;
  jaFoiLido: boolean;
  Comentario: Comentario = new Comentario('');

  constructor(autor: string, titulo: string, tipoDeLivro: string, categoria: string, jaFoiLido: boolean) {
    this.autor = autor;
    this.titulo = titulo;
    this.tipoDeLivro = tipoDeLivro;
    this.categoria = categoria;
    this.jaFoiLido = jaFoiLido;
  }
}
