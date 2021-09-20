<template>
    <project-details
        header="Discord Bot"
        baseImg="jibaboom_astronomia/jibaboom_astronomia_canvas.png"
    >
        Jibaboom Astronomia is a web and mobile app project that belongs to a
        pair of programming works between me and Khye Lerk for a school
        assignment. And the same as the Shopmania project, I am mainly working
        on the back end. The front end was coded using Ionic React, the back end
        was using NodeJS. The main challenge of this project as it requires a
        back-end algorithm to calculate the music festivals one should attend
        that will end up with the highest popularity without clashing of time.
        This algorithm is more commonly known as the weighted activity selection
        problem or the weighted job scheduling problem.
        <br /><br />
        <a href="https://khyelerk.github.io/Astronomia-Advance/DataViewer"
            >> Link to Website</a
        >
    </project-details>
</template>

<script>
import ProjectDetails from "@/components/ui/project_details/ProjectDetails.vue";

export default {
    name: "Jibaboom",
    components: { ProjectDetails },
};
</script>

<style scoped>
a {
    color: #70d6ff;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>