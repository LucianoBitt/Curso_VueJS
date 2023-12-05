<template>
	<div id="app">
		<h1>Tarefas</h1>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tasks: [
				{ name: 'Lavar a louça', pending: false },
				{ name: 'Lavar roupas', pending: true },
				{ name: 'Lavar o carro', pending: true },
				{ name: 'Estudar', pending: true },
				{ name: 'Buscar na escola', pending: true },
				{ name: 'Natação', pending: true },
				{ name: 'Academia', pending: true },
				
			]
		}
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
