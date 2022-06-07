import {
  Directive,
  AfterViewInit,
  ElementRef,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appInView]',
})
export class InViewDirective implements AfterViewInit {
  @Input() disconnect = true;
  @Output() inView = new EventEmitter<boolean>();
  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    const threshold = 1;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.inView.emit(true);
            if (this.disconnect) {
              observer.disconnect();
            }
          } else {
            if (!this.disconnect) {
              this.inView.emit(false);
            }
          }
        });
      },
      { threshold, rootMargin: '0px 0px -30% 0px' }
    );
    observer.observe(this.elRef.nativeElement);
  }
}
