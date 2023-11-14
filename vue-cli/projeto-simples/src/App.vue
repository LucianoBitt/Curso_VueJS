<template>
  <div id="app">
    {{ titulo }}
    <v-btn @click="titulo += ' #'">Alterar</v-btn>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      titulo: 'Teste Data Usando Vue JS!!'
    }
  }
}
</script>

<style>
#app {
  background-color: chocolate;
  color: white;
}
</style>