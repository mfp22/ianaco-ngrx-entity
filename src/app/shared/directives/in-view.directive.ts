import {
  Directive,
  AfterViewInit,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[appInView]',
})
export class InViewDirective implements AfterViewInit {
  status = false;
  @Output() inView = new EventEmitter<string>();
  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    const threshold = 1;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting === false) {
            this.status = true;
          }
          if (entry.isIntersecting) {
            this.inView.emit(entry.target.id);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin: '0px 0px -25% 0px' }
    );
    observer.observe(this.elRef.nativeElement);
  }
}
