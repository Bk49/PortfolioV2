<template>
    <textarea
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :name="name"
        placeholder="Enter your message here >_"
    ></textarea>
</template>

<script>
export default {
    name: "ContactTextArea",
    props: {
        name: String,
        modelValue: String,
    },
    emits: ["update:modelValue"]
};
</script>

<style scoped>
@font-face {
    font-family: HemiHead;
    src: url(../../../assets/fonts/HemiHead.ttf);
}

textarea {
    font-family: HemiHead;
    background: #f4f4ed;
    border: 2px solid #31afd4;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px 5px #7289da, inset 0px 0px 10px 5px #70d6ff;
    border-radius: 5px;
    margin-top: 5vh;
    width: 100%;
    height: 30vh;
    font-size: 4vh;
    padding: 1vh;
}

textarea::-webkit-input-placeholder {
    opacity: 0.3;
    color: #050505;
}
</style>