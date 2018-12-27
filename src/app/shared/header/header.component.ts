import { Component, HostListener, ElementRef, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
/** private eRef: ElementRef le psas el elemento donde se dio el clic
 *  esto no servira mas adelante para identoficar en que elemento no
 * queremos que actue
 * */
  constructor(private eRef: ElementRef) {

   }

  ngOnInit() {
  }

  noti__item(e) {
    e.preventDefault();
   const menu = document.querySelectorAll('.noti__item');
    /*menu[0].className = 'noti__item js-item-menu';*/
    menu.forEach( element => {
      /** classList regresa un DOMTokenList
       * boolean contains(string token) Returns true if the DOMTokenList contains token, or false otherwise.
       * contains checa si eexiste el token
       * https://www.oreilly.com/library/view/javascript-the-definitive/9781449393854/rn02re239.html
      */
      if (element.classList.contains('show-dropdown')) {
        element.className = 'noti__item js-item-menu';
      }
        } );
        /**currentTarget: Siempre se refiere al elemento al que se ha adjuntado el controlador de eventos,
     *  a diferencia de event.target que identifica el elemento en el que ocurrió el evento. */

    e.currentTarget.classList.toggle('show-dropdown');
  }
  /** capturamos los clicks en el body o html */
  @HostListener('document:click', ['$event'])
  clickout(event) {
    let menu = document.querySelectorAll('.noti__item');
    /**
     * this.eRef.nativeElement.contains(event.target) si un elemento nativo del componente
     * contien el envento click que se  hiso en el body
     * como solo queremo aquellos click que se hacen fuera del componente
     * todo: corregr si se da click en parte de la barra no funciona
     * checar https://www.npmjs.com/package/ng-click-outside
     */
    console.log(this.eRef.nativeElement);
    if (!this.eRef.nativeElement.contains(event.target)) {
      for (let i = 0; i < menu.length; i++) {
      menu[i].classList.remove('show-dropdown');
    }
    }
  }
}
