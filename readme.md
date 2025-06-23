
# 📚 Livraria A Toca - Projeto Node.js com Express, EJS, Sequelize e SQLite

Projeto Web desenvolvido por **Sarah Ariel de Sousa Mascarenha**, inspirado pela paixão pessoal da autora por livros e leitura.

Este é o **site do acervo da Livraria A Toca (v1.0)**. O sistema é voltado para **desenvolvedores e administradores internos**, permitindo **cadastrar, visualizar, editar e excluir livros**, além de **gerenciar uma lista de favoritos por sessão**.

---

## 🎨 Paleta de Cores Utilizada:

- **Bege Claro:** `#F9F9F6`
- **Verde Petróleo:** `#2F564D`
- **Marrom Café:** `#3C2615`
- **Amarelo Mostarda:** `#E4B151`

---

## ✅ Tecnologias usadas:

- **Node.js**
- **Express** (Framework backend)
- **EJS** (Template Engine)
- **Sequelize** (ORM)
- **SQLite** (Banco de dados local)
- **Multer** (Para upload de imagens dos livros)
- **express-session** (Para controle de favoritos por sessão)
- **CSS básico** (Estilização visual)
- **Partials no EJS** (Reutilização de código para header e footer)

---

## ✅ Funcionalidades:

- Página inicial da livraria com texto "Sobre nós"
- Visualização de todos os livros no catálogo
- Cadastro de novos livros (Título, Autor, Descrição, Imagem via Upload)
- Edição de livros já existentes
- Exclusão de livros
- Upload de imagem de capa de livro (salva em `/public/imagens`)
- Lista de Favoritos (Por sessão de usuário, sem login)
- Adição de livros aos favoritos
- Visualização da lista de livros favoritos
- Uso de Partials (header/footer) no EJS
- Métodos HTTP: **GET** e **POST**
- Páginas dinâmicas com **EJS + Sequelize**

---

## ✅ Como rodar o projeto localmente:

1. Clone o repositório:

```bash
git clone <url-do-repo>
cd livraria-toca
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o seed para criar livros de exemplo:

```bash
node seed.js
```

4. Inicie o servidor:

```bash
node app.js
```

5. Abra no navegador:

```
http://localhost:3000
```

---

## 📂 Estrutura de Pastas Principal:

```
/models
/views
/public
  /imagens
seed.js
app.js
package.json
```

---

## 👩‍💻 Autora do Projeto:

**Sarah Ariel de Sousa Mascarenha**

> Projeto feito para a disciplina de Programação Web - CRUD com Express, Sequelize e EJS.

---

## 📌 Observações:

- O projeto ainda está na versão inicial e foi planejado para **uso didático**.
- Não possui sistema de autenticação ou venda online (ainda).
