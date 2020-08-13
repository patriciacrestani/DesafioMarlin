import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Propriedades titulo e subtitulo da pagina
  titulo = 'Exibindo resultado de busca por "Covid 19"';
  subtitulo = 'Encontramos um total de 20 resultados para a sua busca';
}
