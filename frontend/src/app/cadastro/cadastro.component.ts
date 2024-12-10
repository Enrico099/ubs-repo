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

  constructor(private service: PacienteService) { }

  public salvar() {
    this.service.salvar(this.obj).subscribe({
      next: (data) => {
        this.mensagem = "Paciente inserido com sucesso!";
        
        // Exibindo popup de confirmação
        alert(this.mensagem);
      },
      error: (msg) => {
        this.mensagem = "Ocorreu erro! Tente novamente mais tarde.";
        
        // Exibindo popup em caso de erro
        alert(this.mensagem);
      }
    });
    this.limpar();
  }

  public limpar() {
    this.obj = new Paciente();
  }
}
