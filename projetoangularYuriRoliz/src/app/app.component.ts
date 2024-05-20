import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EtapaComponent } from "../components/etapa/etapa.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, EtapaComponent]
})
export class AppComponent  {
  title = 'projetoangularYuriRoliz';



}
