import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "celular"
})
export class DoadorDetalhePipe implements PipeTransform {
  transform(numeroCompleto: string) {

    const codigoArea = numeroCompleto.slice(0,2);
    const numero1 = numeroCompleto.slice(2,7);
    const numero2 = numeroCompleto.slice(7);

    return `(${codigoArea})${numero1}-${numero2}`;
  }
}


