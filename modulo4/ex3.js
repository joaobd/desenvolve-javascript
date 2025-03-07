// Definindo o array de objetos para armazenar os livros no estoque
let estoqueLivros = [
    { titulo: 'Livro A', autor: 'Autor A', quantidade: 10 },
    { titulo: 'Livro B', autor: 'Autor B', quantidade: 5 }
  ];
  
  // Função para adicionar um novo livro ao estoque
  function adicionarLivro(titulo, autor, quantidade) {
    // Verifica se o livro já existe no estoque
    for (let livro of estoqueLivros) {
      if (livro.titulo === titulo) {
        console.log(`O livro '${titulo}' já existe no estoque.`);
        return;
      }
    }
    
    // Adiciona o novo livro ao estoque
    estoqueLivros.push({ titulo, autor, quantidade });
    console.log(`O livro '${titulo}' foi adicionado ao estoque.`);
  }
  
  // Função para remover um livro do estoque pelo título
  function removerLivro(titulo) {
    // Encontra o índice do livro no estoque
    const index = estoqueLivros.findIndex(livro => livro.titulo === titulo);
    
    if (index !== -1) {
      // Remove o livro do estoque
      estoqueLivros.splice(index, 1);
      console.log(`O livro '${titulo}' foi removido do estoque.`);
    } else {
      console.log(`O livro '${titulo}' não foi encontrado no estoque.`);
    }
  }
  
  // Função para atualizar a quantidade de um livro no estoque
  function atualizarQuantidade(titulo, novaQuantidade) {
    // Encontra o livro no estoque e atualiza a quantidade
    for (let livro of estoqueLivros) {
      if (livro.titulo === titulo) {
        livro.quantidade = novaQuantidade;
        console.log(`A quantidade do livro '${titulo}' foi atualizada para ${novaQuantidade}.`);
        return;
      }
    }
    
    console.log(`O livro '${titulo}' não foi encontrado no estoque.`);
  }
  
  // Função para listar todos os livros no estoque
  function listarLivros() {
    if (estoqueLivros.length === 0) {
      console.log("Não há livros no estoque.");
      return;
    }
    
    console.log("Livros no estoque:");
    for (let livro of estoqueLivros) {
      console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Quantidade: ${livro.quantidade}`);
    }
  }
  
  // Exemplos de uso
  adicionarLivro('Livro C', 'Autor C', 7);
  adicionarLivro('Livro D', 'Autor D', 12);
  removerLivro('Livro B');
  atualizarQuantidade('Livro A', 15);
  listarLivros();
  