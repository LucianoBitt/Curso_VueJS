<template>
	<div class="suario-editar">
		<h3>Editar Usuário</h3>
		<p><strong>Código:</strong> {{ id }} / {{ $route.params.id }}</p>
		<p><strong>Completo:</strong> {{ $route.query.completo ? 'Sim': 'Não' }}</p>
		<p><strong>Língua:</strong> {{ $route.query.lingua }}</p>
		<hr>
		<button primario></button>
		<div id="rodape">
			<h3>Curso Vue</h3>
		</div>
	</div>
</template>

<script>
export default {
	props: ['id'],
}
</script>

<style>
	#rodape {
		margin-top: 1000px;
	}
</style>