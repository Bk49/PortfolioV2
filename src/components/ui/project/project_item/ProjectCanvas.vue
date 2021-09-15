<template>
    <div class="container">
        <div
            class="image"
            :style="{
                'background-image':
                    'url(' + require('@/assets/images/' + source) + ')',
            }"
        >
        </div>
    </div>
</template>

<script>

export default {
    name: "ProjectCanvas",
    props: {
        source: String,
    },
};
</script>

<style scoped>
.container {
    background-color: black;
    position: absolute;
}

.image {
    width: 100%;
    height: 100%;
    box-shadow: inset 0px 0px 100px 20px rgba(0, 0, 0, 0.75);
    opacity: 0.5;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position-y: center;
}
</style>
