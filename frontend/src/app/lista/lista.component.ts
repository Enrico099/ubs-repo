import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  registros: any[] = [];
  filtro: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.buscarRegistros();
  }

  buscarRegistros(): void {
    this.http.get<any[]>(`/api/registros?filtro=${this.filtro}`).subscribe(data => {
      this.registros = data;
    });
  }

  onBuscar(): void {
    this.buscarRegistros();
  }
}
