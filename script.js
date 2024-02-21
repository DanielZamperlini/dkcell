function gerarPDF() {
  // Obter dados do formulário
  const valorServico = document.getElementById('valorServico').value;
  const cliente = document.getElementById('cliente').value;
  const phone = document.getElementById('phone').value;
  const marca = document.getElementById('marca').value;
  const modelo = document.getElementById('modelo').value;
  const descricao = document.getElementById('descricao').value;
  const detalhes = document.getElementById('detalhes').value;
  const acessorios = document.getElementById('acessorios').value;
  const entrada = document.getElementById('entrada').value;
  const saida = document.getElementById('saida').value;

  // Criar instância jsPDF
  const pdf = new jsPDF();

  // Definir tamanho da fonte
  pdf.setFontSize(10); // Ajuste o valor conforme necessário

  // Adicionar logo ou imagem ao PDF
  const logoImg = new Image();
  logoImg.src = 'img/DKCELL.png'; // Substitua com o caminho para sua imagem
  pdf.addImage(logoImg, 'PNG', 5, 5, 40, 20); // Parâmetros
  pdf.addImage(logoImg, 'PNG', 5, 120, 40, 20); // Parâmetros

  const celllockImg = new Image();
  celllockImg.src = 'img/senha.jpg'; // Substitua com o caminho para sua imagem
  pdf.addImage(celllockImg, 'PNG', 135, 195, 25, 40); // Parâmetros

  const lockImg2 = new Image();
  lockImg2.src = 'img/senha2.jpg'; // Substitua com o caminho para sua imagem
  pdf.addImage(lockImg2, 'PNG', 170, 195, 20, 25); // Parâmetros

  // retangulos criados
  // via do cliente
  pdf.rect(110, 15, 95, 7); // Retângulo para "VALOR DO SERVIÇ0"
  pdf.rect(5, 25, 100, 7); // Retângulo para "Nome do cliente: "
  pdf.rect(110, 25, 95, 7); // Retângulo para "telefone"
  pdf.rect(5, 35, 100, 7); // Retângulo para "marca"
  pdf.rect(110, 35, 95, 7); // Retângulo para "modelo"
  pdf.rect(5, 45, 100, 21); // Retângulo para "acessorios: "
  pdf.rect(110, 45, 95, 21); // Retângulo para "detalhes"
  pdf.rect(5, 80, 200, 7); // Retângulo para "endereço"

  pdf.rect(5, 70, 135, 7); // Retângulo para "entrada e saida"
  pdf.rect(142, 70, 63, 7); // Retângulo para "contato"

  pdf.rect(5, 90, 170, 22); // CONDIÇÃO DE EXECUÇAO
  pdf.rect(177, 90, 28, 22); // Retângulo para assinatura

  pdf.rect(5, 115, 200, 1); // Retângulo para separar via cliente e interna

  // via interna
  pdf.rect(110, 130, 95, 7); // Retângulo para "VALOR DO SERVIÇ0"
  pdf.rect(5, 140, 100, 7); // Retângulo para "Nome do cliente: "
  pdf.rect(110, 140, 95, 7); // Retângulo para "telefone"
  pdf.rect(5, 150, 100, 7); // Retângulo para "marca"
  pdf.rect(110, 150, 95, 7); // Retângulo para "modelo"
  pdf.rect(5, 160, 200, 7); // Retângulo para "acessorios"
  pdf.rect(5, 170, 200, 7); // Retângulo para "descrição"

  pdf.rect(130, 190, 75, 47); // Retângulo para senha
  pdf.rect(164, 223, 32, 8); // Retângulo para senha

  pdf.rect(5, 190, 57, 7); // Retângulo para "entrada"
  pdf.rect(63, 190, 62, 7); // Retângulo para "saida"
  pdf.rect(5, 200, 120, 37); // Retângulo para "condição"

  pdf.rect(5, 242, 200, 14); // Retângulo para "detalhes"
  pdf.rect(5, 260, 200, 14); // Retângulo para "laudo"
  pdf.rect(5, 278, 200, 14); // Retângulo para "descrição"

  // Adicionar conteúdo ao PDF
  //cliente
  pdf.text(`VIA CLIENTE`, 170, 10);
  pdf.text(`Valor do serviço: R$ ${valorServico}`, 112, 20);
  pdf.text(`Cliente: ${cliente}`, 6, 30);
  pdf.text(`Telefone: ${phone}`, 111, 30);
  pdf.text(`Marca: ${marca}`, 6, 40);
  pdf.text(`Modelo: ${modelo}`, 111, 40);

  pdf.text(`acessorios:`, 6, 50);
  pdf.text(`detalhes e observações: `, 111, 50);
  const acessorioslines = pdf.splitTextToSize(acessorios, 90);
  pdf.text(acessorioslines, 6, 56);
  const detalheslines = pdf.splitTextToSize(detalhes, 90);
  pdf.text(detalheslines, 111, 56);

  pdf.text(`data entrada: ${entrada} previsão saída: ${saida}`, 6, 75);
  pdf.text(`contato:(91)98206-6009`, 143, 75);
  pdf.text(
    `Endereço: Mercado municipal de Marituba  |  Bairro Centro  |  BOX 179`,
    6,
    85,
  );

  pdf.text(`CARIMBO`, 178, 95);
  pdf.text(`CONDIÇÃO DE EXECUÇÃO: Atenção, a não retirada do `, 6, 95);
  pdf.text(
    `aparelho no prazo de 30 dias serão acrecidos 10% no valor, após`,
    6,
    100,
  );
  pdf.text(
    `60 dias implicará na venda do mesmo para pagamento de gastos`,
    6,
    105,
  );
  pdf.text(`(art. 06. item 03 do codigo de defesa do consumidor)`, 6, 110);

  // tecnico
  pdf.text(`VIA TÉCNICO`, 170, 125);
  pdf.text(`Valor do serviço: R$ ${valorServico}`, 112, 135);
  pdf.text(`Cliente: ${cliente}`, 6, 145);
  pdf.text(`Telefone: ${phone}`, 111, 145);
  pdf.text(`Marca: ${marca}`, 6, 155);
  pdf.text(`Modelo: ${modelo}`, 111, 155);
  pdf.text(`acessorios:  ${acessorios}`, 6, 166);
  pdf.text(`Assinatura do cliente :`, 6, 175);

  pdf.text(`entrada: ${entrada}`, 6, 196);
  pdf.text(`saída: ${saida}`, 64, 196);
  pdf.text(`senha`, 139, 195);

  pdf.text(`condição de execução: Atenção, a não retirada`, 6, 207);
  pdf.text(`do aparelho no prazo de 30 dias serão`, 6, 212);
  pdf.text(`acrecidos 10% no valor, após 60 dias`, 6, 217);
  pdf.text(`implicará na vendado mesmo para pagamento `, 6, 222);
  pdf.text(`de gastos (art. 06. item 03 do codigo de `, 6, 227);
  pdf.text(`defesa do consumidor)`, 6, 232);

  // Dividir a descrição em linhas para ajustar ao tamanho do retângulo
  pdf.text(`Detalhes e observações: `, 6, 247);
  const detalhestecnico = pdf.splitTextToSize(detalhes, 180);
  pdf.text(detalhestecnico, 6, 254);
  pdf.text(`laudo tecnico: `, 6, 265);
  pdf.text(`Descição ou defeito do aparelho : `, 6, 283);
  const descricaoLines = pdf.splitTextToSize(descricao, 180);
  pdf.text(descricaoLines, 6, 289);

  // Salvar o PDF ou exibir no navegador
  pdf.save('OrdemDeServico.pdf');
}
