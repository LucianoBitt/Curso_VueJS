<template>
	<div class="suario-editar">
		<h3>Editar Usuário</h3>
		<p><strong>Código:</strong> {{ id }} / {{ $route.params.id }}</p>
		<p><strong>Completo:</strong> {{ $route.query.completo }}</p>
	</div>
</template>

<script>
export default {
	props: ['id'],
}
</script>

<style>

</style>