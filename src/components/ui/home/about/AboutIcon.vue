<template>
    <img :src="require(`@/assets/icons/${file}`)" />
</template>

<script>
export default {
    name: "AboutIcon",
    props: {
        file: String,
    },
};
</script>

<style scoped>
img {
    filter: invert(99%) sepia(3%) saturate(556%) hue-rotate(192deg)
        brightness(115%) contrast(88%);
    vertical-align: middle;
    width: 100%;
}
</style>
