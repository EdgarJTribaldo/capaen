<script>
    import { fade } from 'svelte/transition';
    let title = "CAPAEN";
    let tagline = "FILM BY";
</script>

<div class="wrapper" transition:fade>
    <div class="wrapper_title">
        <p>{tagline}</p><br>
        <h1>{title}</h1>
    </div>
    <div class="clapperboard-loader">
        <div class="clapperboard">
            <div class="top">
                <div class="stripe stripe1"></div>
                <div class="stripe stripe2"></div>
                <div class="stripe stripe3"></div>
                <div class="stripe stripe4"></div>
                <div class="stripe stripe5"></div>
            </div>
            <div class="bottom"></div>
        </div>
    </div>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        color: white;
        background: black;
        z-index: 1000;
        gap: 50px;
    }

    .wrapper_title {
        width: 100px;
        top: 50px;
        left: 30px;
        gap: 1px;
        display: flex;
        align-items: flex-end;
    }

    .wrapper_title p {
        font-size: 1rem;
        line-height: 1rem;
        text-align: left;
        margin: 0;
        padding: 0;
    }

    .wrapper_title h1 {
        padding: 3px;
        color: white;
        line-height: 0.7rem;
        font-size: 1.3rem;
        margin: 0;
        margin-left: -20px;
    }

    .clapperboard-loader {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .clapperboard {
        position: relative;
        width: 100px;
        height: 60px;
        background: white;
        border: 3px solid black;
        border-bottom: none;
    }

    .clapperboard .top {
        position: absolute;
        top: -30px;
        left: 0;
        width: 100%;
        height: 30px;
        background: black;
        display: flex;
        justify-content: space-around;
        animation: clapper 0.5s infinite alternate;
    }

    .clapperboard .stripe {
        width: 20%;
        height: 100%;
        background: white;
    }

    .clapperboard .stripe1 { transform: skewY(20deg); }
    .clapperboard .stripe2 { transform: skewY(-20deg); }
    .clapperboard .stripe3 { transform: skewY(20deg); }
    .clapperboard .stripe4 { transform: skewY(-20deg); }
    .clapperboard .stripe5 { transform: skewY(20deg); }

    .clapperboard .bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 80%;
        height: 40px;
        background: white;
    }

    @keyframes clapper {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(-20deg); }
    }
</style>
