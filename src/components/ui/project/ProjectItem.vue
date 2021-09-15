<template>
    <div class="external">
        <div class="overlay">
            <project-thumbnail :source="thumbnail" :color="gradient" />
            <div class="embed">
                <project-description-text :link="link" :text="linkText">
                    <slot></slot>
                </project-description-text>
                <view-project-nav :link="link">{{ linkText }}</view-project-nav>
            </div>
        </div>
        <project-canvas :source="image" />
        <project-title :color="color" :shadowColor="shadowColor">{{
            title
        }}</project-title>
    </div>
</template>

<script>
import ProjectCanvas from "./project_item/ProjectCanvas.vue";
import ProjectDescriptionText from "./project_item/ProjectDescriptionText.vue";
import ProjectThumbnail from "./project_item/ProjectThumbnail.vue";
import ProjectTitle from "./project_item/ProjectTitle.vue";
import ViewProjectNav from "./project_item/ViewProjectNav.vue";

export default {
    name: "ProjectItem",
    components: {
        ProjectCanvas,
        ProjectTitle,
        ProjectThumbnail,
        ProjectDescriptionText,
        ViewProjectNav,
    },
    props: {
        image: String,
        thumbnail: String,
        title: String,
        color: String,
        shadowColor: String,
        gradient: String,
        link: String,
        linkText: String,
    },
};
</script>

<style scoped>
div {
    width: 100%;
    height: 50vh;
}

.external {
    position: relative;
}

.overlay {
    position: absolute;
    z-index: 1;
    background-color: #2b2b2b;
    left: 100%;
    overflow: hidden;
    width: 0;
    height: 100%;
    transition: 0.5s ease;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-content: flex-start;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.external:hover .overlay {
    width: 100%;
    left: 0;
}

.embed {
    display: inline-flex;
    flex-direction: column;
}
</style>
