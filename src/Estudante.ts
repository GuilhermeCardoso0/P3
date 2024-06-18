import Pessoa from "./Pessoa";

 class Estudante extends Pessoa { 
   public ra:number;
   media:number;

   constructor(nome:string,idade:number, email:string, fone:string, ra:number, media:number)
   {  super(nome,email,idade,fone);
       this.media = media;
       this.ra = ra;
       
}
validaEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      return false;
    }
    return this.email.includes('@etec') || this.email.includes('@fatec') || this.email.includes('@cps') && this.email.endsWith('.sp.gov.br');
}




situacao(): string {
    if (this.media >= 0 && this.media < 5) {
      return 'Reprovado';
    } else if (this.media >= 5 && this.media < 6) {
      return 'Exame';
    } else if (this.media >= 6 && this.media <= 10) {
      return 'Aprovado';
    } else {
      return 'Média inválida';
    }
    }





}
//const estudante = new Estudante("João", "joao@etec.sp.gov.br", 12,"11987654321", 12, 15);
//console.log(estudante.situacao());
export default Estudante ;
