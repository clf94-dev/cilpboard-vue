<template>
<b-container fluid class="features-section">
    <h2>Supercharge your workflow</h2>
    <p>We’ve got the tools to boost your productivity.</p>
    <b-row class="row-feat">
        <b-col xs="12" sm="4" md="4" lg="4" v-for="feat of features" v-bind:key="feat.title">
            <img :src="feat.src" :alt="feat.imgAlt">

            <h4>{{feat.title}}</h4>
            <p>{{feat.text}}</p>
        </b-col>

    </b-row>
</b-container>
</template>

<script>
export default {
    name: 'Features',
    data() {
        return {
            features: [{
                    title: 'Create blacklists',
                    text: 'Ensure sensitive information never makes its way to your clipboard by excluding certain sources.',
                    src: require("@/assets/images/icon-blacklist.svg"),
                    imgAlt: 'Create blacklists'
                },
                {
                    title: 'Plain text snippets',
                    text: 'Remove unwanted formatting from copied text for a consistent look.',
                    src: require("@/assets/images/icon-text.svg"),
                    imgAlt: 'Plain text snippets'
                },
                {
                    title: 'Sneak preview',
                    text: 'Quick preview of all snippets on your Clipboard for easy access.',
                    src: require("@/assets/images/icon-preview.svg"),
                    imgAlt: 'Sneak preview'
                }

            ]
        }
    }
}
</script>
