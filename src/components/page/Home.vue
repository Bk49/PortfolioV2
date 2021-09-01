<template>
    <div class="hello">
        <nav-bar />
        <div class="about-section">
            <div class="about-header">
                <neon-header title="About Me" />
            </div>
            <div class="about-content">
                <about-section file="construction.svg">
                    Before I was in primary school, I have always enjoyed
                    playing with just toys and watch TV, video games haven’t
                    stepped into my life yet.
                    <br /><br />
                    However, when I was about 8, I own a PSP as a birthday
                    present which is the trend of that time since mobile phones
                    are still using buttons instead of the touchscreen which was
                    popularize much later on.
                    <br /><br />
                    That was my first exposure to electronic gadgets and which
                    was the turning point that motivates me to become a game
                    developer.
                </about-section>
                <about-section float="right" file="book.svg">
                    In order to pursue my dream, I have planned to study hard to
                    come from Malaysia to Singapore to further my studies in
                    college.
                    <br /><br />
                    During the process, I found out that I am more interested in
                    petrol cars but was certain that the field was not what I
                    wanted as a career since electronic cars are more
                    sustainable in the future and the field also has lesser
                    variables and new changes as compared to the world of
                    programming and computing which can drive me bored very
                    quickly.
                    <br /><br />
                    This event in turn brings me again to find and think about
                    what I seeking in the future as a career and full-time job.
                </about-section>
                <about-section file="light-bulb.svg">
                    When I was in secondary during my last year, I’ve gotten to
                    try out a small code sandbox when I was in school. I’ve
                    managed to code out the behaviors of certain characters and
                    as such, it triggers my passion again to go for game
                    development.
                    <br /><br />
                    That sets the path that I am certain, I wanted to be in the
                    same field in programming and thus, I’ve select my path to
                    go for Diploma in Information Technolgy in Singapore
                    Polytechnic specializing in Software Engineer path studying
                    about Java Programming.
                </about-section>
                <about-section float="right" file="shuffle.svg">
                    During my 2 years in college, I found out that I have a much
                    stronger interest in programming on web development and
                    mobile development and wanting to be able to lead a team of
                    programmers to create and innovate new web and mobile
                    applications.
                    <br /><br />
                    As such, currently, I am studying hard and working my way
                    towards university and dream to become a lead software
                    developer in the future
                </about-section>
            </div>
        </div>
        <custom-footer />
    </div>
</template>

<script>
import NavBar from "../ui/common/navigations/NavBar.vue";
import CustomFooter from "../ui/common/footer/Footer.vue";
import NeonHeader from "../ui/common/text/header_titles/NeonHeader.vue";
import AboutSection from "@/components/ui/home/about/AboutSection.vue";

export default {
    components: { NavBar, CustomFooter, NeonHeader, AboutSection },
    name: "Home",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-header {
    padding-top: 5rem;
    padding-bottom: 5rem;
    border-bottom: 1px solid white;
}

.about-section {
    margin-left: 10%;
    margin-right: 10%;
}

.about-content {
    padding-top: 5rem;
}
</style>
