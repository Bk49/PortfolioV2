<template>
    <project-details header="Initial D" baseImg="initial_d/initial_d_canvas.jpg">
        Initial D Website is my first ever full front-end development project
        where I create a website purely using only HTML, CSS, and Javascript for
        a school assignment. As it was my first time doing it, the styling and
        all might seemed quite excessive with a lot of shadows and effects. My
        goal previously was going for a neon blue theme kind of webpage with my
        all-time favorite anime, Initial D.
        <br /><br />
        To fulfill the assignment requirements, the project was later
        incorporated with Bootstrap on certain styles. Sadly, I did not save
        that version when my computer got wiped out for all data as I have not
        learned GitHub yet. However, the hosted website in Neocities is still up
        until now.
        <br /><br />
        <a href="https://p1940211.neocities.org/">> Link to Website</a>
    </project-details>
</template>

<script>
import ProjectDetails from "@/components/ui/project_details/ProjectDetails.vue";

export default {
    name: "InitialD",
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