//import { IProdutoCarrinho } from 'src/app/produtos';
export interface IProduto {

  id: number;
  descricao: string;
  preco: number;
  descricaoPreco: string;
  imagem: string;
  quantidadeEstoque: number;

}

export interface IProdutoCarrinho extends IProduto {

    quantidade: number;

}


export const produtos: IProduto[]  = [


  { id: 1, descricao: "CD Metallica Novo", preco: 250.00, descricaoPreco: "à vista no pixx",    imagem: "./assets/images/metallica.jpg", quantidadeEstoque: 15 },
  { id: 2, descricao: "CD Korn Novo", preco: 150.00, descricaoPreco: "à vista no pix",         imagem: "./assets/images/korn.jpg", quantidadeEstoque: 10  },
  { id: 3, descricao: "CD A7X Novo", preco: 350.00, descricaoPreco: "à vista no pix",          imagem: "./assets/images/a7x.jpg", quantidadeEstoque: 10  },
  { id: 4, descricao: "CD ArchEnemy Novo", preco: 250.00, descricaoPreco: "à vista no pix",    imagem: "./assets/images/arch.jpg", quantidadeEstoque: 10  },
  { id: 5, descricao: "CD Slipknot Novo", preco: 250.00, descricaoPreco: "à vista no pix",     imagem: "./assets/images/slipknot.jpg", quantidadeEstoque: 10   },
  { id: 6, descricao: "CD Paramore Novo", preco: 250.00, descricaoPreco: "à vista no pix",     imagem: "./assets/images/paramore.jpg", quantidadeEstoque: 10  },
  { id: 7, descricao: "CD Sorrow", preco: 150.00, descricaoPreco: "à vista no pix",            imagem: "./assets/images/sorrow.jpg", quantidadeEstoque: 10  },
  { id: 8, descricao: "CD Blessthefall", preco: 100.00, descricaoPreco: "à vista no pix",      imagem: "./assets/images/bless.jpg", quantidadeEstoque: 10  },
  { id: 9, descricao: "CD The Prodigy Raro", preco: 550.00, descricaoPreco: "à vista no pix",  imagem: "./assets/images/prodigy.jpg", quantidadeEstoque: 10  },
  { id: 10, descricao: "CD DJ MARKY", preco: 1000.00, descricaoPreco: "à vista no pix",        imagem: "./assets/images/djmarky.jpg", quantidadeEstoque: 10  },

]


