<template>
<div class="home">
    <Top></Top>
    <Middle></Middle>
    <Features></Features>
    <Companies></Companies>
    <Cta></Cta>
    <Footer></Footer>
</div>
</template>

<script>
// @ is an alias to /src
import Top from '@/components/Top.vue';
import Middle from '@/components/Middle.vue';
import Features from '@/components/Features.vue';
import Companies from '@/components/Companies.vue';
import Cta from '@/components/Cta.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: 'App',
    components: {
        Top,
        Middle,
        Features,
        Companies,
        Cta,
        Footer

    }
}
</script>
