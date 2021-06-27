Vue.component('jueguitos-pendientes',{
	data:function() {
		return {
			jueguitosPendientes:[],
			jueguitoPendiente:"",
			error:0,
		}
	},
	template:`
		<div>
			<h2>Juegos pendientes:</h2>
			<form v-on:submit.prevent="pendiente" action="#" enctype="application/x-www-form-urlencoded" class="py-3">
				<input class="form-control" type ="text" v-model="jueguitoPendiente" />
				<button class="btn-formulario" type="submit">Sumar a la lista!</button>
			</form>
			<div v-if="this.error > 0" v-bind:class="this.error ? 'm-4 soft-warning text-center' : 'm-0'">
				<span>¿Escribiste algo?</span>
			</div>
			<div v-if="this.jueguitosPendientes.length > 0" class="jueguitos">
				<ul>
					<li v-for="g in jueguitosPendientes">
						<span>
							{{g.nombre}}
						</span>
						<button class="btn-borrar ml-3" @click="borrar(g)">
							Borrar
						</button>
					</li>
				</ul>
			</div>
		</div>
	`,
	methods: {
		pendiente:function(){
			if(!this.jueguitoPendiente){
				this.error= 1;
			}else{
				this.error = 0;
				this.jueguitosPendientes.push({
					nombre: this.jueguitoPendiente,
					id: new Date().getTime(),
				});
				localStorage.setItem("pendientes",JSON.stringify(this.jueguitosPendientes));
				this.jueguitoPendiente ="";
			};
		},
		borrar: function(item){
			let borramatic = JSON.parse(localStorage.getItem( 'pendientes' ));
			for (var i=0; i < borramatic.length; i++){
				if (borramatic[i].id == item.id ) {
					borramatic.splice(i, 1);
				}
			
			};
			this.jueguitosPendientes = borramatic;
			localStorage.setItem('pendientes', JSON.stringify(borramatic));
		},
	},

mounted:function(){
		this.jueguitosPendientes=JSON.parse(localStorage.getItem("pendientes")) || []
		
	}

});