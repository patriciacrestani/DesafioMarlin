// Componente responsável pelo cadastro do usuario na newsletter

import { Component, ElementRef, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent{
    // Link para a fake API 
    url = "https://my-json-server.typicode.com/patriciacrestani/DesafioMarlin/newsletter";

    // Construtor definido para que a classe possa acessar o HttpClient
    constructor(private http: HttpClient){ }

    // Metodo chamado quando o usuario se cadastra na newsletter
    onAddToNewsletter(form: NgForm){
        // Se o formulario de cadastro for valido
        if(form.valid){
            // O formulario eh mostrado no console 
            console.log(form);

            // O cadastro eh enviado para a fake API
            // Conforme informado no site da fake API "o recurso não será realmente criado no servidor...
            // ...mas sera simulado como se fosse"
            fetch(this.url, {
                method: 'POST',
                body: JSON.stringify({
                    nome: form.value.nome,
                    email: form.value.email,
                    idade: form.value.idade,
                    genero: form.value.genero,
                    lista: form.value.lista
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json => console.log(json))
            
            // O metodo que envia os dados do usuario para o componente Detalhes eh chamado
            this.mostrarNovoCadastro(form.value);
        }
    }

    // Evento de novo cadastro
    @Output() novoCadastroEvento = new EventEmitter<any>();

    // Metodo que envia os dados para o componente pai
    mostrarNovoCadastro(value: any) {
        this.novoCadastroEvento.emit(value);
    }
}