
 abstract class Pessoa { 
    nome:string;
    idade:number;
    email:string;
    fone:string;

    static ddds = [
        11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51,
        53, 54, 55, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94,
        95, 96, 97, 98, 99
    ];

    constructor(nome:string, email:string, idade:number, fone:string)
    {   this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.fone = fone;

        if (!this.validaFone()) {
            console.log('Número de telefone inválido.');
        }
        if (!this.validaEmail()) {
            console.log('E-mail inválido.');
          }

}
abstract validaEmail():boolean 
validaFone(): boolean {

    const foneRegex = /^[0-9]{10,11}$/;
    if (!foneRegex.test(this.fone)) {
      return false;
    }
    const ddd = parseInt(this.fone.substring(0, 2));
    return Pessoa.ddds.includes(ddd);
  }

validaInfo(): boolean {
    return this.validaEmail() && this.validaFone();
} }
 export default Pessoa; 