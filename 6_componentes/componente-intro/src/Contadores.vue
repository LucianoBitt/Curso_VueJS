<template>
	<div class="contadores">
		<h1>Contadores</h1>
		<hr>
		<app-contador v-for="c in 5" :key="c" />
	</div>
</template>

<script>
import Contador from './Contador.vue'

export default {
	name: 'contador-component',
	components: { 'app-contador': Contador }
}
</script>

<style>

</style>