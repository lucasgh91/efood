export class Prato {
  id: number
  imagem: string
  titulo: string
  descricao: string

  constructor(id: number, imagem: string, titulo: string, descricao: string) {
    this.id = id
    this.imagem = imagem
    this.titulo = titulo
    this.descricao = descricao
  }
}
