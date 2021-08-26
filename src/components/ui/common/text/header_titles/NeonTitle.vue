<template>
    <span>{{ title }}</span>
</template>

<script>
export default {
    name: "NeonTitle",
    props: {
        title: String,
    },
};
</script>

<style scoped>
@font-face {
    font-family: NFSFont;
    src: url(../../../../../assets/fonts/NFS-Regular.ttf);
}

span {
    font-family: NFSFont;
    color: #70d6ff;
    font-size: 1.5rem;
    text-shadow: 0px 0px 15px #5a06e2;
}
</style>