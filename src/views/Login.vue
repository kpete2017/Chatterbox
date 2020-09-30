<template>
    <div class="login-page">
        <div class="login-area">
            <h3>Sign In</h3>
            <input />
            <input />
            <button>Submit</button>
            <p>or Sign In with Google</p>
            <button>
                Google
            </button>
        </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .login-page {
        height: 95vh;
        width: 100%;
        margin-top: 5vh;
        color: white;
        overflow: hidden;
    }

    .login-area {
        text-align: center;
        display: flex;
        flex-direction: column;;
        width: 10vw;
        padding: 10rem;
        padding-bottom: 12rem;
        background-color: #191919;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%); 
    }


</style>