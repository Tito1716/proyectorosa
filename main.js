const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Calculador de alog', 
       // jugadores: ['dsadas', 'vcvxv', 'dsbgdb'] array clasico
       producto: [],
       nuevoproducto: '', total: 0
    },
    methods:{
        agregarJugador (){
            this.producto.push({
                nombre: this.nuevoproducto, cantidad: 0
            });
            this.nuevoproducto = '';
        }
    },
    computed:{
        sumarJugadores(){
            this.total = 0;
            for(juga of this.nuevoproducto){
                this.total = this.total + juga.cantidad;
            }
            return this.total;
        }
      
    }
})