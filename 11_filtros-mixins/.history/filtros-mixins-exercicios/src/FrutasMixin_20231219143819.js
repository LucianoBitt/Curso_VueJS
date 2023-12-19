export default {
    data() {
        return {
            fruta: '',
            frutas: ['Morango', 'maça', 'laranja']
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}