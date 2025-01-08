E-commerce com FakeStore API + React + TypeScript 🚀
Tecnologias Utilizadas:

ReactJS - Biblioteca principal para construção da interface do usuário.
TypeScript - Para adicionar tipagem estática, garantindo maior segurança e produtividade no desenvolvimento.
Axios - Biblioteca para realizar as requisições HTTP de forma eficiente.
React Query (useQuery) - Para facilitar o consumo de dados da API e otimizar o gerenciamento do estado de carregamento, erro e cache.
ContextAPI - Utilizada para gerenciar o estado global, como o carrinho de compras.
LocalStorage - Para persistir dados do carrinho entre sessões de navegação.
Skeleton - Técnica para melhorar a experiência do usuário durante o carregamento de dados.
CSS (ou Styled Components) - Para tornar a aplicação responsiva e esteticamente agradável.

Principais Funcionalidades:

🛍️ Listagem de Produtos Dinâmicos com useQuery
A aplicação consome dados da FakeStore API para exibir uma listagem dinâmica de produtos, com informações como nome, preço, descrição e imagens. Para realizar as requisições HTTP, utilizei Axios em conjunto com React Query (useQuery), o que facilita o gerenciamento do estado de carregamento, erro e cache, garantindo uma experiência de navegação mais eficiente e sem re-fetching desnecessário.
Além disso, a tipagem do TypeScript ajuda a garantir que os dados recebidos da API estejam corretos e facilita a manutenção do código.

🛒 Gestão de Carrinho com ContextAPI
A aplicação utiliza a ContextAPI para gerenciar o estado do carrinho de compras de forma centralizada. Com isso, é possível adicionar, remover ou alterar a quantidade dos itens no carrinho sem complicação, tornando a interação do usuário mais fluida. O uso de TypeScript ajuda a garantir que as interações com o contexto sejam seguras e previsíveis, fornecendo autocompletar e detecção de erros no momento do desenvolvimento.

💾 Persistência do Carrinho com LocalStorage
Para garantir que os itens do carrinho sejam mantidos entre sessões, implementei a persistência com LocalStorage. Essa funcionalidade permite que o carrinho não seja perdido, mesmo quando o usuário fecha o navegador, criando uma experiência de compra contínua e sem fricções.

⏳ Carregamento Suave com Skeleton
A experiência do usuário foi otimizada com a técnica de Skeleton Loading. Enquanto os produtos estão sendo carregados da FakeStore API, o usuário visualiza um esqueleto de carregamento que evita uma tela em branco e torna a navegação mais interativa e agradável. O TypeScript também ajuda a garantir que o estado de carregamento seja tratado corretamente, sem falhas de tipo no código.

📱 Responsividade Total
O design foi desenvolvido com foco em responsividade, usando técnicas modernas de CSS ou Styled Components. O layout se adapta automaticamente a diferentes dispositivos, seja desktop, tablet ou smartphone, garantindo uma boa experiência de uso em qualquer tamanho de tela.

Tecnologias e Conceitos Utilizados:
React para construção da UI.
TypeScript para garantir a tipagem estática e melhorar a segurança e a produtividade no desenvolvimento.
Axios para consumir dados da FakeStore API.
React Query (useQuery) para gerenciar as requisições de dados e otimizar o cache e os estados de carregamento.
ContextAPI para gerenciamento do estado global, como o carrinho de compras.
LocalStorage para garantir a persistência dos dados entre sessões de navegação.
Skeleton Loading para melhorar a experiência de carregamento dos produtos.
CSS (ou Styled Components) para garantir um design responsivo.

O que aprendi:
Uso de TypeScript no React: Aprendi como adicionar tipagem estática ao meu código com TypeScript, garantindo maior segurança e evitando erros comuns de JavaScript, como acessar propriedades inexistentes em objetos ou manipular tipos incorretos.
Integração com React Query: Utilizei useQuery para consumir dados da FakeStore API e gerenciar automaticamente o estado de carregamento, erro e cache. Com o uso de TypeScript, consegui uma tipagem robusta para as respostas da API, evitando problemas futuros de tipo e aumentando a clareza no código.
Gerenciamento de Estado com ContextAPI: Aprofundei meus conhecimentos na utilização da ContextAPI para gerenciar o estado do carrinho de compras de forma centralizada e eficiente.
Persistência de Dados: A persistência do carrinho com LocalStorage foi uma solução simples e eficaz para manter os dados entre as sessões de navegação.
UI/UX: Melhorei minhas habilidades de design, utilizando Skeleton Loading para uma melhor experiência de carregamento e garantindo que o layout seja totalmente responsivo.

Próximos Passos e Melhorias:
Filtro de Busca Avançado: Embora já tenha sido implementado boa parte do código, precisa-se finaliza-lo, o próximo passo também seria expandir essa funcionalidade para incluir filtros mais avançados, como filtragem por categoria, faixa de preço e classificação. Isso permitiria uma busca mais refinada e personalizada para os usuários, proporcionando uma experiência de compra mais eficiente.

Autenticação de Usuários: Implementação de um sistema de login e cadastro para permitir uma experiência personalizada para os usuários, com funcionalidades como histórico de compras, recomendações e carrinho salvo por usuário.

Integração com Gateway de Pagamento: Adição de uma funcionalidade para permitir o pagamento seguro, como integração com Stripe ou PayPal, para tornar a finalização da compra mais fácil e segura.

Otimização de Performance: Uso de técnicas como lazy loading, memoization, e otimização de imagens para melhorar o desempenho da aplicação, principalmente em dispositivos móveis.

Implementação de Testes

Considerações Finais:
Este projeto me proporcionou uma excelente oportunidade de aprender e aplicar TypeScript no desenvolvimento de uma aplicação React. Ao integrar React Query para otimizar o consumo de dados da API e a ContextAPI para gerenciar o estado global, pude criar uma aplicação de e-commerce altamente eficiente, escalável e fácil de manter. A experiência de adicionar Skeleton Loading e garantir a responsividade fez com que a navegação fosse suave e agradável em qualquer dispositivo.

Estou ansioso para continuar aprimorando minhas habilidades, explorando novas funcionalidades e aplicando TypeScript em projetos mais complexos no futuro.

#Tecnologias Usadas:
ReactJS
TypeScript
Axios
React Query (useQuery)
ContextAPI
LocalStorage
Skeleton Loading
CSS/Styled Components
FakeStore API
JavaScript
