<template>
    <div>
        <button>Send Message</button>
    </div>
</template>

<script>
export default {
    name: "ContactSubmitButton",
};
</script>

<style scoped>
@font-face {
    font-family: HemiHead;
    src: url(../../../assets/fonts/HemiHead.ttf);
}

div {
    width: 100%;
    text-align: center;
}

button {
    font-family: HemiHead;
    background: #31afd4;
    border: 2px solid #f4f4ed;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 1px #f7aef8;
    border-radius: 5px;
    color: #f4f4ed;
    padding: 1.5vh 7vw 1.5vh 7vw;
    font-size: 3.5vh;
    margin-top: 5vh
}
</style>