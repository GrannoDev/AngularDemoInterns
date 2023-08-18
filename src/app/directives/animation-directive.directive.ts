import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appAnimationDirective]',
  standalone: true,
})
export class AnimationDirectiveDirective implements OnInit {
  @Input() primary: boolean = false;
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.primary
      ? this.element.nativeElement.classList.add('bg-primary', 'text-white')
      : this.element.nativeElement.classList.add('bg-red-500');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.spin();
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.stopSpin();
  }

  private spin() {
    this.element.nativeElement.classList.add('animate-spin');
  }
  private stopSpin() {
    this.element.nativeElement.classList.remove('animate-spin');
  }
}
