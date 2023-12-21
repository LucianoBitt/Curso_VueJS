<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<hr>
		<p>{{ frase | espaco-por-virgula }}</p>
		<p>{{ frase | espacoPorVirgula }}</p>
		<hr>
		<p>{{ frase | contar-palavras }}</p>
		<p>{{ frase | contarPalavras }}</p>
		<hr>
		<p>{{ fraseComVirgulas }}</p>
		<p>{{ fraseComTamanhos }}</p>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import frasesMixin from 

export default {
	data() {
		return {
			frase: 'Essa é a frase usada nos desafios.'
		}
	},
	filters: {
		espacoPorVirgula(valor) {
			return valor.replace(/\s/g, ',')
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}
</style>
