<template>
  <footer id="contato" class="footer">
    <div class="container footer-content">
      <p>© 2026 Brasil.lab — Celebrando a diversidade cultural.</p>
      <div class="footer-links">
        <a href="#top">Voltar ao topo ↑</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 2.5rem 0;
  margin-top: 4rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.footer-links a {
  color: var(--text-muted);
  text-decoration: none;
}

.footer-links a:hover {
  color: var(--text-main);
}

@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>