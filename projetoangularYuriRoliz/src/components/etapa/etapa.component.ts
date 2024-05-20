import { EtapaService } from './../../services/etapa.service';
import { Component } from '@angular/core';
import { EtapaInterface } from '../../app/models/etapa.interface';

@Component({
  selector: 'app-etapa',
  standalone: true,
  imports: [],
  templateUrl: './etapa.component.html',
  styleUrl: './etapa.component.css'
})
export class EtapaComponent {
  etapas!: EtapaInterface[];

  constructor(private etapaService: EtapaService) {}

  ngOnInit(): void {
    this.getEtapas();
  }

  getEtapas(): void {
    this.etapaService.getEtapas().subscribe({
      next: (response) => {
        this.etapas = response;
      },
      error : (error) => console.log(error)
    })
  }
}
