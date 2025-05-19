## Para começar um projeto novo:

Copiar os arquivos dentro de projeto-template e executar os comandos:
npm install
npm run dev

## Estrutura SCSS:

Main.scss importa os arquivos scss para renderizar pelo Main.js
O Primeiro arquivo importado é o Core.scss
O Core centraliza todos os arquivos básicos, mixins, variables e reset
Cada arquivo .scss deve importar separadamente o variables (modularização)

## Estrutura JS:

Main.js importa o arquivo main.scss para aplicar o CSS na página
E fica encarregado de centralizar as importações de demais arquivos JS

# Projeto

PROJETO

## 🚀 Tecnologias

- Vite
- SCSS
- HTML
- Vanilla JS

## 🛠️ Setup

```bash
npm install
npm run dev
npm run build
npm run deploy
```

1. Instala as dependencias
2. Abre o ambiente de desenvolvimento
3. Monta a pasta dist
4. Faz o deploy pro GitHub Pages

## Subir em repositório GIT

```bash
git init
git add .
git commit -m "Deploy inicial"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITÓRIO.git
git push -u origin main
```
