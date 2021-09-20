import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/page/Home.vue";
import Project from "@/components/page/Project.vue";
import ContactMe from "@/components/page/ContactMe.vue";
import DiscordBot from "@/components/page/projects/DiscordBot.vue";
import FoodSavior from "@/components/page/projects/FoodSavior.vue";
import InitialD from "@/components/page/projects/InitialD.vue";
import Jibaboom from "@/components/page/projects/Jibaboom.vue";
import OldPortfolio from "@/components/page/projects/OldPortfolio.vue";
import Shopmania from "@/components/page/projects/Shopmania.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/project",
        name: "Project",
        component: Project,
    },
    {
        path: "/contact-me",
        name: "Contact Me",
        component: ContactMe,
    },
    {
        path: "/project/discordbot",
        name: "Discord Bot",
        component: DiscordBot,
    },
    {
        path: "/project/foodsavior",
        name: "Food Savior",
        component: FoodSavior,
    },
    {
        path: "/project/initiald",
        name: "Initial D",
        component: InitialD,
    },
    {
        path: "/project/jibaboom",
        name: "Jibaboom",
        component: Jibaboom,
    },
    {
        path: "/project/oldportfolio",
        name: "Old Portfolio",
        component: OldPortfolio,
    },
    {
        path: "/project/shopmania",
        name: "Shopmania",
        component: Shopmania,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
