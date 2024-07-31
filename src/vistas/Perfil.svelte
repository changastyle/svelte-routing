<script>
    import {operadorStore} from "../stores/User.js";
    import {onMount} from "svelte";
    import {navigate} from "svelte-routing";


    onMount(() => {
        if($operadorStore == null)
        {
            navigate('login',{replace:true})
        }
    })
</script>
<h1>Perfil</h1>

{#if $operadorStore}
    <h1>EXISTE EL USUARIO: {JSON.stringify($operadorStore)}</h1>
{/if}

