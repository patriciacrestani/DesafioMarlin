import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
// Componente responsavel pela newsletter 

@Component({
    selector: 'app-newsletter',
    templateUrl: './newsletter.component.html',
    styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent{
    // Propriedade que sinaliza se o usuario ja realizou o cadastro ou nao
    cadastrado: boolean = false;

    // Propriedade que armazena o cadastro do usuario
    perfil: any;

    // Metodo que armazena o cadastro do usuario
    setPerfil(novoPerfil: any){
        this.perfil = novoPerfil;
        this.cadastrado = true;
    }

    // Metodo que exclui o cadastro do usuario
    deletePerfil(){
        this.perfil = null;
        this.cadastrado = false;
    }

}