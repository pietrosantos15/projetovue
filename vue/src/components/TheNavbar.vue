<script setup>
const navLinks = [
  { label: 'Visão Geral', href: '#metricas' },
  { label: 'Pilares Culturais', href: '#pilares' },
  { label: 'Regiões', href: '#regioes' },
  { label: 'Newsletter', href: '#newsletter' }
]
</script>

<template>
  <header class="navbar">
    <div class="container nav-content">
      <a href="#top" class="logo">
        <span class="flag-dot"></span>
        Brasil<span>.lab</span>
      </a>
      <nav>
        <ul class="nav-list">
          <li v-for="link in navLinks" :key="link.href">
            <a :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  backdrop-filter: blur(16px);
  background: rgba(7, 13, 10, 0.85);
  border-bottom: 1px solid var(--border);
  z-index: 100;
  padding: 1.1rem 0;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--text-main);
  letter-spacing: -0.5px;
}

.flag-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--brazil-green);
  box-shadow: 0 0 10px var(--brazil-green);
}

.logo span {
  color: var(--brazil-yellow);
}

.nav-list {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-list a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-list a:hover {
  color: var(--brazil-green);
}

@media (max-width: 768px) {
  .nav-list {
    display: none;
  }
}
</style>