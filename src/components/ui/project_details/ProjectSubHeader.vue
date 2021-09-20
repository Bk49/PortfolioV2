<template>
    <h1><slot /></h1>
</template>

<script>
export default {
    name: "ProjectSubHeader",
};
</script>

<style scoped>
@font-face {
    font-family: HemiHead;
    src: url(../../../assets/fonts/HemiHead.ttf);
}

h1 {
    font-family: HemiHead;
    font-style: italic;
    font-weight: bold;
    font-size: 3.2vw;
    color: #f4f4ed;
}
</style>