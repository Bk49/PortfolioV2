<template>
    <router-link class="nav" v-bind:to="directory">{{ title }}</router-link>
</template>

<script>
export default {
    name: "ContactMe",
    props: {
        title: String,
        directory: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
    font-family: Nasalization;
    src: url(../../../../assets/fonts/Nasalization.otf);
}

.nav {
    text-decoration: none;
    font-size: 1.2em;
    float: right;
    padding: 0.5rem;
    font-family: Nasalization;
    margin-top: 0.2rem;
    padding-bottom: 0.6rem;
    padding-right: 1.5%;
    padding-left: 1.5%;
    color: #004fff;
}

.router-link-active {
    color: #31afd4;
    border-bottom: solid 4px #31afd4;
}
</style>
