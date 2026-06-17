// Persistência de dados usando o módulo fs
// Abaixo o código de exemplo da apostila do prof. Jânio

  const fs = require ( ' fs ') // importa o módulo fs
  // abre o arquivo ' teste . txt ' e escreve ' Olá!' nele
  
  fs . writeFileSync ( ' teste . txt ' , " Olá! " )
  // abre o arquivo ' teste . txt ' e acrescenta uma linha
  
  fs . appendFileSync ( ' teste . txt ' , " \ nMais uma linha . " )
  // lê o conteúdo do arquivo ' teste . txt '

