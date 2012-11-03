phonegap-ex1
============

phonegap-ex1 - Exercicio 1 com Phonegap
---------------------------------------

Este exercicio implementa a parte servidora da Aplicacao em Node JS com o servico para registro de usuario

Para conexao ao Database no Mongolab precisamos definir as variaveis de ambiente no arquivo ~/.bash_profile como mostrado no exemplo abaixo:

  MONGOLAB_DB=myDB
  MONGOLAB_USER=myUser
  MONGOLAB_PASSWD=myPasswd
  MONGOLAB_HOST=ds041347
  export MONGOLAB_DB
  export MONGOLAB_USER
  export MONGOLAB_PASSWD
  export MONGOLAB_HOST

podemos ler na aplicacao Node JS com process.env.ENV_VARIABLE

  process.env.MONGOLAB_DB
  process.env.MONGOLAB_USER
  process.env.MONGOLAB_PASSWD
  process.env.MONGOLAB_HOST

Use o comando sudo visudo para editar o arquivo /etc/sudoers

Neste arquivo devera' ser adicionado as variaveis de ambiente mencionadas acima, do contrario n~ao poder'a ser executado o comando

sudo node app

para rodar a aplicacao na porta 80


