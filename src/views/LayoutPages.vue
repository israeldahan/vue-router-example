<template>
    <div class="menu">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/contact">Contact</router-link>
    </div>
    <div class="container">
        <router-view />
    </div>
    <div class="footer">
        <p>Footer</p>
    </div>
</template>