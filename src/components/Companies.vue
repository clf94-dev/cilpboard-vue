<template>
<div>
    <b-container fluid class="companies-section">
        <b-row>
            <b-col class="img-col" xs="12" sm="6" md="2" lg="2">
                <img :src="google" alt="Google">
            </b-col>
            <b-col class="img-col" xs="12" sm="6" md="2" lg="2">
                <img :src="hp" alt="HP">
            </b-col>
            <b-col class="img-col" xs="12" sm="6" md="2" lg="2">
                <img :src="ibm" alt="IBM">
            </b-col>
            <b-col class="img-col" xs="12" sm="6" md="2" lg="2">
                <img :src="microsoft" alt="Microsoft">
            </b-col>
            <b-col class="img-col" xs="12" sm="6" md="2" lg="2">
                <img :src="vector" alt="Vector">
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
