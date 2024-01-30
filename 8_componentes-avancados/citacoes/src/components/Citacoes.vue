<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        <Citacao>
            <h1 slot="autor"> {{ citacoes[indice].autor }}</h1>
            <p slot="texto">{{ citacoes[indice].texto }}</p>
            <h6 slot="fonte"> {{ citacoes[indice].fonte }}</h6>
        </Citacao>
    </div>
</template>

<script>
import Citacao from './Citacao.vue'

export default {
    components: { Citacao },
    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Fonte: Pensador',
                texto: `A persistência é o caminho do êxito.`,
                autor: 'Charles Chaplin'
            }, { 
                fonte: 'Fonte: Frases de Motivação',
                texto: `Por trás de um dia difícil, há uma versão forte de você que sempre seguiu em frente.`,
                autor: 'Pensador'
            }, {
                fonte: 'Fonte: Frases de Motivação',
                texto: `Pare de se importar com as opiniões alheias. Se eu ouvisse tudo o que me diziam, não teria conseguido deixar de ser camelô para me tornar banqueiro.`,
                autor: 'Silvio Santos'
            }]
        }
    },
    computed: {
        indice() {
            return Math.abs(this.numero % 3)
        }
    },
    creatad() {
        console.log('created');
    },
    destroyed() {
        console.log('destroyed');
    },
    activated() {
        console.log('activated');
    },
    deactivated() {
        console.log('deactivated');
    }
}
</script>

<style scoped>
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: auto;
    }

    h1 {
        color: rgba(0, 204, 255, 0.753);
    }

    p {
        color: rgb(0, 255, 200)
    }

    h6 {
        color: rgba(0, 204, 255, 0.753);
    }
</style>
