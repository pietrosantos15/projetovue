<template>
  <section class="hero container">
    <div class="glow-bg"></div>
    <div class="badge">
      <span class="badge-dot"></span>
      Patrimônio Cultural Vivo
    </div>
    
    <h1>
      A força vibrante e a identidade da <span class="gradient-text">cultura brasileira</span>.
    </h1>
    
    <p class="subtitle">
      Das raízes sonoras do samba e maracatu à literatura de cordel e gastronomia ancestral. Explore a pluralidade de um país moldado pela miscigenação e criatividade.
    </p>

    <div class="actions">
      <a href="#pilares" class="btn-primary">Conhecer os Pilares</a>
      <a href="#regioes" class="btn-secondary">Mapeamento Regional</a>
    </div>

    <!-- Barra de Métricas Rápidas -->
    <div id="metricas" class="stats-bar">
      <div class="stat-item">
        <h3>+300</h3>
        <p>Povos Indígenas e Tradições</p>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <h3>5 Regiões</h3>
        <p>Identidades Únicas</p>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <h3>Centenas</h3>
        <p>Gêneros Musicais Nativos</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 6rem 1.5rem 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.glow-bg {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 250px;
  background: radial-gradient(circle, rgba(0, 223, 129, 0.12) 0%, rgba(250, 204, 21, 0.05) 50%, transparent 80%);
  pointer-events: none;
  filter: blur(50px);
  z-index: -1;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: rgba(0, 223, 129, 0.08);
  border: 1px solid rgba(0, 223, 129, 0.25);
  padding: 0.4rem 1rem;
  border-radius: 99px;
  color: var(--brazil-green);
  margin-bottom: 2rem;
}

.badge-dot {
  width: 6px;
  height: 6px;
  background: var(--brazil-green);
  border-radius: 50%;
}

h1 {
  font-size: clamp(2.4rem, 5.5vw, 4.2rem);
  font-weight: 800;
  letter-spacing: -1.5px;
  max-width: 900px;
  line-height: 1.15;
  margin-bottom: 1.5rem;
}

.subtitle {
  color: var(--text-muted);
  max-width: 640px;
  font-size: 1.15rem;
  margin-bottom: 2.5rem;
}

.actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 4.5rem;
}

.btn-primary {
  background-color: var(--brazil-green);
  color: #041a0f;
  font-weight: 600;
  padding: 0.85rem 1.75rem;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 223, 129, 0.3);
}

.btn-secondary {
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-main);
  font-weight: 500;
  padding: 0.85rem 1.75rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.08);
}

.stats-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 850px;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  padding: 1.75rem 1rem;
  border-radius: 16px;
}

.stat-item h3 {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--brazil-yellow);
}

.stat-item p {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--border);
}

@media (max-width: 650px) {
  .stats-bar {
    flex-direction: column;
    gap: 1.25rem;
  }
  .stat-divider {
    display: none;
  }
}
</style>