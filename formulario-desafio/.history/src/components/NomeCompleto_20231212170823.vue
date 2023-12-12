<template>
	<div>
		<rotulo nome="Nome">
			<input type="text" v-model="nome">
		</rotulo>
		<rotulo nome="1obrenome">
			<input type="text" v-model="sobrenome">
		</rotulo>
	</div>
</template>

<script>
import Rotulo from './Rotulo.vue'

export default {
	name: 'app',
	components: { Rotulo },
}
</script>

<style>

</style>