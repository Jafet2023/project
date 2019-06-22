export class ProductEmpresa{
    nombre: string;
    direccion: string;
    correo: string;
    nit: number;
    telefono: number;
    categoria: string;
 }
//  export interface Empresas{
//     empresas: Array<Empresa>
//  }
class ProductCache {
   public products: Array<ProductEmpresa>;
   public timestamp: number;

   public isValid(): boolean {
       if(!this.products) {
           return false;
       }

       let isExpired = Date.now() - this.timestamp > 1800000; // 30 min
       return !isExpired;
   }
}