<template>
    <div
        class="thumbnail"
        :style="'background: linear-gradient(to bottom right, ' + color + ')'"
    >
        <img :src="require(`@/assets/images/${source}`)" />
    </div>
</template>

<script>
export default {
    name: "ProjectThumbnail",
    props: {
        source: String,
        color: String,
    },
};
</script>

<style scoped>
.thumbnail {
    background-color: white;
    height: 38vmin;
    width: 38vmin;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 6vmin;
}

img {
    height: 93%;
    width: 93%;
    object-fit: cover;
}
</style>