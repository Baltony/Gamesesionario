Vue.component('form-cargar-jueguitos', {
	data:function(){
		return {
				id:0,
				titulo:null,
				comentario:"",
				seleccion:null,
				puntaje:null,
				anio:null,
				
						
		arr:[],
		errores:[],
		submitted: false,
		}

	},
	computed : {
    hayErrores: function(){
    	return this.errores.length;
    },
},
template:`<div class="form">
		<form v-on:submit.prevent="guardar" novalidate class="row" action="#" enctype="application/x-www-form-urlencoded">
		<div class="col-md-4 form-group">
			<label>Título</label>
				<input type="text" v-model="titulo"  placeholder="Ingrese el nombre del Juego" name="titulo" required class="form-control"/>
		</div>

		<div class="col-md-4">
			<label>Consola en la que se jugó</label>

			<select v-model="seleccion" name="seleccion" class="form-control">
				<option >NES</option>
				<option >SNES</option>
				<option >Nintendo 64</option>
				<option >Nintendo GameCube</option>
				<option >Nintendo Wii</option>
				<option >Nintendo Wii U</option>
				<option >Nintendo Switch</option>
				<option >Nintendo GameBoy</option>
				<option >Nintendo GameBoy Advance</option>
				<option >Nintendo DS</option>
				<option >Nintendo 3DS</option>
				<option >Sega MasterSystem</option>
				<option >Sega Genesis</option>
				<option >Sega GameGear</option>
				<option >PC</option>
				<option>PlayStation</option>
	  			<option>PlayStation 2</option>
	  			<option>PlayStation 3</option>
	  			<option>PlayStation 4</option>
	  			<option>PlayStation 5</option>
	  			<option >XBOX</option>
	  			<option >XBOX 360</option>
	  			<option >XBOX One </option>
	  			<option >XBOX Series S/X</option>
			</select>
		</div>

		<div class="col-md-4">
			<label>Cuando se completó/abandonó (año):</label>
			<input class="form-control" v-model.number="anio" name="anio" type="number" min="1970" max="2021" />
		</div>


		<div class="col-md-4">
			<label>Breve review</label>
			<textarea v-model="comentario" name="comentario" class="form-control"></textarea>
		</div>

		
		<div class="col-md-4">
			<label>Puntaje:</label>

			<select v-model="puntaje" name="puntaje" class="form-control">
				<option >1</option>
				<option >2</option>
				<option >3</option>
				<option >4</option>
				<option >5</option>
			</select>
		</div>

		<div class="col-12">
			<input type="submit" value="Enviar" class="btn-formulario"/>
		</div>

		</form>

		<div v-if="submitted === true">
			<div v-if="hayErrores" class="warning">
			 <ul>
	     		 <li v-for="x in errores" >{{x}}</li>
	    	</ul>
	  		</div>
	  		<div v-else class="exito">
	              <span>Enviado con éxito</span>
	        </div>
 		</div>

		<div v-if="this.arr.length > 0" class="jueguitos">
			<h2>Juegos</h2>
				<ul class="row justify-content-center">
					<div v-for="item in arr" class="col-md-6">
						<li> 
							{{item.titulo}}

							<span class="consolanio">
								{{item.seleccion}} - {{item.anio}}
							</span>
							
							<span class="review">
								{{item.comentario}}
							</span>
							
							<span class="puntaje"> 
								{{item.puntaje}} / 5 
							</span>
							
							<button class="btn-borrar" @click="borrar(item)">
								Borrar
							</button>

						</li>
					</div>
				</ul>
		</div>
		<div v-else class="soft-warning">
			<p>No hay nada para mostrar, ¡andá a jugar algo y volvé!</p>
		</div>

		
	</div>`,
methods:{

	guardar:function(e){
	//validacion
		this.submitted = true;
		
		this.errores = [];

		if (!this.titulo) {
			this.errores.push('El titulo es obligatorio.');
		
		}
		if (!this.puntaje) {
			this.errores.push('El puntaje es obligatorio.');
		
		}
		if(!this.seleccion){
			this.errores.push('Debe seleccionar una consola.');
		}
		if (!this.anio) {
			this.errores.push('El año es obligatorio, sino ¿cómo podrá saber cuánto tiempo pasó?');
			
		}
			
		if(this.errores.length == 0){
			
			nuevoObj={
					id: new Date().getTime(),
					comentario: this.comentario,
					titulo: this.titulo,
					seleccion: this.seleccion,
					puntaje: this.puntaje,
					anio: this.anio,
					}
			

			if(!localStorage.dato){
				this.arr=[]
			}else{
				this.arr=JSON.parse(localStorage.getItem("dato"))
			}

			this.arr.push(nuevoObj)
			localStorage.setItem("dato",JSON.stringify(this.arr))
			}
			this.comentario="";
			this.titulo="";
			this.seleccion="";
			this.puntaje="";
			this.anio="";
	},

	borrar: function(item){
		let pruebaBorrar = JSON.parse(localStorage.getItem( 'dato' ));
		for (var i=0; i < pruebaBorrar.length; i++){
			if (pruebaBorrar[i].id == item.id ) {
				pruebaBorrar.splice(i, 1);
			}
		
		};
		this.arr = pruebaBorrar;
        localStorage.setItem('dato', JSON.stringify(pruebaBorrar));
	},
},

	mounted:function(){
		this.arr=JSON.parse(localStorage.getItem("dato")) || [] //solo si devuelve null o undefined creará el array
		
	}

});