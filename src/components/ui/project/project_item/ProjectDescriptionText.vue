<template>
    <div class="description">
        <span>
            <slot> </slot>
        </span>
    </div>
</template>

<script>
export default {
    name: "ProjectDescriptionText",
    props: {
        text: String,
        link: String,
    },
};
</script>

<style scoped>
@font-face {
    font-family: TitilliumWeb;
    src: url(../../../../assets/fonts/TitilliumWeb-Regular.ttf);
}
.description {
    color: #f4f4ed;
    display: table;
}

span {
    font-family: TitilliumWeb;
    font-weight: 400;
    font-size: 3vh;
    display: table-cell;
    vertical-align: middle;
}
</style>