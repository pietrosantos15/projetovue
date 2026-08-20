<script setup>
import { ref, computed } from 'vue'

const categories = ['Todos', 'Música', 'Gastronomia', 'Folclore', 'Arte']
const selectedCategory = ref('Todos')

const items = [
  { id: 1, category: 'Música', title: 'Maracatu e Samba', desc: 'Pulsação rítmica ancestral presente do litoral nordestino ao coração do sudeste.' },
  { id: 2, category: 'Gastronomia', title: 'Saberes & Sabores', desc: 'Tucupi, dendê, queijo da canastra e a fusão de saberes indígenas, africanos e europeus.' },
  { id: 3, category: 'Folclore', title: 'Bumba Meu Boi', desc: 'Teatro popular, devoção e poesia celebrados em festivais no Maranhão e Amazonas.' },
  { id: 4, category: 'Arte', title: 'Literatura de Cordel', desc: 'Xilogravuras e métricas orais preservando a crônica viva da realidade popular.' }
]

const filteredItems = computed(() => {
  if (selectedCategory.value === 'Todos') return items
  return items.filter(item => item.category === selectedCategory.value)
})
</script>

<template>
  <section id="pilares" class="container grid-section">
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
        <span class="card-tag">{{ item.category }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid-section {
  padding: 3rem 1.5rem 5rem;
}

.filter-bar {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.filter-bar button {
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-muted);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s;
}

.filter-bar button.active, .filter-bar button:hover {
  color: var(--text-main);
  border-color: var(--accent);
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 1.75rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.2);
}

.card-tag {
  font-size: 0.75rem;
  color: var(--accent);
  margin-bottom: 0.75rem;
}

.card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.card p {
  color: var(--text-muted);
  font-size: 0.9rem;
}
</style>