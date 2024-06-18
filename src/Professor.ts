import Pessoa from "./Pessoa";

class Professor extends Pessoa { 
    salario:number;
    matricula:number;
   

   constructor(nome:string,  idade:number,email:string, fone:string, matricula:number, salario:number)
   {  super(nome,email,idade,fone);
       this.matricula = matricula;
       this.salario = salario;
}
validaEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      return false;
    }
    return this.email.includes('@etec') || this.email.includes('@fatec') || this.email.includes('@cps') && this.email.endsWith('.sp.gov.br');
  }
}
//const estudante = new Professor("João", "joao@etec.sp.gov.br", 12,"11987654321", 12, 15);
//console.log(estudante.validaEmail());
export default Professor ;
