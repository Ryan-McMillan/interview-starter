<script>
    import Tailwind from "./Tailwind.svelte";
    // Warning: Add icons directly instead of "import {Add16}"
    //          or build times get SLOOOOOOOOWWWWWWW
    import Add16 from "carbon-icons-svelte/lib/Add16";
    import axios from "axios";
    export let name;
</script> 

<Tailwind />
<main>
    <Add16 />
    <h1 class="font-sans">Hello Test {name}! [sans]</h1>
    <h1 class="font-serif">Hello {name}! [serif]</h1>
    <h1 class="font-mono">Hello {name}! [mono]</h1>
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