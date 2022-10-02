function aluno(nome, qtdFaltas, notas) {
    this.nome = nome;
    this.qtdFaltas = qtdFaltas;
    this.notas = notas;

    this.calcularMedia = function() {
        let notaAluno = 0;
        let qtdNotas = 0;

        for (let nota of this.notas) {
            notaAluno += nota;
            qtdNotas ++;
        }
        return notaAluno / qtdNotas;
    };

    this.faltas = function() {
        this.quantiaFaltas++;
    };

}

const aluno1 = new aluno("Fernanda Marques", 3, [7,5,8,9]);
const aluno2 = new aluno("Lucas Feitosa", 1, [10,8,9,9]);
const aluno3 = new aluno("Jane Doe", 6, [3,4,8,2]);
const aluno4 = new aluno("John Doe", 2, [8,7,9,8]);

let alunos = [aluno1, aluno2, aluno3, aluno4];


for (let aluno of alunos) {
    console.log("A media de " + aluno.nome + " é : " + aluno.calcularMedia().toFixed(2));
  };

let curso = {
    nomeDoCurso: "Programação Imperativa",
    notaAprovacao: 8,
    faltaMaxima: 3,
    listaEstudante: [aluno1, aluno2, aluno3, aluno4],

    adicionarAlunos: function(novoAluno) {
        curso.listaEstudante.push(novoAluno);
    },

    alunoAprovado: function(aluno) {
        let mediaAluno = aluno.calcularMedia();
    
        if ( this.calculaFaltaEMediaAluno(mediaAluno, aluno.qtdFaltas) || this.calcularMediaAcimaDaAprovacao(aluno.qtdFaltas, mediaAluno) ) {
            return (true)
        } else {
            return (false)
        }
      },
    
      calculaFaltaEMediaAluno: function(mediaAluno, faltas) {
        return mediaAluno >= curso.notaAprovacao && faltas < curso.faltaMaxima ? true : false;
      },
    
      calcularMediaAcimaDaAprovacao: function(quantidadeFaltasAluno, mediaAluno) {
        if (quantidadeFaltasAluno == curso.faltaMaxima) {
          let notaAprovacaoCalculada = curso.notaAprovacao + ((curso.notaAprovacao / 100) * 10);
          return mediaAluno > notaAprovacaoCalculada ? true : false;
        }
      },

    aprovacaoAlunos: function () {
        for (let aluno of this.listaEstudante){
        console.log("O " + aluno.nome + " foi aprovado? : " + curso.alunoAprovado(aluno));
        }
    }

};

let novoAluno6 = new aluno("Maria João", 2, [5,10,8,7]); 
let novoAluno7 = new aluno("João Maria", 1, [6,8,4,2]);

let novosAlunos = [novoAluno6, novoAluno7];

for (let aluno of novosAlunos) {
  curso.adicionarAlunos(aluno);
}

for (let aluno of curso.listaEstudante) {
  console.log(aluno.nome);
}

console.log("O aluno " + aluno2.nome + " foi aprovado? :", curso.alunoAprovado(aluno2));
console.log("O aluno " + aluno3.nome + " foi aprovado? :", curso.alunoAprovado(aluno3));


curso.aprovacaoAlunos();
