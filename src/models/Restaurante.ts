import { Prato } from './Prato'

export default class Restaurante {
  id: number
  titulo: string
  descricao: string
  imagem: string
  pratos: Prato[] | undefined
  rating: number
  destaque: boolean
  especialidade: string

  constructor(
    id: number,
    titulo: string,
    descricao: string,
    imagem: string,
    pratos: Prato[],
    rating: number,
    destaque: boolean,
    especialidade: string
  ) {
    this.id = id
    this.titulo = titulo
    this.descricao = descricao
    this.imagem = imagem
    this.pratos = pratos
    this.rating = rating
    this.destaque = destaque
    this.especialidade = especialidade
  }
}
