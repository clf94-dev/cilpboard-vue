<template>
<b-container fluid class="footer-section">
    <b-row class="row-footer">
        <b-col class="img-col" xs="12" sm="6" md="2" lg="2"><img :src="logo" alt="Clipboard"></b-col>
        <b-col class="text-col" xs="12" sm="6" md="2" lg="2">
            <p>FAQs</p>
            <p>Contact Us</p>
        </b-col>
        <b-col class="text-col" xs="12" sm="6" md="2" lg="2">
            <p>Privacy Policy</p>
            <p>Press Kit</p>
        </b-col>
        <b-col class="text-col" xs="12" sm="6" md="2" lg="2">
            <p>Install Guide</p>
        </b-col>
        <b-col class="text-col" xs="12" sm="6" md="2" lg="2"></b-col>
        <b-col class="social-col" xs="12" sm="6" md="2" lg="2">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: 'Footer',

    data() {
        return {
            logo: require("@/assets/images/logo.svg"),

        }
    }

}
</script>
