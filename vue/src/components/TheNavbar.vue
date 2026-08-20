<script setup>
const navLinks = [
  { label: 'Pilares', href: '#pilares' },
  { label: 'Manifestações', href: '#manifestacoes' },
  { label: 'Contato', href: '#contato' }
]
</script>

<template>
  <header class="navbar">
    <div class="container nav-content">
      <div class="logo">Brasil<span>.lab</span></div>
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
  backdrop-filter: blur(12px);
  background: rgba(10, 10, 12, 0.8);
  border-bottom: 1px solid var(--border);
  z-index: 100;
  padding: 1rem 0;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.logo span {
  color: var(--accent);
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
  transition: color 0.2s ease;
}

.nav-list a:hover {
  color: var(--text-main);
}
</style>