> **🛑 Nota:** Este projeto possui rotas protegidas para acessar funcionalidades específicas. Certifique-se de usar as credenciais de teste e digitar as rotas manualmente (`/login` ou `/admin`) para navegar entre as páginas.


# Projeto LinkeTree

Este projeto é um LinkTree, desenvolvido durante o curso do [Sujeito Programador](https://sujeitoprogramador.com). O objetivo foi criar uma página para centralizar links de maneira moderna, responsiva e acessível, utilizando as melhores práticas em desenvolvimento web.

## Acessar versão online

[LinkeTree](https://linke-tree-phi.vercel.app/)

## 🚀 Recursos e Tecnologias

- **React**: Biblioteca JavaScript para criar interfaces dinâmicas e componentizadas.
- **TypeScript**: Para adicionar tipagem estática e aumentar a confiabilidade do código.
- **TailwindCSS**: Framework CSS para estilização rápida e consistente.
- **Lógica de Programação**: Aplicação de estruturas condicionais e manipulação de estados.
- **Hooks do React**: Uso de `useState` e `useEffect` para gerenciamento de estados e efeitos colaterais.
- **Interfaces TypeScript**: Definição de tipos para melhor organização do código.
- **Responsividade**: Design adaptado para dispositivos móveis e desktop.
- **Deploy**: Projeto hospedado em plataforma

## 🔥 Integração com Firebase

Este projeto utiliza o [Firebase](https://firebase.google.com/) para gerenciar os dados em tempo real e oferecer funcionalidades essenciais. Com o Firebase, foi possível implementar as seguintes operações:

- **Banco de Dados em Tempo Real (Firestore)**:
  - Cadastrar novos links.
  - Excluir links existentes.
  - Atualizar links em tempo real para todos os usuários conectados.

- **Autenticação de Usuários (Firebase Auth)**:
  - Acesso restrito à área administrativa por meio de login.

- **Outras Funcionalidades do Firebase**:
  - Sincronização rápida e confiável entre o cliente e o servidor.
  - Armazenamento seguro de dados no Firestore.


## 🌐 Rotas de Acesso

O projeto possui duas rotas principais que podem ser acessadas diretamente pela barra de endereços do navegador:

- **Página inicial**: `/` (rota padrão ao abrir o projeto).
- **Login**: `/login` (rota de autenticação para entrar no sistema).
- **Admin**: `/admin` (rota restrita para gerenciar links).

⚠️ **Nota importante**: Atualmente, o acesso ao sistema está configurado apenas para autenticação com um email de teste. 

#### Credenciais de Teste

- **Email:** brennoreis411@teste.com
- **Senha:** 123123

✋ *Este login é apenas para fins de desenvolvimento e testes durante o projeto. Autenticação completa para múltiplos usuários ainda não foi implementada.*



