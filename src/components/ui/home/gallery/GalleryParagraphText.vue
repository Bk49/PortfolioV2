<template>
    <p><slot /></p>
</template>

<script>
export default {
    name: "GalleryParagraphText",
};
</script>

<style scoped>
@font-face {
    font-family: HemiHead;
    src: url(../../../../assets/fonts/HemiHead.ttf);
}

p {
    font-family: HemiHead;
    color: #f4f4ed;
    text-shadow: 2px 2px 20px black;
    font-style: italic;
    font-weight: 700;
    font-size: 1.9vw;
}
</style>