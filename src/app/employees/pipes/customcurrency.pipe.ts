import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customcurrency'
})
export class CustomcurrencyPipe implements PipeTransform {

  transform(number: number, ...args: unknown[]): unknown {
    if (isNaN(number) || (number === null) ||  (number === 0)) return number; 
        let ret = '';
        let symbol = '$';

        const powers = [
            {suffix: 'B', value: Math.pow(10, 9)},
            {suffix: 'M', value: Math.pow(10, 6)},
            {suffix: 'K', value: 1000}
        ];

        for (let i = 0; i < powers.length; i++) {
            let reduced = number / powers[i].value;
            
            if (reduced >= 1) {
                ret = symbol + reduced.toFixed(2) + powers[i].suffix;
                break;
            }
        }
        return ret==''?number:ret;

  }

}
