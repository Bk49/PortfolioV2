<template>
    <h1>{{ title }}</h1>
</template>

<script>
export default {
    name: "NeonHeader",
    props: {
        title: String,
    },
};
</script>

<style scoped>
@font-face {
    font-family: HemiHead;
    src: url(../../../../../assets/fonts/HemiHead.ttf);
}

h1 {
    margin: 0;
    text-align: center;
    font-family: HemiHead;
    color: #70d6ff;
    font-size: 3.2rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 40px #f7aef8;
}
</style>