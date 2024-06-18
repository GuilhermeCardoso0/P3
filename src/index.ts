import Estudante from "./Estudante";
import Professor from "./Professor";




const aluno = new Estudante("Fulano", 18, "fulano@fatec.sp.gov.br","12996600022",1,8);
console.log("<< ALUNO >>");
console.log("Registro: ",aluno.ra)
console.log("Nome: ",aluno.nome);
console.log("Média: ",aluno.media.toFixed(2));
console.log("Situação: ",aluno.situacao());
console.log("Fone: ",aluno.fone," - ", aluno.validaFone()?"Válido":"Inválido");
console.log("e-Mail: ",aluno.email," - ", aluno.validaEmail()?"Válido":"Inválido");
const prof = new Professor("Cicrano", 58, "cicrano@gmail.com","996600022",1000,1412);
console.log("<< PROFESSOR >>");
console.log("Matrícula: ",prof.matricula)
console.log("Nome: ",prof.nome);
console.log("Salário: ",prof.salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
console.log("Fone: ",prof.fone," - ", prof.validaFone()?"Válido":"Inválido");
console.log("e-Mail: ",prof.email," - ", prof.validaEmail()?"Válido":"Inválido");