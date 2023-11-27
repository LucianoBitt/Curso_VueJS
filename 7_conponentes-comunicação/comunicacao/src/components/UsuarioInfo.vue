<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn()">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: {
        nome: {
            type: String,
            required: true
        },
        reiniciarFn: Function,
        idade: Number
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome() {
            this.nome = 'Luciano'
            this.$emit('nomeMudou', this.nome)
        }
    },
    created() {
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
    .container button {
        background-color: rgba(255, 208, 0, 0.507);
        border-color: rgb(255, 255, 255);
    }
</style>
