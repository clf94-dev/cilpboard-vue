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
            <i style="padding-right: '7px';" class="fab fa-2x fa-facebook"></i>
            <i style="padding-right: '7px';" class="fab fa-2x fa-twitter"></i>
            <i class="fab fa-2x fa-instagram"></i>
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

<style>
.footer-section {
    padding: 5% 7%;
    text-align: center;
    background-color: #9fabb2;
}

.footer-section .row-footer .img-col img {
    margin-top: 10px;
    width: 70px;
}

.footer-section .row-footer .social-col i:hover {
    cursor: pointer !important;
    transition: all 0.3s ease;
    color: #26baa4 !important;
}

@media screen and (min-width: 756px) {
    .footer-section .row-footer .text-col {
        text-align: start !important;
    }
}

.footer-section .row-footer .text-col p {
    color: #4c545d;
    font-size: 15px;
}

.footer-section .row-footer .text-col p:hover {
    transition: all 0.3s ease;
    color: #26baa4;
    cursor: pointer;
}
</style>
