// Componente que exibe as noticias cadastradas na fake API

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent{
    // Link para a fake API
    url = "https://my-json-server.typicode.com/patriciacrestani/DesafioMarlin/posts";
    
    // Lista para armazenar as noticias
    posts = [];

    // O construtor sempre carrega as noticias assim que o componente for chamado
    constructor(private http: HttpClient){
        this.http.get(this.url).toPromise().then(data =>{
            for(let item in data){
                this.posts.push(data[item]);
            }
        });
    }
}