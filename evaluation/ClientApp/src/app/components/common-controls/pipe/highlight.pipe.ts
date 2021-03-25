import { VERSION, Pipe, PipeTransform } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'highlight' })
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(value: string, searchText: string, apply: boolean = true): any {
    if (!searchText || value === null || value === undefined || apply === false) {
      return value;
    }
    let newSearchText = '';
    searchText.split('').forEach(char => {
      newSearchText = newSearchText + char.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    });

    // HTML type of values
    if (/<[a-z/][\s\S]*>/i.test(value)) {
      return value;
    }
    else {
      const regExp = new RegExp('(' + newSearchText + ')', 'gi');
      const regExpMatch = value.match(regExp);

      // If there's no match, just return the original value.
      if (!regExpMatch) {
        return value;
      }

      const replacedValue = value.replace(regExp, '<mark style=\'padding:0;\' class=\'highlighttext\' >' + regExpMatch[0] + '</mark>');
      return this.sanitizer.bypassSecurityTrustHtml(replacedValue);
    }


  }
}
