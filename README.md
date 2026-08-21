# 🇧🇷 Brasil.lab — Landing Page Cultural

Uma landing page moderna, minimalista e responsiva desenvolvida em **Vue 3** com **TypeScript** e **Vite**, dedicada a celebrar e explorar a pluralidade das manifestações, gastronomia, música e patrimônio imaterial brasileiro.

---

## 🚀 Tecnologias Utilizadas

- **[Vue 3](https://vuejs.org/)** — Composition API com sintaxe `<script setup>`
- **[Vite](https://vitejs.dev/)** — Build tool ultrarrápido
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática e escalabilidade
- **CSS3 Puro** — Variáveis globais, Flexbox, CSS Grid e design system temático em modo escuro

---

## 🎨 Funcionalidades

- **Design System Temático**: Paleta inspirada nas cores do Brasil (*Emerald Green*, *Vibrant Yellow* e *Sky Blue*) em harmonia com uma interface escura contemporânea.
- **Header Glassmorphism**: Barra de navegação fixa com efeito translúcido e links com *smooth scroll*.
- **Grid de Pilares Interativo**: Filtragem reativa em tempo real por categorias (Música, Gastronomia, Folclore, Arte).
- **Mosaico das 5 Regiões**: Destaques das manifestações culturais de cada região do país.
- **Seção de Inscrição**: Formulário reativo de newsletter para novas narrativas e curiosidades culturais.

---

## 📦 Estrutura do Projeto

```text
src/
├── components/
│   ├── TheNavbar.vue          # Barra de navegação fixa
│   ├── HeroSection.vue        # Seção principal de apresentação com métricas
│   ├── CultureGrid.vue        # Grid de pilares culturais com filtro reativo
│   ├── RegionsSection.vue     # Cartões das 5 regiões brasileiras
│   ├── NewsletterSection.vue  # Formulário de newsletter
│   └── TheFooter.vue          # Rodapé com copyright e links de retorno
├── App.vue                    # Componente raiz
├── main.ts                    # Ponto de entrada da aplicação
├── env.d.ts                   # Declaração de tipos de módulos do Vue
└── style.css                  # Variáveis globais, reset e utilitários de tema
