<template>
    <input
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :name="name"
        :placeholder="placeholder"
        :class="long ? 'long' : noPad ? 'no-pad' : null"
    />
</template>

<script>
export default {
    name: "ContactInput",
    props: {
        name: String,
        placeholder: String,
        long: Boolean,
        noPad: Boolean,
        modelValue: String,
    },
    emits: ["update:modelValue"],
};
</script>

<style scoped>
@font-face {
    font-family: HemiHead;
    src: url(../../../assets/fonts/HemiHead.ttf);
}

input {
    font-family: HemiHead;
    background: #f4f3ed;
    border: 2px solid #31afd4;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px 5px #7289da, inset 0px 0px 10px 5px #70d6ff;
    border-radius: 5px;
    width: 47.5%;
    padding: 1vh;
    margin-right: 5%;
    font-size: 4vh;
}

input::-webkit-input-placeholder {
    opacity: 0.3;
    color: #050505;
}

.no-pad {
    margin-right: 0;
}

.long {
    width: 100%;
    margin-top: 5vh;
}
</style>