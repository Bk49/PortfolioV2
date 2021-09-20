<template>
    <project-details
        header="Shopmania"
        baseImg="shopmania/shopmania_canvas.png"
    >
        Shopmania was my first ever full stack web development project using
        J2EE and Bootstrap. It was a pair programming work with Khye Lerk with
        each of us do a set of features where I focus a lot more on the
        Controller and Model layer. The website came with various products and
        users, admin users can manage their products by adding more, deleting,
        and update them. Customers get to buy products in Shopmania and pay
        online using this website. There were also discount codes that can be
        used by customers to reduce their shopping cart item price. The discount
        codes are managed by admins.
        <br /><br />
        It was quite a rush when we are doing this project due to the number of
        pages to incorporate and also a lot of work for authentication, thus,
        there might be some bugs in its current state.
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
    name: "Shopmania",
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