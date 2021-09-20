<template>
    <h1><slot /></h1>
</template>

<script>
export default {
    name: "ProjectHeader",
};
</script>

<style scoped>
@font-face {
    font-family: HemiHead;
    src: url(../../../assets/fonts/HemiHead.ttf);
}

h1 {
    margin: 0;
    font-family: HemiHead;
    font-style: italic;
    font-weight: bold;
    font-size: 3.3vw;
    color: #70d6ff;
    text-shadow: 4px 4px 4px #050505;
}
</style>