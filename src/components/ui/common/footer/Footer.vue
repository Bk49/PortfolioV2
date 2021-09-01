<template>
    <div class="footer">
        <neon-title title="Contact Me" />
        <br /><br />
        <footer-nav-icon
            className="discord"
            file="discord.svg"
            href="https://discordapp.com/users/411445280060211200"
        />
        <footer-nav-icon
            className="facebook"
            file="facebook.svg"
            href="https://www.facebook.com/eric.ng.5494/"
        />
        <footer-nav-icon
            className="linkedin"
            file="linkedin-logo.svg"
            href="https://www.linkedin.com/in/eric-ng-804209186/"
        />
        <footer-nav-icon
            className="telegram"
            file="telegram.svg"
            href="https://t.me/DeviousComet"
        />
        <br /><br />
        <div class="gmail">
            <a class="gmail" @click.stop.prevent="copy">
                <img class="gmail-icon" src="@/assets/icons/gmail.svg" />
                <span id="copy" class="gmail"> ericngyongwei@gmail.com</span>
            </a>
        </div>
        <br />
        <p class="text">
            Subject is not for copy. Please let me know in advance if you are
            using the design. Thanks to flaticon for the icons used in the
            webpage
        </p>
    </div>
</template>

<script>
import NeonTitle from "../text/header_titles/NeonTitle.vue";
import FooterNavIcon from "./FooterNavIcon.vue";

export default {
    name: "Footer",
    components: { NeonTitle, FooterNavIcon },
    methods: {
        copy: () => {
            const copyText = document.getElementById("copy");
            console.log(copyText.textContent);
            const textArea = document.createElement("textarea");
            textArea.value = copyText.textContent;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("Copy");
            textArea.remove();
            alert("Gmail has been copied to clipboard!");
        },
    },
};
</script>

<style scoped>
@font-face {
    font-family: Nasalization;
    src: url(../../../../assets/fonts/Nasalization.otf);
}

.footer {
    padding: 1rem;
    padding-top: 1.2rem;
    background: linear-gradient(to right, #000000, #434343);
}

div.gmail {
    padding-left: 1.5rem;
}

a.gmail {
    color: #70d6ff;
    font-family: Nasalization;
    font-size: 1.3rem;
}

a.gmail:hover {
    text-decoration: underline;
    cursor: pointer;
}

span.gmail {
    padding-left: 1rem;
}

.gmail-icon {
    vertical-align: middle;
    width: 1.4rem;
    filter: invert(73%) sepia(7%) saturate(3398%) hue-rotate(172deg)
        brightness(105%) contrast(104%);
}

.text {
    font-family: Nasalization;
    color: #7b61ff;
}
</style>
