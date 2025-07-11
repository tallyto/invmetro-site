# InvMetro - Site Institucional

Site institucional da InvMetro, empresa especializada em inspeção veicular e serviços automotivos.

## 🚀 Tecnologias

- **Angular 16** - Framework principal
- **Bootstrap 5** - Framework CSS
- **ng-bootstrap** - Componentes Bootstrap para Angular
- **TypeScript** - Linguagem de programação
- **RxJS** - Biblioteca para programação reativa

## 📋 Funcionalidades

- ✅ **Página Inicial** - Apresentação da empresa e serviços
- ✅ **Serviços** - Detalhamento dos serviços oferecidos
- ✅ **Sobre** - Informações sobre a empresa
- ✅ **Contato** - Formulário de contato e informações
- ✅ **FAQ** - Perguntas frequentes
- ✅ **Tabelas de Preços** - Curitiba e Campo Largo
- ✅ **Design Responsivo** - Compatível com dispositivos móveis
- ✅ **Scroll Automático** - Volta ao topo ao navegar entre páginas

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js (versão 16 ou superior)
- Angular CLI (`npm install -g @angular/cli`)

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositório>

# Navegue até o diretório
cd invmetro-site

# Instale as dependências
npm install
```

### Servidor de Desenvolvimento

```bash
ng serve
```

Navegue para `http://localhost:4200/`. A aplicação será recarregada automaticamente quando você alterar os arquivos fonte.

### Build de Produção

```bash
ng build --configuration production
```

Os arquivos de build serão armazenados no diretório `dist/`.

### Deploy

```bash
# Deploy para GitHub Pages
npm run deploy:github
```

## 📁 Estrutura do Projeto

```text
src/
├── app/
│   ├── components/
│   │   ├── home/           # Página inicial
│   │   ├── servicos/       # Página de serviços
│   │   ├── sobre/          # Página sobre
│   │   ├── contato/        # Página de contato
│   │   ├── faq/            # Página FAQ
│   │   ├── navbar/         # Barra de navegação
│   │   └── footer/         # Rodapé
│   ├── shared/             # Componentes compartilhados
│   │   ├── card/           # Componente de card
│   │   ├── hero-section/   # Seção hero
│   │   └── section-header/ # Cabeçalho de seção
│   └── table-components/   # Componentes de tabela
├── assets/                 # Recursos estáticos
└── styles.css             # Estilos globais
```

## 🔧 Melhorias Recentes

### v1.1.0 - Correção de Navegação

- **Scroll Automático**: Implementado scroll automático para o topo ao navegar entre páginas
- **Configuração de Rota**: Adicionado `scrollPositionRestoration: 'top'` no RouterModule
- **Listener de Navegação**: Implementado listener para eventos NavigationEnd
- **UX Melhorada**: Experiência de usuário mais fluida na navegação

## 🧪 Testes

```bash
# Executar testes unitários
ng test

# Executar testes com coverage
ng test --coverage
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📞 Suporte

Para suporte técnico ou dúvidas sobre o projeto, entre em contato através do site ou dos canais oficiais da InvMetro.

---

Desenvolvido com ❤️ para InvMetro
