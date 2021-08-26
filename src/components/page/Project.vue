<template>
    <div class="hello">
        <nav-bar />
    </div>
</template>

<script>
import NavBar from "../ui/common/navigations/NavBar.vue";

export default {
    name: "Project",
    components: { NavBar },
    props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>