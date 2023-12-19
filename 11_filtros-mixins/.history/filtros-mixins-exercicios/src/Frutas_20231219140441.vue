<template>
	<div>
		<ul>
			<li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
		</ul>
		<input type="text" <input v-model="data" type="text" />>
	</div>
</template>

<script>
export default {
	data() {
		return {
			fruta: '',
			frutas: ['banana', 'maça', 'laranja']
		}
	},
	methods: {
		add() {
			this.frutas.push(this.fruta)
			this.fruta = ''
		}
	}
}
</script>

<style>

</style>