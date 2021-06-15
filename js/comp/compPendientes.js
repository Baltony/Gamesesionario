Vue.component('jueguitos-pendientes',{
	data:function() {
		return {
			jueguitosPendientes:[],
			jueguitoPendiente:"",
		}
	},
	template:`
		<div>
			<h2>Juegos pendientes:</h2>
			<form v-on:submit.prevent="pendiente" action="#" enctype="application/x-www-form-urlencoded" class="py-3">
				<input class="form-control" type ="text" v-model="jueguitoPendiente" />
				<button class="btn-formulario" @click="pendiente">Sumar a la lista!</button>
			</form>
			<div v-if="this.jueguitosPendientes.length > 0" class="jueguitos">
				<ul>
					<li v-for="g in jueguitosPendientes">{{g.nombre}}</li>
				</ul>
			</div>
		</div>
	`,
	methods: {
		pendiente:function(){
			if(this.jueguitoPendiente ==""){

			}else{
				this.jueguitosPendientes.push({
					nombre: this.jueguitoPendiente,
				});
				localStorage.setItem("pendientes",JSON.stringify(this.jueguitosPendientes))
				this.jueguitoPendiente="";
			}
		},

	},

mounted:function(){
		this.jueguitosPendientes=JSON.parse(localStorage.getItem("pendientes")) || []
		
	}

});