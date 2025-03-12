import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../service/paciente.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [PacienteService]
})
export class CadastroComponent {
  public obj: Paciente = new Paciente();
  public mensagem: string = "";
  public isFormSubmitted: boolean = false; // Adicionando a propriedade para controle de envio

  constructor(private service: PacienteService) { }

  public salvar() {
    this.isFormSubmitted = true;
  
    if (!this.obj.nome || !this.obj.cpf) {
      return; // Se os campos obrigatórios não estiverem preenchidos, não prossegue
    }
  
    console.log(this.obj); // Adicione esta linha para verificar os dados
  
    this.service.salvar(this.obj).subscribe({
      next: (data) => {
        this.mensagem = "Paciente inserido com sucesso!";
        alert(this.mensagem);
        this.limpar(); // Limpa o formulário após o sucesso
      },
      error: (msg) => {
        this.mensagem = "Ocorreu erro! Tente novamente mais tarde.";
        alert(this.mensagem);
      }
    });
  }

  public limpar() {
    this.obj = new Paciente(); // Reseta o objeto para um novo paciente
    this.isFormSubmitted = false; // Reseta o estado de envio
  }
}