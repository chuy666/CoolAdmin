import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
/**
 *  referencia el elemnto actual como document.getElementByName
 *  'txtProgress' se refiere al #txtProgress que  se puso en el HTML
 *   txtProgress  nombre que se usara en js
 */
  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() porcentaje: number = 40;
/**
 * cambioValor emite un eveto que sera recivido por el padre del componente
 */
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onChanges(newValue: number) {
    if (newValue >= 100){
      this.porcentaje = 100;
    } else if ( newValue <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }
    /**
     *  si ponemos 100 componentes incrementador txtProgress apuntara al elemento adecuado
     *  mostrara el valor aadecuado que se introdujo en el imput
     */
    this.txtProgress.nativeElement.value = this.porcentaje;
      /**
       * el evento es emitido
       */
      this.cambioValor.emit( this.porcentaje);
  }

  cambiarValor(valor) {

    if ( this.porcentaje >= 0 || this.porcentaje <= 100 ) {
      this.porcentaje = this.porcentaje + valor;
      /**
       * el evento es emitido
       */
      this.cambioValor.emit( this.porcentaje);
      /**
       *  pone el foco en elemento que se cambio su balor
       */
      this.txtProgress.nativeElement.focus();
    }
    if (this.porcentaje < 0) {
      this.porcentaje = 0;
    }
    if (this.porcentaje > 100) {
      this.porcentaje = 100;
    }
  }
}
