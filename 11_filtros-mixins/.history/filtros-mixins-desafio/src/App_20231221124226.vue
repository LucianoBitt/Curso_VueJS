<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<hr>
		<p>{{ frase | espaco-por-virgula }}</p>
		<p>{{ frase | espacoPorVirgula }}</p>
		<hr>
		<p>{{ frase | contar-palavras }}</p>
		<p>{{ frase | contarPalavras }}</p>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<hr>
		<p>{{ frase | frase-comVirgula }}</p>
		<p>{{ frase | fraseComVirgula }}</p>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
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
	},
	computed: {
		fraseComVirgula() {
			return this.frase.replace(/\s/g, ',')
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
	font-size: 2.5rem;
}
</style>
