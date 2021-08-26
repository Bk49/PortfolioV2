<template>
    <div class="container">
        <neon-title class="title" title="Eric's Portfolio" />
        <nav-item v-bind:active="active === 2" title="Contact Me" directory="/contact-me" />
        <nav-item v-bind:active="active === 1" title="Projects" directory="/project" />
        <nav-item v-bind:active="active === 0" title="Home" directory="/" />
    </div>
</template>

<script>
import NavItem from "./NavItem.vue";
import NeonTitle from "../text/header_titles/NeonTitle.vue";
export default {
    components: { NavItem, NeonTitle },
    name: "NavBar",
    props: {
        active: Number,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    background-color: #050505;
    width: 100%;
    height: 3rem;
}

.title {
    position: absolute;
    left: 1rem;
    top: 0.6rem;
}
</style>
