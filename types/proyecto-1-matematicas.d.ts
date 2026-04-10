declare module 'proyecto-1-matematicas' {
  export function suma(a: number, b: number): number;
  export function resta(a: number, b: number): number;
  export function multiplicacion(a: number, b: number): number;
  export function division(a: number, b: number): number;
  
  export default {
    suma: (a: number, b: number) => number,
    resta: (a: number, b: number) => number,
    multiplicacion: (a: number, b: number) => number,
    division: (a: number, b: number) => number
  };
}
