<template>
    <div class="hello">
        <nav-bar />
        <project-item
            image="discord_bot/discord_bot_large_canvas.jpg"
            thumbnail="discord_bot/discord_bot_icon.png"
            title="Discord Bot Project"
            color="FFC0CB"
            shadowColor="800080"
            gradient="#FFC0CB, #800080"
            link="/project/discordbot"
            linkText="Discord Bot Project"
        >
            A discord bot with basic bot commands such as help and avatar.
            <br /><br />
            Technologies : NodeJS, Discord.js , MySQL
        </project-item>
        <project-item
            image="shopmania/shopmania_canvas.png"
            thumbnail="shopmania/shopmania_icon.png"
            title="Shopmania Dynamic Web Project"
            color="26D0CE"
            shadowColor="1A2980"
            gradient="#26D0CE, #1A2980"
            link="/project/shopmania"
            linkText="Shopmania Project"
        >
            A shopping application that comes with a cart feature and management
            features for admin users
            <br /><br />
            Technologies : Java, J2EE, MySQL
        </project-item>
        <project-item
            image="food_savior/food_savior_splash.png"
            thumbnail="food_savior/food_savior_icon.png"
            title="Food Savior Prototype"
            color="F7B733"
            shadowColor="FC4A1A"
            gradient="#F7B733, #FC4A1A"
            link="/project/foodsavior"
            linkText="Food Savior Project"
        >
            A mobile and tablet prototype application that aims to provide a
            better and more efficient process in the event of food donation
            drives
            <br /><br />
            Technologies : MarvelApp
        </project-item>
        <project-item
            image="initial_d/initial_d_bg.jpg"
            thumbnail="initial_d/initial_d_icon.jpg"
            title="Initial D Website"
            color="FCEABB"
            shadowColor="F8B500"
            gradient="#FCEABB, #F8B500"
            link="/project/initiald"
            linkText="Initial D Project"
        >
            First-ever website created by me and hosted on Neocities
            <br /><br />
            Technologies : HTML, CSS, Neocities
        </project-item>
        <project-item
            image="old_portfolio/old_portfolio_canvas.png"
            thumbnail="old_portfolio/old_portfolio_icon.png"
            title="Old Portfolio Website"
            color="D3CBB8"
            shadowColor="6D6027"
            gradient="#D3CBB8, #6D6027"
            link="/oldportfolio"
            linkText="Old Portfolio Project"
        >
            First-ever personal portfolio created by me and hosted on GitHub
            pages
            <br /><br />
            Technologies : HTML, CSS, NodeJS, Github Pages
        </project-item>
        <project-item
            image="jibaboom_astronomia/jibaboom_astronomia_bg.png"
            thumbnail="jibaboom_astronomia/jibaboom_astronomia_canvas.png"
            title="Jibaboom Astronomia Hybrid Project"
            color="6DD5FA"
            shadowColor="2980B9"
            gradient="#6DD5FA, #2980B9"
            link="/project/jibaboom"
            linkText="Jibaboom Astronomia Project"
        >
            A dynamic hybrid web project aiming to solve the weighted activity
            scheduling problem with data able to be stored
            <br /><br />
            Technologies : Github Pages, Ionic, React, NodeJS, MySQL, Heroku
        </project-item>
        <custom-footer />
    </div>
</template>

<script>
import NavBar from "../ui/common/navigations/NavBar.vue";
import CustomFooter from "../ui/common/footer/Footer.vue";
import ProjectItem from "../ui/project/ProjectItem.vue";

export default {
    name: "Project",
    components: { NavBar, CustomFooter, ProjectItem },
    props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>