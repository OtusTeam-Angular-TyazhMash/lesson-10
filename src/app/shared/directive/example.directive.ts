import {
  ApplicationRef, ComponentRef,
  createComponent,
  Directive,
  ElementRef, EmbeddedViewRef,
  HostListener,
  Injector, Input,
  OnInit,
  TemplateRef, ViewContainerRef
} from '@angular/core';
import {DynamicExampleComponent} from "../../components/dynamic-example/dynamic-example.component";
import {timer} from "rxjs";


@Directive({
  selector: '[appExample]'
})
export class ExampleDirective implements OnInit {
  private componentRef: ComponentRef<DynamicExampleComponent> | null = null;
  @Input()
  set appExample(value: boolean) {


    if (value) {
      // ng-template
      // динамическое создание компонент
      this.componentRef = createComponent(
          DynamicExampleComponent, {
            environmentInjector: this.applicationRef.injector
          });

      this.applicationRef.attachView(this.componentRef.hostView)

      const domElement = (this.componentRef.hostView as EmbeddedViewRef<HTMLElement>).rootNodes[0] as HTMLElement;
      document.body.appendChild(domElement);

    } else {

      // удаляем шаблон
      this.viewContainerRef.clear()

      // удаляем компонент
      this.applicationRef.detachView(this.componentRef!.hostView);
      this.componentRef!.destroy();
      this.componentRef = null
     }
  };

  constructor(
    private templateRef: TemplateRef<Context>,
    private viewContainerRef: ViewContainerRef,

    private applicationRef: ApplicationRef,
    // private elementRef: ElementRef,

    // private injector: Injector
  ) {
  }

  ngOnInit(): void {




    // timer(1000).subscribe(() => {
    //   this.applicationRef.detachView(componentRef!.hostView);
    //   componentRef!.destroy();
    //   componentRef = null
    // })
    //
    // timer(2000).subscribe(() => {
    //   console.log(componentRef)
    // })
  }



  static ngTemplateContextGuard(
    directive: ExampleDirective,
    context: unknown,
  ): context is Context {
    return true;
  }
}


type Context = {
  item: number
}
