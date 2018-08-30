import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {
    console.log('Directiva llamada');
    el.nativeElement.style.backgroundColor = 'yellow';
  }

  @Input('appResaltado') nuevoColor: string;

  @HostListener('mouseenter') mouseEntra () {
    this.resaltar( this.nuevoColor || '#C3F18D');
  }
  @HostListener('mouseleave') mouseSale () {
    this.resaltar( null );
  }
  @HostListener('click') mouseClic () {
    alert('clic');
  }

  resaltar ( color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
