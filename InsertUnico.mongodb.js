/* Define o Nome do Banco de Dados */
const database = 'BD3-NoSQL-AtlasMongoDB';

/* Define o Nome da Collection */
const collection = 'bd3-nosql-atv6';

/* Acessa o Banco de Dados*/
use(database);

/* Insere um Documento de Dados de Alunos na Collection */
db['bd3-nosql-atv6'].insertOne(
  {
    "cod_aluno":"1",
    "cod_turma": "1",
    "nome": "Isaac Newton",
    "email":"NewtinhoGamer12@gmail.com",
    "cpf": "317.004.860-04",
    "rg":"28.722.636-0",
    "tel_aluno":"(85) 2844-1032",
    "tel_responsavel":"(85) 3273-5671",
    "data_nasc":"15/04/2002"
  }
);