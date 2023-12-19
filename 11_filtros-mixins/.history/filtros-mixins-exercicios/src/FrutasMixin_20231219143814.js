export default {
    data() {
        return {
            fruta: '',
            frutas: ['Morango']
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}