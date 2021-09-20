<template>
    <project-details
        header="Food Savior"
        baseImg="food_savior/food_savior_splash.png"
        ssImg="food_savior/food_savior_canvas.png"
        color="#F12711, #F5AF19"
    >
        Food Saviour is a 3 person prototyping project. It is for on of our
        academic module that focuses on creating user interfaces that fit the
        user requirements and is easy to navigate and use. As we all know, if we
        create complex interfaces that users cannot navigate or contains broken
        navigation, the user simply cannot use them. Therefore, Food Saviour is
        a project that aims to provide users with an easy-to-use interface as
        well as serves the purpose of the application that fits the user's
        needs.
        <br /><br />
        The prototype for Food Savior is created using the Marvel app. Food
        Savior initially started as a mobile app prototype as we will be
        required to deal with the small screen that mobile devices provide to
        fully utilize the space in it. The final prototype changes the
        application to be tablet-based to cater to more features, functions, and
        as well as efficient usage of the spaces that the tablet provides.
    </project-details>
</template>

<script>
import ProjectDetails from "@/components/ui/project_details/ProjectDetails.vue";

export default {
    name: "FoodSavior",
    components: { ProjectDetails },
};
</script>