<template>
	<div>
		<rotulo nome="Nome">
			<input type="text" v-model="nome">
		</rotulo>
		<rotulo nome="Sobrenome">
			<input type="text" v-model="sobrenome">
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
}
</script>

<style>

</style>