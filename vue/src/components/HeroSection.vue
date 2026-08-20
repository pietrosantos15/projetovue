<template>
  <section class="hero container">
    <div class="badge">Identidade & Expressão</div>
    <h1>A multiplicidade da alma brasileira em foco.</h1>
    <p>
      Da síncope dos ritmos regionais à riqueza das tradições populares: uma imersão pela diversidade cultural que define o Brasil.
    </p>
    <div class="actions">
      <a href="#pilares" class="btn-primary">Explorar Pilares</a>
      <a href="#manifestacoes" class="btn-secondary">Ver Destaques</a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 6rem 1.5rem 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.badge {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 0.35rem 0.85rem;
  border-radius: 99px;
  color: var(--accent);
  margin-bottom: 1.5rem;
}

h1 {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 800;
  letter-spacing: -1.5px;
  max-width: 800px;
  line-height: 1.15;
  margin-bottom: 1.25rem;
}

p {
  color: var(--text-muted);
  max-width: 580px;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.actions {
  display: flex;
  gap: 1rem;
}

.btn-primary, .btn-secondary {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-primary {
  background-color: var(--text-main);
  color: var(--bg-primary);
}

.btn-primary:hover {
  opacity: 0.9;
}

.btn-secondary {
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-main);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.08);
}
</style>