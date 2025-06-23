// app.js - Atualizado para upload de arquivo de imagem

const express = require('express');
const path = require('path');
const session = require('express-session');
const multer = require('multer');
const { Livro, sequelize } = require('./models/Livro');

const app = express();
const port = 3000;

// Configuração do Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'public', 'imagens'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

app.use(session({
  secret: 'livraria-secreta',
  resave: false,
  saveUninitialized: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rotas
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/livros', async (req, res) => {
  const livros = await Livro.findAll();
  res.render('livros', { livros });
});

app.get('/livros/novo', (req, res) => {
  res.render('formLivro', { livro: {}, acao: '/livros/criar' });
});

app.post('/livros/criar', upload.single('imagem'), async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  const titulo = req.body.titulo;
  const autor = req.body.autor;
  const descricao = req.body.descricao;
  const imagem = req.file ? req.file.filename : '';

  await Livro.create({ titulo, autor, descricao, imagem });
  res.redirect('/livros');
});

app.get('/livros/editar/:id', async (req, res) => {
  const livro = await Livro.findByPk(req.params.id);
  res.render('formLivro', { livro, acao: `/livros/atualizar/${livro.id}` });
});

app.post('/livros/atualizar/:id', upload.single('imagem'), async (req, res) => {
  console.log('BODY:', req.body);
  console.log('FILE:', req.file);

  if (!req.body.titulo || !req.body.autor || !req.body.descricao) {
    return res.status(400).send('Campos obrigatórios não foram enviados.');
  }

  const titulo = req.body.titulo;
  const autor = req.body.autor;
  const descricao = req.body.descricao;
  const imagem = req.file ? req.file.filename : req.body.imagem_antiga;

  await Livro.update(
    { titulo, autor, descricao, imagem },
    { where: { id: req.params.id } }
  );

  res.redirect('/livros');
});

app.post('/livros/deletar/:id', async (req, res) => {
  await Livro.destroy({ where: { id: req.params.id } });
  res.redirect('/livros');
});

// Adicionar aos Favoritos
app.post('/favoritos/adicionar/:id', (req, res) => {
  if (!req.session.favoritos) {
    req.session.favoritos = [];
  }

  const livroId = parseInt(req.params.id);
  if (!req.session.favoritos.includes(livroId)) {
    req.session.favoritos.push(livroId);
  }

  res.redirect('/livros');
});

// Listar favoritos
app.get('/favoritos', async (req, res) => {
  const favoritosIds = req.session.favoritos || [];
  const livrosFavoritos = await Livro.findAll({ where: { id: favoritosIds } });
  res.render('favoritos', { livros: livrosFavoritos });
});

// Inicia o servidor
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
});
