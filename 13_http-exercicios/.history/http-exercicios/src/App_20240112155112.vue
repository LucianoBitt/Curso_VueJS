<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<hr>
		<h2>Firebase</h2>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg"
					v-model="usuario.nome"
					placeholder="Informe o Nome"></b-form-input>
			</b-form-group>
			<b-form-group label="E-mail:">
				<b-form-input type="email" size="lg"
					v-model="usuario.email"
					placeholder="Informe o E-mail"></b-form-input>
			</b-form-group>
		</b-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			usuario: {
				nome: 'Stefânia',
				email: 'fany.costa@gmail.com'
			}
		}
	}
	// created() {
	// 	this.$http.post('usuarios.json', {
	// 		nome: 'Luciano',
	// 		email: 'lucianobitt@hotmail.com'
	// 	},
	// 		{
	// 			headers: { 'Access-Control-Allow-Origin': '*', }
	// 	}).then(res => console.log(res))
	// }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1, h2 {
	text-align: center;
	margin: 50px;
}
</style>
