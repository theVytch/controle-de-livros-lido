export class Comentario {
  comentario: string;
  ultimaAlteracao: Date;

  constructor(comentario: string) {
    this.comentario = comentario;
    this.ultimaAlteracao = new Date();
  }

}
