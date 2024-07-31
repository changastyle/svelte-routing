<script>
import {operadorStore} from "../stores/User.js";
import {Link} from "svelte-routing";
</script>

<div class="cont-barra-menu">

    <nav>
        {#if $operadorStore !== null}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/perfil">Perfil</Link>
        {:else }
            <!--				<Link to="/login">Login</Link>-->
        {/if}
    </nav>
</div>