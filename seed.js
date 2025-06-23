const { Livro, sequelize } = require('./models/Livro');

async function criarLivrosExemplo() {
  await sequelize.sync({ force: true }); // Limpa o banco antes de criar os novos livros

  await Livro.bulkCreate([
    {
    titulo: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    descricao: 'Uma história filosófica com elementos infantis.',
    imagem: 'o-pequeno-principe.jpg'
    },
    {
      titulo: 'O Senhor dos Anéis: A Sociedade do Anel',
      autor: 'J.R.R. Tolkien',
      descricao: 'Primeiro volume da trilogia O Senhor dos Anéis.',
      imagem: 'a-sociedade-do-anel.jpg'
    },
    {
    titulo: '1984',
    autor: 'George Orwell',
    descricao: 'Um romance distópico sobre vigilância e controle social.',
    imagem: '1984.jpg'
    },
    {
      titulo: 'The Hobbit',
      autor: 'J.R.R. Tolkien',
      descricao: 'Uma aventura épica de Bilbo Bolseiro rumo à Montanha Solitária.',
      imagem: 'o-hobbit.jpg'
    },
    {
      titulo: 'O Senhor dos Anéis: As Duas Torres',
      autor: 'J.R.R. Tolkien',
      descricao: 'Segundo volume da trilogia O Senhor dos Anéis.',
      imagem: 'as-duas-torres.jpg'
    },
    {
      titulo: 'A Guerra dos Tronos : As Crônicas de Gelo e Fogo',
      autor: 'George R.R. Martin',
      descricao: 'Primeiro volune das Crônicas de Gelo e Fogo.',
      imagem: 'a-guerra-dos-tronos.jpg'
    },
  ]);

  console.log('📚 Livros de exemplo criados com sucesso!');
  process.exit();
}

criarLivrosExemplo();
