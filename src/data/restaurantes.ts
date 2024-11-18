import hiokiLogo from '../assets/images/hioki.png'
import ladolcevitatrattoria from '../assets/images/ladolcevitatrattoria.png'
import Restaurante from '../models/Restaurante'
import sashimi from '../assets/images/hioki/sashimi.jpg'
import pizza from '../assets/images/ladolcevitatrattoria/pizza.png'

export const dados = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    imagem: hiokiLogo,
    pratos: [
      {
        id: 1,
        imagem: sashimi,
        titulo: 'Sashimi',
        descricao:
          'Sashimi é uma iguaria da culinária japonesa que consiste de peixes e frutos do mar muito frescos e crus, fatiados em pequenos pedaços.'
      },
      {
        id: 2,
        imagem: sashimi,
        titulo: 'Sashimi',
        descricao:
          'Sashimi é uma iguaria da culinária japonesa que consiste de peixes e frutos do mar muito frescos e crus, fatiados em pequenos pedaços.'
      },
      {
        id: 3,
        imagem: sashimi,
        titulo: 'Sashimi',
        descricao:
          'Sashimi é uma iguaria da culinária japonesa que consiste de peixes e frutos do mar muito frescos e crus, fatiados em pequenos pedaços.'
      }
    ],
    rating: 4.9,
    destaque: true,
    especialidade: 'Japonesa'
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: ladolcevitatrattoria,
    pratos: [
      {
        id: 1,
        imagem: pizza,
        titulo: 'Pizza Marguerita',
        descricao:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      },
      {
        id: 2,
        imagem: pizza,
        titulo: 'Pizza Marguerita',
        descricao:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      },
      {
        id: 3,
        imagem: pizza,
        titulo: 'Pizza Marguerita',
        descricao:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      }
    ],
    rating: 4.6,
    destaque: false,
    especialidade: 'Italiana'
  },
  {
    id: 3,
    titulo: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: ladolcevitatrattoria,
    pratos: [
      {
        id: 1,
        imagem: pizza,
        titulo: 'Pizza Marguerita',
        descricao:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      },
      {
        id: 2,
        imagem: pizza,
        titulo: 'Pizza Marguerita',
        descricao:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      },
      {
        id: 3,
        imagem: pizza,
        titulo: 'Pizza Marguerita',
        descricao:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      }
    ],
    rating: 4.6,
    destaque: false,
    especialidade: 'Italiana'
  },
  {
    id: 4,
    titulo: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: ladolcevitatrattoria,
    pratos: [
      {
        id: 1,
        imagem: pizza,
        titulo: 'Pizza Marguerita',
        descricao:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      },
      {
        id: 2,
        imagem: pizza,
        titulo: 'Pizza Marguerita',
        descricao:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      },
      {
        id: 3,
        imagem: pizza,
        titulo: 'Pizza Marguerita',
        descricao:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      }
    ],
    rating: 4.6,
    destaque: false,
    especialidade: 'Italiana'
  },
  {
    id: 5,
    titulo: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: ladolcevitatrattoria,
    pratos: [
      {
        id: 1,
        imagem: pizza,
        titulo: 'Pizza Marguerita',
        descricao:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      },
      {
        id: 2,
        imagem: pizza,
        titulo: 'Pizza Marguerita',
        descricao:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      },
      {
        id: 3,
        imagem: pizza,
        titulo: 'Pizza Marguerita',
        descricao:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      }
    ],
    rating: 4.6,
    destaque: false,
    especialidade: 'Italiana'
  },
  {
    id: 6,
    titulo: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: ladolcevitatrattoria,
    pratos: [
      {
        id: 1,
        imagem: pizza,
        titulo: 'Pizza Marguerita',
        descricao:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      },
      {
        id: 2,
        imagem: pizza,
        titulo: 'Pizza Marguerita',
        descricao:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      },
      {
        id: 3,
        imagem: pizza,
        titulo: 'Pizza Marguerita',
        descricao:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      }
    ],
    rating: 4.6,
    destaque: false,
    especialidade: 'Italiana'
  }
]

export const retornaRestaurante = (id: number): Restaurante => {
  const arrayFiltrado = dados.filter((r) => r.id === id)
  return arrayFiltrado[0]
}
