<template>
<div>
    <v-container grid-list-md>
        <div class="intro-middle">
            <h2>Keep track of your snippets</h2>
            <p>Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</p>
        </div>
        <v-row class="row-middle">
            <v-col cols=12 sm6 md6 lg='6'>
                <img :src="desktopImg" alt="computer">
            </v-col>
            <v-col cols=12 sm6 md6 lg='6'>

                <h3>hola</h3>
                <p>texto</p>

            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
export default {
    name: 'Middle',
    data() {
        return {
            desktopImg: require("@/assets/images/image-computer.png")
        }
    }
}
</script>
