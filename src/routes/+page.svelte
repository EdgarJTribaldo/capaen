<script>
    import Header from "../components/Header.svelte";
    import Form from "../components/Form.svelte";
    import Bubble from "../components/Bubble.svelte";
    import "../App.css";
    import Hero from "../components/Hero.svelte";
    import Spinner from "../components/Spinner.svelte";
    import { loader } from '../components/loader.js';
    import { writable  }from 'svelte/store';


    let name = 'world';
	let loading = writable(true);

    // Simular carga de contenido con un timeout
    setTimeout(() => {
        loading.set(false); // Indicar que la carga ha terminado
    }, 3000); // Simular una carga de 3 segundos
</script>
<div use:loader={loading}>

<Hero></Hero>
</div>

<!-- <Bubble /> -->
