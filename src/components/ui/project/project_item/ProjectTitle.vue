<template>
    <div>
        <h1 :style="style"><slot></slot></h1>
    </div>
</template>

<script>
export default {
    name: "ProjectTitle",
    props: {
        color: String,
        shadowColor: String,
    },
    computed: {
        style() {
            return (
                "color: #" +
                this.color +
                ";text-shadow: -15px -15px 70px #000000, 15px 15px 70px #000000, 5px 5px 50px #" +
                this.shadowColor +
                ", -5px -5px 50px #" +
                this.shadowColor +
                ";"
            );
        },
    },
};
</script>

<style scoped>
@font-face {
    font-family: MKXTitle;
    src: url(../../../../assets/fonts/MKXTitle.ttf);
}

div {
    width: 100%;
    height: 100%;
    text-align: center;
    display: table;
    position: absolute;
}

h1 {
    font-family: MKXTitle;
    font-size: 5vw;
    margin: 0;
    display: table-cell;
    vertical-align: middle;
    font-weight: normal;
}
</style>