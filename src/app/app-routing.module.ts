//import { CarrinhoComponent } from './carrinho/carrinho.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';
//import { CarrinhoComponent } from './carrinho/carrinho.component';

//import { CarrinhoComponent } from './carrinho/carrinho.module';

const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  { path: '', redirectTo: "produtos", pathMatch: "full" },
  { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },
  { path: '**', component: NaoEncontradaComponent }

    //{ path: 'carrinho', component: CarrinhoModule },

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [

    RouterModule

  ]
})
export class AppRoutingModule { }
