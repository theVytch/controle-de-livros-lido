export class Livro {
  autor: string;
  titulo: string;
  tipoDeLivro: string;
  categoria: string;
  entretenimento: boolean;

  constructor(autor: string, titulo: string, tipoDeLivro: string, categoria: string, entretenimento: boolean) {
    this.autor = autor;
    this.titulo = titulo;
    this.tipoDeLivro = tipoDeLivro;
    this.categoria = categoria;
    this.entretenimento = entretenimento;
  }
}
