<template>
    <project-details
        header="Discord Bot"
        baseImg="discord_bot/discord_bot_large_canvas.jpg"
        ssImg="discord_bot/discord_bot_canvas.png"
        color="#8E2DE2, #4a00e0"
    >
        DeviousComet465 (currently a temporary name) was a discord bot that I’ve
        created after creating 2 similar projects hosted on Glitch.
        Unfortunately, due to a change of policy of glitch, the project hosted
        there can no longer stay online and hosted 24/7 so I decided to move the
        project over to be used on Repl.it which does not disable third-party
        pinging applications such as Uptime Robot to ping the server every few
        seconds to keep the bot alive. The bot is currently still under
        development and contains a few very basic features.
        <br /><br />
        Some of the main ones are such as avatar command, help command.
        Previously I will also include Opus to make it able to play music, but
        due to restrictions with the use of canvas, I’ve removed it. Currently
        trying to integrate a back end to the Discord bot and also include a
        blackjack game with canvas to render the results.
        <br /><br />
        <a href="https://github.com/Bk49/DiscordBotTest"
            >> Link to Github repository</a
        >
    </project-details>
</template>

<script>
import ProjectDetails from "@/components/ui/project_details/ProjectDetails.vue";

export default {
    name: "DiscordBot",
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