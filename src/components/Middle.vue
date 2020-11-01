<template>
<div>
    <b-container fluid>
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
