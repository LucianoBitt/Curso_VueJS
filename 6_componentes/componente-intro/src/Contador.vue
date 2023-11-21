<template>
	<div class="contador">
		<span>{{ Contador }}</span>
		<button @click="adicionar">+</button>
		<button @click="subtrair">-</button>
	</div>
</template>

<script>
export default {
	name: 'contador-component',
	data() {
		return {
				contador: 0
			}
	},
	methods: {
		adicionar() {
			this.contador++
		},
		subtrair() {
			this.contador--
		}
	},
}
</script>

<style scoped>
	span {
		border-bottom: 2px solid rgba(0, 4, 255, 0.349);
		height: 30px;
		padding: 5px 22px;
	}

	button {
		height: 30px;
		width: 30px;
		border-radius: 15px;
		background-color: rgba(255, 0, 0, 0.548);
		color: #fff;
		margin-left: 10px;
		outline: none;
	}
</style>