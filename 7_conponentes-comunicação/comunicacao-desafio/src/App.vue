<template>
	<div id="app">
		<usuario-lista :usuarios="usuarios" />
		<usuario-detalhe />
	</div>
</template>

<script>
import UsuarioLista from './components/UsuarioLista.vue'
import UsuarioDetalhe from './components/UsuarioDetalhe.vue'

export default {
	name: "app",
	components: { UsuarioLista, UsuarioDetalhe },
    data() {
        return {
            usuarios: [
                { id: 1, nome: 'Luciano', idade: 46 },
                { id: 2, nome: 'Stefania', idade: 32 },
                { id: 3, nome: 'Victória', idade: 13 },
                { id: 4, nome: 'Rafael', idade: 16 },
                { id: 5, nome: 'Maria', idade: 14 }
            ]
        }
    }
}
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	background-color: rgba(0, 0, 0, 0.171);
	color: #2c3e50;
	margin-top: 60px;
	display: flex;
	font-size: 2rem;
}

#app div {
	margin: 20px;
}
</style>
