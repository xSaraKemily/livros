import { Component, OnInit } from '@angular/core';
import { Livro } from '../shared/livro';
import { LivroService } from '../shared/livro.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {
  lista:Livro[];
  
  constructor(private livroService: LivroService) { }

  ngOnInit() {
   this.listar();
  }

  listar() {
    this.lista = this.livroService.getLivros()
  }
}
