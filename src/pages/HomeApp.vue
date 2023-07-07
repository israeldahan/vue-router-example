<template>
    <div>
        <h1>Vue Router</h1>
        <p>Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze. Features include:</p>
        <ul>
            <li>Nested route/view mapping</li>
            <li>Modular, component-based router configuration</li>
            <li>Route params, query, wildcards</li>
            <li>View transition effects powered by Vue.js' transition system</li>
            <li>Fine-grained navigation control</li>
            <li>Links with automatic active CSS classes</li>
            <li>HTML5 history mode or hash mode, with auto-fallback in IE9</li>
            <li>Customizable Scroll Behavior</li>
        </ul>
        <p>Check out <router-link to="/HelloWorld">HelloWorld</router-link> for more details on how to use it.</p>
    </div>
</template>

<script>
    export default {
        name: 'HomeApp'
    }
</script>
