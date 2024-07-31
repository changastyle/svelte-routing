<script>
	import {Router , Link , Route} from "svelte-routing";
	import Home from "./vistas/Home.svelte";
	import Perfil from "./vistas/Perfil.svelte";
	import About from "./vistas/About.svelte";
	import Login from "./vistas/Login.svelte";

	import {onMount} from "svelte";
	import {navigate} from "svelte-routing";
	import {operadorStore} from "./stores/User.js";
	import BarraMenu from "./componentes/BarraMenu.svelte";


	onMount(() => {
		if($operadorStore == null)
		{
			navigate('login',{replace:true})
		}
	})
</script>

<main>
	<Router>

		<!-- BARRA DE MENU: -->
		<BarraMenu/>

		<!-- EL CONTENIDO: -->
		<Route path="/">
			<Home/>
		</Route>
		<Route path="/about">
			<About/>
		</Route>
		<Route path="/perfil">
			<Perfil/>
		</Route>
		<Route path="/login">
			<Login/>
		</Route>
	</Router>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>