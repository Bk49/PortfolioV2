<template>
    <div class="hello">
        <nav-bar/>
        <custom-footer/>
    </div>
</template>

<script>
import NavBar from "../ui/common/navigations/NavBar.vue";
import CustomFooter from "../ui/common/footer/Footer.vue"

export default {
    name: "ContactMe",
    components: { NavBar, CustomFooter },
    props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
