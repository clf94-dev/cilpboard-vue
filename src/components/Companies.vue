<template>
<div>
    <b-container fluid class="companies-section">
        <b-row>
            <b-col class="img-col" xs="12" sm="6" md="2" lg="2" data-aos='fade-up' data-aos-delay="100">
                <img :src="google" alt="Google">
            </b-col>
            <b-col class="img-col" xs="12" sm="6" md="2" lg="2" data-aos='fade-up' data-aos-delay="200">
                <img :src="hp" alt="HP">
            </b-col>
            <b-col class="img-col" xs="12" sm="6" md="2" lg="2" data-aos='fade-up' data-aos-delay="300">
                <img :src="ibm" alt="IBM">
            </b-col>
            <b-col class="img-col" xs="12" sm="6" md="2" lg="2" data-aos='fade-up' data-aos-delay="400">
                <img :src="microsoft" alt="Microsoft">
            </b-col>
            <b-col class="img-col" xs="12" sm="6" md="2" lg="2" data-aos='fade-up' data-aos-delay="500">
                <img :src="vector" alt="Vector Graphics">
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
export default {
    name: 'Companies',
    data() {
        return {
            google: require("@/assets/images/logo-google.png"),
            hp: require("@/assets/images/logo-hp.png"),
            microsoft: require("@/assets/images/logo-microsoft.png"),
            ibm: require("@/assets/images/logo-ibm.png"),
            vector: require("@/assets/images/logo-vector-graphics.png"),
        }
    }
}
</script>

<style>
.companies-section {
    padding: 5% 7% 5% 10%;
    text-align: center;
}

.companies-section .img-col {

    margin: 0 20px 20px 20px;
}

@media screen and (max-width: 600px) {
    .companies-section .img-col {
        text-align: center;
    }
}

@media screen and (min-width: 600px) {
    .companies-section .img-col img {
        width: 75%;
    }
}
</style>
