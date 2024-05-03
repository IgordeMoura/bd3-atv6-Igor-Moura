/* Define o Nome do Banco de Dados */
const database = 'BD3-NoSQL-AtlasMongoDB';

/* Acessa o Banco de Dados*/
use(database);

/* Insere um Documento de Dados de Alunos na Collection */
db['bd3-nosql-atv6'].insertMany(
  [
    {
      "cod_aluno":"2",
      "cod_turma": "1",
      "nome": "Socrates da Silva",
      "email":"Socrates@hotmail.com",
      "cpf": "894.961.260-73",
      "rg":"50.712.972-6",
      "tel_aluno":"(94) 2414-3516",
      "tel_responsavel":"(94) 2775-5525",
      "data_nasc":"21/02/2001"
    },
    {
      "cod_aluno":"3",
      "cod_turma": "1",
      "nome": "Nietzsche Gonçalves",
      "email":"N1ltinh0@gmail.com",
      "cpf": "359.902.360-34",
      "rg":"16.969.293-0",
      "tel_aluno":"(95) 2204-8852",
      "tel_responsavel":"(95) 3158-8438",
      "data_nasc":"31/07/2002"
    },
    {
      "cod_aluno":"4",
      "cod_turma": "1",
      "nome": "Carlos Darwin",
      "email":"CarlitosD@gmail.com",
      "cpf": "634.001.110-15",
      "rg":"42.298.036-5",
      "tel_aluno":"(88) 2247-3324",
      "tel_responsavel":"(88) 3315-8170",
      "data_nasc":"13/09/2001"
    },
    {
      "cod_aluno":"5",
      "cod_turma": "2",
      "nome": "Nicolau Tesla",
      "email":"NicolasNicolau@tesla.com",
      "cpf": "756.427.050-08",
      "rg":"41.426.024-7",
      "tel_aluno":"(67) 3693-5928",
      "tel_responsavel":"(67) 2142-9670",
      "data_nasc":"11/12/2001"
    },
    {
      "cod_aluno":"6",
      "cod_turma": "2",
      "nome": "Galileu Santos",
      "email":"Gali.Santos@gmail.com",
      "cpf": "071.833.090-02",
      "rg":"17.530.605-9",
      "tel_aluno":"(94) 2668-6605",
      "tel_responsavel":"(94) 2987-5112",
      "data_nasc":"05/08/2002"
    },
    {
      "cod_aluno":"7",
      "cod_turma": "2",
      "nome": "José Schoppenhauer",
      "email":"Schopp@gmail.com",
      "cpf": "440.989.420-03",
      "rg":"36.312.630-2",
      "tel_aluno":"(61) 3512-0068",
      "tel_responsavel":"(61) 2474-0653",
      "data_nasc":"11/01/2002"
    },
    {
      "cod_aluno":"8",
      "cod_turma": "2",
      "nome": "Henrique Platão",
      "email":"MegaPlatão98@gmail.com",
      "cpf": "037.402.090-62",
      "rg":"19.528.112-3",
      "tel_aluno":"(84) 3554-9578",
      "tel_responsavel":"(84) 2984-2657",
      "data_nasc":"07/09/2002"
    },
    {
      "cod_aluno":"9",
      "cod_turma": "2",
      "nome": "Aristoteles Silva",
      "email":"Ari.Silva55@gmail.com",
      "cpf": "559.300.300-90",
      "rg":"44.680.958-5",
      "tel_aluno":"(21) 3853-2386",
      "tel_responsavel":"(21) 2887-0796",
      "data_nasc":"21/10/2002"
    },
  ]
);