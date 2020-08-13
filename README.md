# Desafio Marlin

Este projeto tem por objetivo:
- Recriar o estilo da imagem "src/assets/images/Tela Desafio Front-End.png" utilizando HTML e CSS, sem auxílio de nenhum framework;
- Exibir as notícias, conforme a figura, utilizando uma fake API; e
- Realizar o cadastro e a visualização dos dados cadastrados do usuário em uma newsletter.

Para isso, foi utilizado Angular 8.0.0 e a [JSONPlaceholder fake API](https://jsonplaceholder.typicode.com/). A página da fake API para este projeto encontra-se [aqui](https://my-json-server.typicode.com/patriciacrestani/DesafioMarlin).

## Estrutura do Projeto

Este projeto possui 6 componentes:
- O componente principal AppComponent, responsável pela exibição dos elementos principais da página. Possui três filhos:
  - O componente filho NewsComponent, responsável pela exibição das notícias em cards, conforme a figura;
  - O componente filho MenuComponent, responsável pelo menu lateral da página;
  - O componente filho NewsletterComponent, responsável pela lógica e visualização relacionadas a newsletter. Possui dois filhos:
    - O componente CadastroComponent, responsável pelo cadastro do usuário na newsletter; e
    - O componente DetalhesComponent, responsável pela exibição dos dados cadastrais do usuario.

## Observações

No componente DetalhesComponent, é possível excluir o cadastro do usuário na newsletter, para a realização de mais testes sem a necessidade de reiniciar o servidor.

Os comentários no código não possuem acentuação ou caracteres especiais, como ç, para que não haja nenhum conflito com os mesmos na execução do código.

Como a fake API simplesmente simula uma API o cadastro do usuário na newsletter não é salvo nele. Conforme o site informa:
> Important: the resource will not be really created on the server but it will be faked as if. In other words, if you try to access a post using 101 as an id, you'll get a 404 error.

É possível que o console do navegador retorne um erro por não conseguir postar com a url informada.

## Desafios

Dentre do tempo disposto para a realização deste desafio, não foi possível implementar um código que alterasse o título da página, visto que seria uma implementação de maior complexidade com o uso de rotas no projeto.

## Como Rodar o Projeto

Realize o download do repositório. Navegue até a pasta em que o mesmo foi salvo pelo prompt de comando, e digite `ng serve`. Abra seu navegador e digite o endereço `http://localhost:4200/`. 

Para interromper a execução pressione ctrl + C em seu prompt de comando.
