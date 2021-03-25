import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CMSService } from '../services/cms.service';

@Pipe({
  name: 'notavailable'
})
export class NAPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(value: any, args?: any): any {
    if (value === "n/a") {
      const replacedValue = `<span class="font-weight-normal">${ CMSService.Label.NotAvailable }</span>`;
      return this.sanitizer.bypassSecurityTrustHtml(replacedValue);
    }
    else {
      return value;
    }
  }

}
