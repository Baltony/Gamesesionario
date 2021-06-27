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
                <div v-if="this.siOno!=null" v-bind:class="this.siOno>50 ? 'exito' : 'soft-warning' ">
                    <p v-if="this.siOno > 50">Hacelo de una</p>
                    <p v-else-if="this.siOno == null"></p>
                    <p v-else="this.siOno < 50" >Mmmm, probá otra cosa</p>
                </div>
            </div>
        </div>
    `,

    methods: {
        decido:function(){
            this.siOno = Math.floor(Math.random()*100);
            return this.siOno;
        },
    },
})