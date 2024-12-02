// Função principal
function classificarHerois() {
    // Variáveis
    let continuar = true; // Controla o loop
    let herois = []; // Armazena os heróis e seus níveis
  
    while (continuar) { // Laço de repetição
      // Solicita o nome do herói
      let nome = prompt("Digite o nome do herói:");
  
      // Solicita o XP do herói
      let xp = parseInt(prompt(`Digite o XP de ${nome}:`));
  
      // Estrutura de decisão para determinar o nível
      let nivel = "";
      if (xp <= 1000) {
        nivel = "Ferro";
      } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
      } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
      } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
      } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
      } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
      } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
      } else {
        nivel = "Radiante";
      }
  
      // Adiciona o herói e seu nível ao array
      herois.push(`O Herói de nome ${nome} está no nível de ${nivel}`);
  
      // Pergunta ao usuário se deseja continuar
      continuar = confirm("Deseja adicionar outro herói?");
    }
  
    // Exibe todos os heróis e seus níveis
    console.log("Classificação dos Heróis:");
    herois.forEach((heroi) => console.log(heroi));
  }
  
  // Chama a função principal
  classificarHerois();