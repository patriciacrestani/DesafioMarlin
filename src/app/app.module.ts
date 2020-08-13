import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import{ NewsletterComponent } from './newsletter/newsletter.component';
import{ NewsComponent } from './news/news.component';
import{ MenuComponent } from './menu/menu.component';
import{ DetalhesComponent } from './newsletter/detalhes/detalhes.component';
import{ CadastroComponent } from './newsletter/cadastro/cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsletterComponent,
    NewsComponent,
    MenuComponent,
    DetalhesComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
