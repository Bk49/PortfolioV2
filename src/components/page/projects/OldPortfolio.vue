<template>
    <project-details
        header="Old Portfolio"
        baseImg="old_portfolio/old_portfolio_canvas.png"
    >
        My old portfolio website was the first-ever portfolio I have created. It
        includes a typewriter function, gallery, and cool hover effects on the
        projects page section. It was created using vanilla HTML, CSS, and
        Javascript only. Due to this, I have decided to cease continuity on that
        website, since I would love to use front-end frameworks to make
        development much more rapid.
        <br /><br />
        Thus, brings to the existence of this website that uses VueJS for front
        end component building with all-new styling as well as shortened content
        with less text
        <br /><br />
        <a href="https://bk49.github.io/Portfolio/public/home.html"
            >> Link to Website
        </a>
        <br />
        <a href="https://github.com/Bk49/Portfolio"
            >> Link to Github Repository</a
        >
    </project-details>
</template>

<script>
import ProjectDetails from "@/components/ui/project_details/ProjectDetails.vue";

export default {
    name: "OldPortfolio",
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