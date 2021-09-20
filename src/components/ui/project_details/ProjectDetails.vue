<template>
    <nav-bar :active="true" />
    <div class="body">
        <project-header>{{ header }}</project-header>

        <img class="topic-img" :src="require(`@/assets/images/${baseImg}`)" />

        <div class="intro-section">
            <project-sub-header>Introduction</project-sub-header>
            <p class="para-text">
                <slot />
            </p>
        </div>

        <div v-if="ssImg" class="ss-section">
            <project-sub-header>Screenshots</project-sub-header>
            <div :style="'background: linear-gradient(to bottom right, ' + color + ')'" class="img-border">
                <img
                    class="ss-img"
                    :src="require(`@/assets/images/${ssImg}`)"
                />
            </div>
        </div>
    </div>
    <custom-footer />
</template>

<script>
import ProjectHeader from "./ProjectHeader.vue";
import ProjectSubHeader from "./ProjectSubHeader.vue";
import NavBar from "@/components/ui/common/navigations/NavBar.vue";
import CustomFooter from "@/components/ui/common/footer/Footer.vue";

export default {
    name: "ProjectDetails",
    props: {
        header: String,
        baseImg: String,
        ssImg: String,
        color:String,
    },
    components: { ProjectHeader, ProjectSubHeader, NavBar, CustomFooter },
};
</script>

<style scoped>
@font-face {
    font-family: TitilliumWeb;
    src: url(../../../assets/fonts/TitilliumWeb-Regular.ttf);
}

.body {
    padding: 2% 2.7%;
}

.topic-img {
    border-radius: 10px;
    width: 100%;
    margin: 3% 0;
}

p {
    font-family: TitilliumWeb;
    color: #f4f4ed;
}

.ss-section {
    margin-top: 3%;
}

.img-border {
    border-radius: 10px;
    align-content: center;
}

.ss-img {
    border-radius: 10px;
    width: 98.5%;
    object-fit: contain;
    margin: 0.75%;
}
</style>