<script>

    import {operadorStore} from "../stores/User.js";
    import {navigate} from "svelte-routing";

    let correo ="nico.grossi4@gmail.com";
    let pass = "";

    function procesarFormulario()
    {
        correo = correo.trim();
        pass= pass.trim();

        if(correo != null && pass != null)
        {
            console.log("PROCESANDO FORMULARIO LOGIN : " + correo);
            operadorStore.setUserStore({correo,pass});
            navigate('/perfil',{replace:true});
        }
    }

</script>
<div>
    <h1>Login</h1>
    <h3>Usuario Comun:{JSON.stringify(operadorStore)}</h3>
    <form on:submit|preventDefault={procesarFormulario}>
        <input type="text" placeholder="Correo.." bind:value={correo}>
        <input type="text" placeholder="Clave.." bind:value={pass}>
        <button type="submit">Acceder</button>
    </form>
</div>