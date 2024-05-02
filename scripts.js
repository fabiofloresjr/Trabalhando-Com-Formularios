membros = [
    {
        primeironome: 'John',
        segundonome: 'Lennon',
        instrumento: 'Violão'
    },
    {
        primeironome: 'George',
        segundonome: 'Harrison',
        instrumento: 'Guitarra'
    }
]

const formulario = {

    data() {
        return {
            membros: window.membros,
            novoMembro: {}
        }
    },
    methods: {
        adicionarMembro: function(){
            if (this.novoMembro.primeironome && this.novoMembro.segundonome && this.novoMembro.instrumento){
                this.membros.push(this.novoMembro);
                this.novoMembro = {};
            } else {
                alert("Todos os campos devem ser preenchidos")
            }
        }
    }
};

Vue.createApp(formulario).mount('#app');
