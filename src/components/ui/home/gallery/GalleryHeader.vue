<template>
    <h1><slot /></h1>
</template>

<script>
export default {
    name: "GalleryHeader",
};
</script>

<style scoped>
@font-face {
    font-family: HemiHead;
    src: url(../../../../assets/fonts/HemiHead.ttf);
}

h1 {
    margin: 0;
    font-family: HemiHead;
    font-weight: 700;
    font-style: italic;
    font-size: 3.3vw;
    color: #F4F4ED;
    text-shadow: 2px 2px 20px black;
}
</style>