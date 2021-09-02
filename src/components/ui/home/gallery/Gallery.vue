<template>
    <div class="gallery-container">
        <div class="gallery-nav">
            <button
                :class="slideIndex === 0 ? 'active' : ''"
                @click.prevent="currentSlide(0)"
            />
            <button
                :class="slideIndex === 1 ? 'active' : ''"
                @click.prevent="currentSlide(1)"
            />
            <button
                :class="slideIndex === 2 ? 'active' : ''"
                @click.prevent="currentSlide(2)"
            />
        </div>

        <div :class="slideIndex === 0 ? 'slide active' : 'slide'">
            <div class="text">
                <gallery-header>Hello, I am Eric</gallery-header>
                <gallery-paragraph-text class="gallery-text">
                    Welcome to my portfolio website!
                    <br />
                    Find out more about me <a href="#about">here</a>!
                </gallery-paragraph-text>
                <gallery-paragraph-text class="gallery-text">
                    Check out my previous projects over
                    <br />
                    under the <a href="/project">Projects</a> section
                </gallery-paragraph-text>
            </div>
            <img :src="require(`@/assets/images/gallery/gallery_bg_1.jpg`)" />
        </div>

        <div :class="slideIndex === 1 ? 'slide active' : 'slide'">
            <div class="overlay"></div>
            <div class="text">
                <gallery-header>Discord Bot Project</gallery-header>
                <gallery-paragraph-text class="gallery-text">
                    Check out my Discord Bot Project that
                    <br />
                    includes various basic features using
                    <br />
                    embeds!
                </gallery-paragraph-text>
                <gallery-paragraph-text class="gallery-text">
                    Click <a href="/project">here</a> to find out more!
                </gallery-paragraph-text>
            </div>
            <img
                :src="
                    require(`@/assets/images/discord_bot/discord_bot_large_canvas.jpg`)
                "
            />
        </div>

        <div :class="slideIndex === 2 ? 'slide active' : 'slide'">
            <div class="overlay"></div>
            <div class="text">
                <gallery-header>Shopmania Project</gallery-header>
                <gallery-paragraph-text class="gallery-text">
                    A shopping website with inventory
                    <br />
                    management, shopping carts and
                    <br />
                    discount codes!
                </gallery-paragraph-text>
                <gallery-paragraph-text class="gallery-text">
                    Click <a href="/project">here</a> to find out more!
                </gallery-paragraph-text>
            </div>
            <img
                :src="require(`@/assets/images/shopmania/shopmania_canvas.png`)"
            />
        </div>
    </div>
</template>

<script>
import GalleryHeader from "./GalleryHeader.vue";
import GalleryParagraphText from "./GalleryParagraphText.vue";

export default {
    name: "Gallery",
    components: { GalleryHeader, GalleryParagraphText },
    data: () => {
        return {
            slideIndex: 0,
        };
    },
    mounted() {
        this.slideIndex = 0;
        this.currentSlide = (n) => {
            this.slideIndex = n;
        };
    },
};
</script>

<style scoped>
* {
    box-sizing: border-box;
}

@keyframes slide-in {
    from {
        transform: translate(100%);
    }
    to {
        transform: translate(0%);
    }
}

img {
    width: 100%;
    max-height: 40vw;
    object-fit: cover;
    vertical-align: middle;
}

.overlay {
    width: 100%;
    height: 40vw;
    background-color: black;
    position: absolute;
    opacity: 0.5;
}

.gallery-container {
    width: 100%;
    height: 40vw;
    position: relative;
    background-color: black;
    margin: auto;
    overflow-x: hidden;
}

.slide {
    display: none;
    animation: 1.5s slide-in ease-out
}

div.active {
    display: block;
}

button {
    height: 15px;
    width: 15px;
    background-color: #31afd4;
    box-shadow: 0px 0px 15px 2px #000000;
    border-radius: 20px;
    margin-right: 1rem;
    border: none;
}

button.active {
    background-color: #f7aef8;
}

.gallery-nav {
    width: 100%;
    text-align: center;
    bottom: 0;
    display: inline-block;
    position: absolute;
    z-index: 1000;
    margin-bottom: 5vh;
}

.text {
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 5%;
    padding-left: 2%;
    box-shadow: inset 0px 0px 100px 20px #000000;
}

.gallery-text {
    padding-top: 4vw;
}

a {
    color: #f7aef8;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>