import {ChangeDetectorRef, Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

interface CarouselContext {
  $implicit: string;
  controller: {
    next: () => void,
    prev: () => void
  }
}

@Directive( {
  selector: '[carousel]'
})
export class CarouselDirective implements OnInit {
  @Input('carouselFrom') images: string[] = [];

  context: CarouselContext | null = null;
  index: number = 0;

  constructor(
    private tmpl: TemplateRef<CarouselContext>,
    private vcr: ViewContainerRef
  ) { }

  ngOnInit(): void {
    this.context = {
      $implicit: this.images[0],
      controller: {
        next: () => this.next(),
        prev: () => this.prev()
      }
    }
    this.vcr.createEmbeddedView(this.tmpl, this.context);
  }

  next(): void {
    this.index++;
    if (this.index >= this.images.length) {
      this.index = this.images.length - 1;
    }
    this.context!.$implicit = this.images[this.index];

  }

  prev(): void {
    this.index--;
    if (this.index < 0) {
      this.index = 0;
    }
    this.context!.$implicit = this.images[this.index];
  }
}
