import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { clockValue, XsegundoService } from '../../services/xseconds.service';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements OnInit {

  datos$!: Observable<clockValue>;
  hora!: number;
  minutos!: string;
  dia!: string;
  fecha!: string;
  ampm!: string;
  segundos!: string;


  constructor(private segundo: XsegundoService) { }

  ngOnInit(): void {
    this.datos$=this.segundo.getInfoClock();
    this.datos$.subscribe(x => {
      this.hora = x.hora;
      this.minutos = x.minutos;
      this.dia = x.diadesemana;
      this.fecha = x.diaymes;
      this.ampm = x.ampm;
      this.segundos = x.segundo
    });

  }

}
