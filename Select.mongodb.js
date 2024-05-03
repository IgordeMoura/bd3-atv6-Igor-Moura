


/* ######### RODE APENAS O BLOCO DE CODIGO ##########*/


/* Listagem Geral de Alunos */

const database = 'BD3-NoSQL-AtlasMongoDB';
use(database);
db['bd3-nosql-atv6'].find();


/* _____________________________________________ */



/*  Listar um aluno pelo CPF sem o campo de cod_aluno */

const database = 'BD3-NoSQL-AtlasMongoDB';
use(database);
db['bd3-nosql-atv6'].find({"cpf":"440.989.420-03"},{"cod_aluno":0});