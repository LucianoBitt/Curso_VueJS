<template>
	<div>
		<rotulo nome="Nome">
			<input type="text" :value="value.nome">
		</rotulo>
		<rotulo nome="Sobrenome">
			<input type="text" :value="value.sobrenome">
		</rotulo>
	</div>
</template>

<script>
import Rotulo from './Rotulo.vue'

export default {
	props: {
		value: {
			type: Object,
			required: true
		}
	},
	components: { Rotulo },
	methods: {
		alterarNome(event) {
			
		},
	}
}
</script>

<style>

</style>