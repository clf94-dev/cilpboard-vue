<template>
<div>
    <b-container fluid class="middle-section">
        <div class="intro-middle">
            <h2>Keep track of your snippets</h2>
            <p>Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</p>
        </div>
        <b-row class="row-middle">
            <b-col xs="12" sm="6" md="6" lg='6'>
                <img :src="desktopImg" alt="computer">
            </b-col>
            <b-col xs="12" sm="6" md="6" lg='6'>

                <h3>hola</h3>
                <p>texto</p>

            </b-col>
        </b-row>
        <div class="intro-middle">
            <h2>Access Clipboard anywhere</h2>
            <p>Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>
            <img :src="devicesImg" alt="devices">
        </div>
    </b-container>
</div>
</template>

<script>
export default {
    name: 'Middle',
    data() {
        return {
            desktopImg: require("@/assets/images/image-computer.png"),
            devicesImg: require("@/assets/images/image-devices.png")
        }
    }
}
</script>

<style>
.middle-section {
    padding: 5% 7%;
}

.middle-section .intro-middle {
    text-align: center;
}

.middle-section .intro-middle h2 {
    font-size: 30px;
}

.middle-section .intro-middle p {
    font-size: 16px;
    color: #9fabb2;
    margin-bottom: 60px;
}

@media screen and (min-width: 756px) {
    .middle-section .intro-middle p {
        padding: 0 17%;
    }
}

.middle-section .intro-middle img {
    width: 100%;
}

@media screen and (min-width: 756px) {
    .middle-section .intro-middle img {
        width: 70%;
    }
}

@media screen and (min-width: 756px) {
    .middle-section .row-middle {
        margin-bottom: 60px;
    }
}

.middle-section .row-middle .img-col img {
    width: 100%;
}

@media screen and (min-width: 756px) {
    .middle-section .row-middle .img-col img {
        position: relative;
        left: -17%;
    }
}

.middle-section .row-middle .text-col {
    padding: 2%;
}

@media screen and (max-width: 756px) {
    .middle-section .row-middle .text-col {
        text-align: center;
        margin-bottom: 120px;
    }
}

.middle-section .row-middle .text-col .info-card h3 {
    font-size: 22px;
    margin-bottom: 5px;
}

.middle-section .row-middle .text-col .info-card p {
    font-size: 16px;
    color: #9fabb2;
    margin-bottom: 20px;
}

@media screen and (min-width: 756px) {
    .middle-section .row-middle .text-col .info-card p {
        padding-right: 18%;
    }
}
</style>
