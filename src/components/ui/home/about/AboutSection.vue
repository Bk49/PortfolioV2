<template>
    <div class="section">
        <div :class="float === 'right' ? 'icon icon-right' : 'icon'">
            <about-icon :file="file" />
        </div>
        <paragraph-text>
            <slot />
        </paragraph-text>
    </div>
</template>

<script>
import AboutIcon from "./AboutIcon.vue";
import ParagraphText from "@/components/ui/common/text/paragraph/ParagraphText.vue"
export default {
    components: { AboutIcon, ParagraphText },
    name: "AboutSection",
    props: {
        file: String,
        float: String,
    },
};
</script>

<style scoped>
.icon {
    float: left;
    width: 19%;
    margin: 0 5% 0 0; 
}

.icon-right {
    float: right;
    margin: 0 0 0 5%;
}

div.section {
    margin-bottom: 5rem;
}
</style>