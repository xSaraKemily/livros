import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  livros: Livro[];
  constructor() {
    this.livros = [
      {
        titulo: 'Harry Potter',
        autor : 'J. K. Rowling',
        logo  : 'https://loja.taglivros.com/media/catalog/product/cache/1/image/278x425/9df78eab33525d08d6e5fb8d27136e95/h/p/hpenigma.png',
        isbn  : 7888554120,
      },
      {
        titulo: 'Senhor dos aneis',
        autor : 'J. R. R. Tolkien',
        logo  : 'https://images-na.ssl-images-amazon.com/images/I/51CDlkHVkaL._SX354_BO1,204,203,200_.jpg',
        isbn  : 45451201,
      },
      {
        titulo: 'AFTER',
        autor : 'Anna Todd',
        logo  : 'https://miro.medium.com/max/322/0*bHgJO-EsP9V5VjlV.jpg',
        isbn  : 1110021777,
      },
      {
        titulo: 'Sherlock Holmes',
        autor : 'Arthur Conan Doyle',
        logo  : 'https://upload.wikimedia.org/wikipedia/pt/6/67/The_Testament_of_Sherlock_Holmes_capa.jpg',
        isbn  : 1000330,
      },
      {
        titulo: 'The Witcher',
        autor : 'Andrzej Sapkowski',
        logo  : 'https://images-na.ssl-images-amazon.com/images/I/41Yy6AbJXAL._SX331_BO1,204,203,200_.jpg',
        isbn  : 8554021021,
      },
      {
        titulo: 'Dom Quixote',
        autor : 'Miguel de Cervantes',
        logo  : 'http://lojasaraiva.vteximg.com.br/arquivos/ids/12705805/1010071674.jpg?v=637154240710400000',
        isbn  : 478021021,
      },
      {
        titulo: 'A Montanha Mágica',
        autor : 'Thomas Mann',
        logo  : 'https://images-na.ssl-images-amazon.com/images/I/41zvoyNAKLL._SX343_BO1,204,203,200_.jpg',
        isbn  : 340025021,
      },
      {
        titulo: 'Cem Anos de Solidão',
        autor : 'Gabriel García Márquez',
        logo  : 'https://images-na.ssl-images-amazon.com/images/I/51LfawapFKL._SX344_BO1,204,203,200_.jpg',
        isbn  : 3330021021,
      },
      {
        titulo: 'Em Busca do Tempo Perdido',
        autor : 'Marcel Proust',
        logo  : 'http://lojasaraiva.vteximg.com.br/arquivos/ids/1624957/1001895869.jpg?v=637004489675270000',
        isbn  : 1445621021,
      },
      {
        titulo: 'A Divina Comédia',
        autor : 'Dante Alighieri',
        logo  : 'https://m.media-amazon.com/images/I/51GdXg-kgWL.jpg',
        isbn  : 111221021,
      },
    ];
  }

  getLivros() {
    return this.livros;
  }
}
