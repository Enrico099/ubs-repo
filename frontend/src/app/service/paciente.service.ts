import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private atualizaListagemSource = new Subject<void>();

  atualizaListagem$ = this.atualizaListagemSource.asObservable();

  atualizarListagem() {
    this.atualizaListagemSource.next();
  }
}
