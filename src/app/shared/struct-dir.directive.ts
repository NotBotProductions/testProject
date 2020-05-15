import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appStructDir]'
})
export class StructDirDirective {

  constructor(private vcf: ViewContainerRef, private template: TemplateRef<any>) { }

  @Input() set appStructDir(value: boolean) {
    if (value) {
      this.vcf.createEmbeddedView(this.template);
    } else {
      this.vcf.clear();
    }
  }

}
