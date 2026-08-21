<script setup>
import { ref } from 'vue'

const email = ref('')
const submitted = ref(false)

const handleSubmit = () => {
  if (email.value.trim()) {
    submitted.value = true
    email.value = ''
  }
}
</script>

<template>
  <section id="newsletter" class="container newsletter">
    <div class="box">
      <h3>Conheça novas narrativas brasileiras</h3>
      <p>Receba semanalmente ensaios sobre música, tradições e patrimônio cultural.</p>
      
      <form v-if="!submitted" @submit.prevent="handleSubmit" class="form">
        <input 
          v-model="email" 
          type="email" 
          placeholder="Digite seu e-mail" 
          required 
        />
        <button type="submit">Inscrever</button>
      </form>
      <p v-else class="success-msg">✓ Obrigado por se conectar com a cultura!</p>
    </div>
  </section>
</template>

<style scoped>
.newsletter {
  padding: 4rem 1.5rem 2rem;
}
.box {
  background: linear-gradient(180deg, var(--bg-surface) 0%, rgba(14, 26, 20, 0.4) 100%);
  border: 1px solid var(--border);
  padding: 3.5rem 2rem;
  border-radius: 16px;
  text-align: center;
}
.box h3 {
  font-size: 1.8rem;
  letter-spacing: -0.5px;
  margin-bottom: 0.5rem;
}
.box p {
  color: var(--text-muted);
  font-size: 1rem;
  margin-bottom: 1.75rem;
}
.form {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  max-width: 440px;
  margin: 0 auto;
}
input {
  flex: 1;
  padding: 0.85rem 1rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
  color: var(--text-main);
  outline: none;
}
input:focus {
  border-color: var(--brazil-green);
}
button {
  background: var(--brazil-green);
  color: #041a0f;
  font-weight: 700;
  border: none;
  padding: 0.85rem 1.4rem;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.2s;
}
button:hover {
  opacity: 0.9;
}
.success-msg {
  color: var(--brazil-green) !important;
  font-weight: 600;
}
</style>