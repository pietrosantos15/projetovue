<script setup>
const regions = [
  { name: 'Norte', highlight: 'Tradições Amazônicas & Círio', detail: 'Berço da ancestralidade indígena, lendas ribeirinhas e o Festival de Parintins.' },
  { name: 'Nordeste', highlight: 'Forró, Frevo & Resistência', detail: 'Celebrações de São João, gastronomia de dendê e o polo literário do Cordel.' },
  { name: 'Centro-Oeste', highlight: 'Pantanal, Viola & Cavalhadas', detail: 'A força da música de raiz, tradições tropeiras e herança sertaneja.' },
  { name: 'Sudeste', highlight: 'Samba Urbano & Modernismo', detail: 'Fusão cultural metropolitana, escolas de samba e o berço do modernismo de 1922.' },
  { name: 'Sul', highlight: 'Tradição Gaúcha & Imigração', detail: 'Cultura do chimarrão, danças típicas tradicionais e forte herança colonial europeia.' }
]
</script>

<template>
  <section id="regioes" class="container regions-section">
    <div class="section-header">
      <h2>Mosaico Regional</h2>
      <p>Um continente disfarçado de país com cinco universos singulares.</p>
    </div>

    <div class="regions-grid">
      <div v-for="r in regions" :key="r.name" class="region-card">
        <div class="region-top">
          <span class="region-name">{{ r.name }}</span>
        </div>
        <h4>{{ r.highlight }}</h4>
        <p>{{ r.detail }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.regions-section {
  padding: 4rem 1.5rem;
}

.section-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-header h2 {
  font-size: 2.2rem;
  letter-spacing: -0.5px;
}

.section-header p {
  color: var(--text-muted);
  margin-top: 0.5rem;
}

.regions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
}

.region-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  padding: 1.75rem;
  border-radius: 12px;
  transition: border-color 0.2s ease;
}

.region-card:hover {
  border-color: var(--brazil-yellow);
}

.region-name {
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--brazil-blue);
  font-weight: 700;
  letter-spacing: 1px;
}

.region-card h4 {
  font-size: 1.15rem;
  margin: 0.5rem 0;
  color: var(--text-main);
}

.region-card p {
  color: var(--text-muted);
  font-size: 0.9rem;
}
</style>