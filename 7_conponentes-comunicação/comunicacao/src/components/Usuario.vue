<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>O nome é <strong>{{ nome }}</strong></p>
        <p>Idade é <strong>{{ idade }}</strong></p>
        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <div class="componentes">
            <app-usuario-info 
                :nome="nome" 
                :idade="idade"
                @nomeMudou="nome = $event" 
                :reiniciarFn="reiniciarNome" />
            <app-usuario-editar 
                :idade="idade" />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            nome: 'Luciano',
            idade: 46
        }
    },
    methods: {
        alterarNome() {
            this.nome = 'Stefania'
        },
        reiniciarNome() {
            this.nome = 'Luciano Bittencourt'
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container button {
        background-color: rgba(21, 255, 0, 0.507);
        border-color: rgb(255, 255, 255);
    }
    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
    
</style>
