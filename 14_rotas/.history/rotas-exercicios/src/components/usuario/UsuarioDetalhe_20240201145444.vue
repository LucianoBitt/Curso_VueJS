<template>
	<div class="usuario-detalhe">
		<h3>Detalhes do Usuário</h3>
		<p><strong>Código:</strong> {{ id }}</p>
		<router-link tag="button" primario to="/usuario/1/editar">
			Editar
		</router-link>
	</div>
</template>

<script>
export default {
	props: ['id'],
	// data() {
	// 	return {
	// 		id: this.$route.params.id
	// 	}
	// },
	// watch: {
	// 	$route(to, from) {
	// 		this.id = to.params.id
	// 	}
	// },
}
</script>

<style>

</style>