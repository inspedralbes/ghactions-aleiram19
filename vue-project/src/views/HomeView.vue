<template>
  <div class="home">
    <img v-if="useImportedLogo" alt="Vue logo" :src="logoUrl">
    <img v-else alt="Vue logo" src="/img/logo.png">
    <h1>Welcome to Your Vue.js App</h1>
    <p>This is a Vue.js application deployed with GitHub Actions</p>
  </div>
</template>

<script>
// Intentamos importar el logo, pero si falla, usaremos la URL pública
let logoImage;
try {
  logoImage = require('@/assets/logo.png');
} catch (e) {
  console.warn('No se pudo cargar el logo desde assets, usando URL pública');
  logoImage = null;
}

export default {
  name: 'HomeView',
  data() {
    return {
      logoUrl: logoImage,
      useImportedLogo: !!logoImage
    };
  }
}
</script>
