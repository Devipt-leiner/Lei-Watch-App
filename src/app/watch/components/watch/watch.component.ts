import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  hour: string = '';
  minutes: string = '';
  seconds: string = '';

  lineStyle: string = '';

  @ViewChild('line', {static: true}) lines!: ElementRef;

  constructor() { }

  // Al renderizarse el componente se calcula la zona horaria
  ngOnInit(): void {
    this.secondsTimer();
    this.calculateTime();
    this.locateLines();
  }

  // Este método se encarga de realizar la regla de 3 para los rangos de horas, minutos y grados
  conversion(value: number, min: number, max: number, newMin: number, newMax: number) {
    return newMin + (newMax - newMin) * (value - min) / (max - min);
  }

  secondsTimer() {
    setInterval(() => {
      this.calculateHour();
      this.calculateMinutes();
      this.calculateSeconds();
     }, 1000);
  }

  locateLines() {
    const lines = document.querySelectorAll<HTMLElement>('.line');
    const numberLines = lines.length;
    for (let i = 0; i < numberLines; i++) {
      const line = lines[i];
      const angle = this.conversion(i, 0, numberLines, 0, 360);
      line.style.transform = `rotate(${angle}deg)`;
    }
  }

  calculateTime() {
    this.calculateHour();
    this.calculateMinutes();
    this.calculateSeconds();
  }

  calculateHour() {
    const currentHour = new Date().getHours() - 12; //Se restan 12 porque al ser un reloj analógico, necesitamos que llegue a 12 y no a 24
    const angle = this.conversion(currentHour, 0, 12, 0, 360);
    const hour = angle.toString();
    this.hour = `rotate(${hour}deg)`;
    console.log(this.hour);
  }

  calculateMinutes() {
    const currentMinutes = new Date().getMinutes();
    const angle = this.conversion(currentMinutes, 0, 60, 0, 360);
    const minutes = angle.toString();
    this.minutes = `rotate(${minutes}deg)`;
    console.log(this.minutes);
  }

  calculateSeconds() {
    const currentSeconds = new Date().getSeconds();
    const angle = this.conversion(currentSeconds, 0, 60, 0, 360);
    const seconds = angle.toString();
    this.seconds = `rotate(${seconds}deg)`;
    console.log(this.seconds);
  }
}

