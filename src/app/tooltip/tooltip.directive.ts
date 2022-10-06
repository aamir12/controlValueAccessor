import { Component, Input, Renderer2, HostListener,  Directive, ElementRef, 
  TemplateRef, ViewContainerRef,  ContentChild, ComponentRef ,AfterContentInit,AfterContentChecked} from 
  '@angular/core';

  
  @Directive({ selector: '[tooltipDirective]' })
  export class TooltipDirective{
    
    private isAppended = false;
    constructor(
        private renderer: Renderer2,
        private elementRef: ElementRef,
        private viewContainerRef: ViewContainerRef) { }
  
    
   

    @ContentChild( "tooltipTemplate" ) private tooltipTemplateRef!: TemplateRef<Object>;
   
  
    @HostListener('click')  onMouseEnter(): void {  
      if(this.isAppended) {
        return; 
      }
      const view = this.viewContainerRef.createEmbeddedView(this.tooltipTemplateRef);
      view.rootNodes.forEach(node => 
        this.renderer.appendChild(this.elementRef.nativeElement, node));
      this.isAppended = true;
    }

   
    @HostListener('document:click', ['$event', '$event.target'])
    closeTooltip(event: MouseEvent, targetElement: HTMLElement) {
      if (targetElement && document.body.contains(targetElement) ) {
         if(!this.elementRef.nativeElement.contains(targetElement) || 
          ( this.elementRef.nativeElement.contains(targetElement) && 
            targetElement.hasAttribute('data-close'))){
          this.close();
         }
      }
    }

    public close() {
      if (this.viewContainerRef) {
        this.viewContainerRef.clear();
        this.isAppended = false;
      }  
    }
  
  }
  