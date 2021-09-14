<template>
    <div class="hello">
        <nav-bar />
        <neon-header class="header" title="Contact Me Form" />
        <form id="form" ref="form">
            <contact-input v-model="name" name="name" placeholder="Name" />
            <contact-input
                v-model="email"
                name="email"
                placeholder="Email"
                :noPad="true"
            />
            <contact-input
                v-model="subject"
                name="subject"
                placeholder="Subject"
                :long="true"
            />
            <contact-text-area v-model="message" name="message" />
            <contact-submit-button @click.prevent="submit" />
        </form>
        <custom-footer />
    </div>
</template>

<script>
import NavBar from "../ui/common/navigations/NavBar.vue";
import CustomFooter from "../ui/common/footer/Footer.vue";
import NeonHeader from "../ui/common/text/header_titles/NeonHeader.vue";
import ContactInput from "../ui/contact/ContactInput.vue";
import ContactTextArea from "../ui/contact/ContactTextArea.vue";
import ContactSubmitButton from "../ui/contact/ContactSubmitButton.vue";
import EmailJS from "emailjs-com";

export default {
    name: "ContactMe",
    components: {
        NavBar,
        CustomFooter,
        NeonHeader,
        ContactInput,
        ContactTextArea,
        ContactSubmitButton,
    },
    props: {},
    data: () => ({
        name: "",
        email: "",
        subject: "",
        message: "",
    }),
    methods: {
        submit() {
            const name = this.$data.name;
            const email = this.$data.email;
            const message = this.$data.message;
            if (!name || !email || !message) {
                alert("Please check as there are empty fields!");
                return;
            }
            const re =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(String(email).toLowerCase())) {
                try {
                    EmailJS.sendForm(
                        "service_z9wuq9j",
                        "template_d5tbrth",
                        "#form",
                        "user_KLtTTSiu6P1fsQZNcGVgN",
                        {
                            name: this.$data.name,
                            email: this.$data.email,
                            message: this.$data.message,
                        }
                    );
                } catch (e) {
                    alert("There is an error sending the email");
                }
                alert("Email has been sent!");
            } else {
                alert("Email is not valid!")
            }
        },
    },
};
</script>

<style scoped>
.header {
    margin-top: 3rem;
    margin-bottom: 1rem;
}

p {
    color: white;
}

form {
    margin: 0 5% 2rem 5%;
    background: linear-gradient(180deg, #000000 0%, #434343 100%);
    border-radius: 10px;
    padding: 5vh 2.5% 5vh 2.5%;
}
</style>
