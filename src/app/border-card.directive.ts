import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnappBorderCard]',
  standalone: true
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) { 
    this.setHeight(this.defaultHeight); // Augmenté la hauteur pour une meilleure visibilité
    this.setBorder(this.initialColor);
  }

  @Input('pkmnappBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
  }

  setHeight(height: number){
    this.el.nativeElement.style.height = `${height}px`; // Correction ici : styles -> style
  }

  setBorder(color: string){
    this.el.nativeElement.style.border = `solid 4px ${color}`; // Correction ici : styles -> style
  }
}