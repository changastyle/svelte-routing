<script>
	import {Router , Link , Route} from "svelte-routing";
	import Home from "./vistas/Home.svelte";
	import Perfil from "./vistas/Perfil.svelte";
	import About from "./vistas/About.svelte";
	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>

	<Router>
		<nav>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/perfil">Perfil</Link>
		</nav>

		<Route path="/">
			<Home></Home>
		</Route>
		<Route path="/about">
			<About></About>
		</Route>
		<Route path="/perfil">
			<Perfil></Perfil>
		</Route>
	</Router>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
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