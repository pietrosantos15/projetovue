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
  <section class="container newsletter">
    <div class="box">
      <h3>Receba Curiosidades Culturais</h3>
      <p>Uma pílula semanal sobre a história, gastronomia e ritmos do Brasil.</p>
      
      <form v-if="!submitted" @submit.prevent="handleSubmit" class="form">
        <input 
          v-model="email" 
          type="email" 
          placeholder="Seu melhor e-mail" 
          required 
        />
        <button type="submit">Inscrever</button>
      </form>
      <p v-else class="success-msg">✓ Inscrição confirmada!</p>
    </div>
  </section>
</template>

<style scoped>
.newsletter {
  padding: 2rem 1.5rem;
}
.box {
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
}
.box h3 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}
.box p {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}
.form {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  max-width: 420px;
  margin: 0 auto;
}
input {
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  color: var(--text-main);
  outline: none;
}
input:focus {
  border-color: var(--accent);
}
button {
  background: var(--accent);
  color: #000;
  font-weight: 600;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
}
.success-msg {
  color: var(--accent) !important;
  font-weight: 600;
}
</style>