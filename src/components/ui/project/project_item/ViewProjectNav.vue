<template>
    <div class="link">
        <a :href="link">View <slot /> ></a>
    </div>
</template>

<script>
export default {
    name: "ViewProjectNav",
    props: {
        link: String,
    },
};
</script>

<style scoped>
@font-face {
    font-family: Nasalization;
    src: url(../../../../assets/fonts/Nasalization.otf);
}

a {
    font-family: Nasalization;
    font-size: 3vh;
    color: #f4f4ed;
    text-decoration: none;
    margin-right: 60vh;
    float: right;
    color: #0671B7;
}

a:hover {
    text-decoration: underline;
}

.link {
    width: 100%;
    max-height: 3vh;
    margin-bottom: 2%;
}
</style>