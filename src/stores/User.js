import {writable} from "svelte/store";


function dameUserStore() {
    const {subscribe , set } = writable(null)

    function setUserStore(user) {
        set(user);
    }

    return {
        subscribe,
        setUserStore
    }
}

export const operadorStore = dameUserStore();