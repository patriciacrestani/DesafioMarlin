// Componente que exibe os dados cadastrados do usuario

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-detalhes',
    templateUrl: './detalhes.component.html',
    styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent{
    // Propriedade que armazena os dados do usuario, recebido do componente pai
    @Input() perfil: any;

    // Evento de exclusao de cadastro
    @Output() deleteCadastroEvento = new EventEmitter<null>();

    // Metodo que chama o componente pai 
    deleteCadastro(){
        this.deleteCadastroEvento.emit();
    }
}