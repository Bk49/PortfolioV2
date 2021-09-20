<template>
    <div class="container">
        <neon-title class="title" title="Eric's Portfolio" />
        <nav-item title="Contact Me" directory="/contact-me" />
        <nav-item :active="active" title="Projects" directory="/project" />
        <nav-item title="Home" directory="/" />
    </div>
</template>

<script>
import NavItem from "./NavItem.vue";
import NeonTitle from "../text/header_titles/NeonTitle.vue";
export default {
    components: { NavItem, NeonTitle },
    name: "NavBar",
    props: {
        active: Boolean,
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
