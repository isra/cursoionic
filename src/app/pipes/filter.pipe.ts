import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], value: string, element: string): any {

    return value && value.trim().length ?
                items.filter( item => item[element].toLowerCase().indexOf(value.toLowerCase()) >= 0 ) :
                items;
  }

}
