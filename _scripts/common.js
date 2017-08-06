window.Event = new Vue();

const About = { template: `<div class="about">
	<h1>Hello there!</h1>
		<h2>There is some info</h2>
			<p>
				<slot></slot>
			</p>
	</div>` 
}
const Blog = { template: `<div>
	<h1>Hello there!</h1>
	</div>` 
}
const routes = [
	{ path: '/about-us', component: About },
	{ path: '/blog', component: Blog }
]


const router = new VueRouter({
	routes // сокращение от `routes: routes`
})

Vue.component('app-post',{
	data(){
	return { email: '' }
	},
	template: `
	<form class="button-subscribe" id="app">
	<input type="email" placeholder="Your Email Adress" v-model="email">
	<button class="myButton" @click="subForm">Subscribe</button>
	</form>
`,
	methods: {
		subForm(){
			Event.$emit('clicked', this.email);
		}
	}
});

// const app = new Vue({
// 	router
// }).$mount('#app')

new Vue({
	el: '#wrapper',
	router,
	data: {
		show: false,
		solMenu: false
	},
	created(){
		Event.$on('clicked', function(email) {
			axios.post('/users', {
				userMail: this.email
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
		})
	}
});


