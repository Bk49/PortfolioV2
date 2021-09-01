<template>
    <div class="hello">
        <nav-bar />
    </div>
</template>

<script>
import NavBar from "../ui/common/navigations/NavBar.vue";
import CustomFooter from "../ui/common/footer/Footer.vue";
import NeonHeader from "../ui/common/text/header_titles/NeonHeader.vue";

export default {
    components: { NavBar, CustomFooter, NeonHeader },
    name: "Home",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
