<template>
    <p>
        <slot />
    </p>
</template>

<script>
export default {};
</script>

<style scoped>
@font-face {
    font-family: TitilliumWeb;
    src: url(../../../../../assets/fonts/TitilliumWeb-Regular.ttf);
}

p {
    font-family: TitilliumWeb;
    font-weight: 400;
    color: #f0f0f0;
}
</style>