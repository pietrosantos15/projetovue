<script setup>
import { ref, computed } from 'vue'

const categories = ['Todos', 'Música', 'Gastronomia', 'Folclore', 'Arte & Literatura']
const selectedCategory = ref('Todos')

const items = [
  { 
    id: 1, 
    category: 'Música', 
    title: 'Samba, Bossa & Ritmos', 
    desc: 'Do cavaquinho de terreiro ao fraseado suave da Bossa Nova, uma revolução rítmica reconhecida mundialmente.',
    colorTag: 'var(--brazil-green)'
  },
  { 
    id: 2, 
    category: 'Gastronomia', 
    title: 'Saberes & Ingredientes Nativos', 
    desc: 'Tucupi, mandioca, dendê e feijoadas. A união de técnicas indígenas, africanas e ibéricas.',
    colorTag: 'var(--brazil-yellow)'
  },
  { 
    id: 3, 
    category: 'Folclore', 
    title: 'Festivais & Tradições Populares', 
    desc: 'Bumba Meu Boi, Maracatu Nação e o Frevo: cortejos de resistência, fé e celebração coletiva.',
    colorTag: 'var(--brazil-blue)'
  },
  { 
    id: 4, 
    category: 'Arte & Literatura', 
    title: 'Cordel & Xilogravura', 
    desc: 'A métrica precisa da rima nordestina ilustrada em talha de madeira, documentando causos do povo.',
    colorTag: 'var(--brazil-green)'
  }
]

const filteredItems = computed(() => {
  if (selectedCategory.value === 'Todos') return items
  return items.filter(item => item.category === selectedCategory.value)
})
</script>

<template>
  <section id="pilares" class="container grid-section">
    <div class="section-header">
      <h2>Pilares de Expressão</h2>
      <p>As matrizes que constroem nossa identidade coletiva.</p>
    </div>

    <div class="filter-bar">
      <button 
        v-for="cat in categories" 
        :key="cat"
        :class="{ active: selectedCategory === cat }"
        @click="selectedCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <div class="cards-grid">
      <div v-for="item in filteredItems" :key="item.id" class="card">
        <span class="card-tag" :style="{ color: item.colorTag }">{{ item.category }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid-section {
  padding: 4rem 1.5rem 5rem;
}

.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.section-header h2 {
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.section-header p {
  color: var(--text-muted);
  margin-top: 0.5rem;
}

.filter-bar {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.filter-bar button {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  color: var(--text-muted);
  padding: 0.5rem 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.filter-bar button.active, .filter-bar button:hover {
  color: var(--text-main);
  border-color: var(--brazil-green);
  background: rgba(0, 223, 129, 0.05);
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 2rem;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.2);
}

.card-tag {
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.65rem;
  letter-spacing: -0.3px;
}

.card p {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}
</style>