<template>
    <a :href="href">
        <img
            :class="className ? 'icon ' + className : 'icon'"
            :src="require(`@/assets/icons/${file}`)"
        />
    </a>
</template>

<script>
export default {
    name: "FooterNavIcon",
    props: {
        className: String,
        file: String,
        href: String,
    },
};
</script>

<style scoped>
.icon {
    padding: 1.2rem;
    padding-bottom: 0.6rem;
    height: 3rem;
    width: auto;
    opacity: 0.6;
    transition-duration: 0.3s;
}

.icon:hover {
    opacity: 1;
}

.discord {
    filter: invert(58%) sepia(36%) saturate(678%) hue-rotate(191deg)
        brightness(88%) contrast(93%);
}

.facebook {
    filter: invert(34%) sepia(90%) saturate(2042%) hue-rotate(201deg)
        brightness(95%) contrast(100%);
}

.linkedin {
    filter: invert(27%) sepia(95%) saturate(1556%) hue-rotate(179deg)
        brightness(92%) contrast(101%);
}

.telegram {
    filter: invert(34%) sepia(79%) saturate(1312%) hue-rotate(172deg)
        brightness(97%) contrast(104%);
}
</style>