const ggs = { template: `
                <form-cargar-jueguitos ></form-cargar-jueguitos>`, 
				name:'MisGGs' 
}
const wishlist = {template: `
                    <jueguitos-pendientes></jueguitos-pendientes>`
					, name:"Wishlist"
}
const decididor = {template:`
                    <decide-porvos></decide-porvos>`
          , name: "decididor"
}

const routes = [
  { path: '/', component: ggs },
  { path: '/wishlist', component: wishlist },
  { path: '/decididor', component: decididor },
  { path: '*', redirect: '/' },
]

const router = new VueRouter({
  routes
})

const app = new Vue({
	el:"#app",
  	router,

})