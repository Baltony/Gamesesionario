Vue.component('decide-porvos',{
    data:function() {
		return {
            siOno:null,
		}
	},

    template:`
        <div>
            <h2>¿Lo hacés o no lo hacés? Apretá el botoncito y averigualo</h2>
            <div class="text-center pb-3">
                <button @click="decido" class="btn-formulario">Venga el líquido</button>
                <p v-if="this.siOno > 50" class="exito mt-4">Hacelo de una</p>
                <p v-else-if="this.siOno == null"></p>
                <p v-else="this.siOno < 50"  class="soft-warning mt-4">Mmmm, probá otra cosa</p>
            </div>
        </div>
    `,

    methods: {
        decido:function(){
            this.siOno = 0;
            this.siOno = Math.floor(Math.random()*100);
            return this.siOno;
        },
    },
})