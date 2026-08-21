import { createApp, ref, computed } from 'vue'

createApp({
  setup() {
    // Filtros de Pilares
    const categories = ['Todos', 'Música', 'Gastronomia', 'Folclore', 'Arte & Literatura']
    const selectedCategory = ref('Todos')

    const items = [
      { 
        id: 1, 
        category: 'Música', 
        title: 'Samba, Bossa & Ritmos', 
        desc: 'Do batuque de terreiro ao fraseado suave da Bossa Nova, uma revolução rítmica reconhecida mundialmente.',
        colorTag: 'var(--brazil-green)'
      },
      { 
        id: 2, 
        category: 'Gastronomia', 
        title: 'Saberes & Ingredientes Nativos', 
        desc: 'Tucupi, mandioca, dendê e feijoadas. A união de saberes indígenas, africanos e ibéricos.',
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

    // Mapeamento Regional
    const regions = [
      { name: 'Norte', highlight: 'Tradições Amazônicas & Círio', detail: 'Ancestralidade indígena, lendas ribeirinhas e o Festival de Parintins.' },
      { name: 'Nordeste', highlight: 'Forró, Frevo & Resistência', detail: 'Festas de São João, gastronomia de dendê e o polo do Cordel.' },
      { name: 'Centro-Oeste', highlight: 'Pantanal, Viola & Cavalhadas', detail: 'Música de raiz pantaneira, tradições tropeiras e herança sertaneja.' },
      { name: 'Sudeste', highlight: 'Samba Urbano & Modernismo', detail: 'Fusão cultural metropolitana, escolas de samba e vanguarda artística.' },
      { name: 'Sul', highlight: 'Tradição Gaúcha & Imigração', detail: 'Cultura do mate, danças típicas tradicionais e herança colonial.' }
    ]

    // Newsletter
    const email = ref('')
    const submitted = ref(false)

    const handleSubmit = () => {
      if (email.value.trim()) {
        submitted.value = true
        email.value = ''
      }
    }

    return {
      categories,
      selectedCategory,
      filteredItems,
      regions,
      email,
      submitted,
      handleSubmit
    }
  }
}).mount('#app')