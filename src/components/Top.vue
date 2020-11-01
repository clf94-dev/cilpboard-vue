<template>
<div>
    <img class='backgroundTop' :src="backTop" :srcset="`${backTop}  756w, ${backTopM} 400w`" alt="background">
    <div class='top-section'>
        <img :src="logo" alt="clipboard logo">
        <h1>A history of everything you copy</h1>
        <p>Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>
        <button class='btn green-btn'>Download for iOS</button>
        <button class='btn blue-btn'>Download for Mac</button>
    </div>
</div>
</template>

<script>
export default {
    name: ' Top',
    data() {
        return {
            logo: require('../assets/images/logo.svg'),
            backTop: require('../assets/images/bg-header-desktop.png'),
            backTopM: require('../assets/images/bg-header-mobile.png')
        }
    }

}
</script>

<style>
.backgroundTop {
    z-index: -1;
    width: 100% !important;
    position: absolute !important;
}

.top-section {
    justify-content: center;
    text-align: center;
    padding: 5% 7%;
}

.top-section h1 {
    font-size: 40px;
}

.top-section p {
    font-size: 16px;
    color: #9fabb2;
    padding: 0 25%;
}

.top-section .btn {
    height: 50px;
    width: 100%;
    color: white;
    border-radius: 25px;
    margin-bottom: 3%;
    font-size: 15px;
    font-weight: 600;
}

@media screen and (min-width: 756px) {
    .top-section .btn {
        width: 200px;
    }
}

@media screen and (min-width: 756px) {
    .top-section .btn {
        margin: 3% 5%;
    }
}

.top-section .btn:hover {
    opacity: 0.7;
    cursor: pointer;
}

.top-section .btn.blue-btn {
    background-color: #6173ff;
    border: 1px solid #6173ff;
}

.top-section .btn.green-btn {
    background-color: #26baa4;
    border: 1px solid #26baa4;
}
</style>
