<template>
<div class="cta-section">
    <h2>Clipboard for iOS and Mac OS</h2>
    <p>Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.</p>
    <button class='btn green-btn'>Download for iOS</button>
    <button class='btn blue-btn'>Download for Mac</button>

</div>
</template>

<script>
export default {
    name: 'Cta'
}
</script>

<style>
.cta-section {
    padding: 5% 7%;
    text-align: center;
}

@media screen and (max-width: 756px) {
    .cta-section {
        padding: 5% 7% 15%;
    }
}

.cta-section h2 {
    font-size: 30px;
}

.cta-section p {
    font-size: 16px;
    color: #9fabb2;
    margin-bottom: 10px;
}

@media screen and (min-width: 756px) {
    .cta-section p {
        padding: 0 25%;
    }
}

@media screen and (max-width: 756px) {
    .cta-section p {
        margin-bottom: 40px;
    }
}

.cta-section .btn {
    height: 50px;
    width: 100%;
    color: white;
    border-radius: 25px;
    margin-bottom: 3%;
    font-size: 15px;
    font-weight: 600;
}

@media screen and (min-width: 756px) {
    .cta-section .btn {
        width: 200px;
    }
}

@media screen and (min-width: 756px) {
    .cta-section .btn {
        margin: 3% 4%;
    }
}

.cta-section .btn:hover {
    opacity: 0.7;
    cursor: pointer;
}

.cta-section .btn.blue-btn {
    background-color: #6173ff;
    border: 1px solid #6173ff;
}

.cta-section .btn.green-btn {
    background-color: #26baa4;
    border: 1px solid #26baa4;
}
</style>
