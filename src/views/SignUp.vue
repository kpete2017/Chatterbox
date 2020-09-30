<template>
    <div class="signup-page">
        <div class="login-area">
            <h3>Sign Up</h3>
            <input v-model="email" type="email" placeholder="Enter Email"/>
            <input v-model="password" type="password" placeholder="Enter Password"/>
            <button @click="signUp()">Submit</button>
            <p>or Sign Up with Google</p>
            <button @click="google()">
                Google
            </button>
        </div>
  </div>
</template>

<script>

import firebase from "firebase";

export default {
    data() {
        return {
            email: "",
            password: "",
            error: null
        }
    },
    methods: {
        signUp: function() {
            if(this.email && this.password) {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(data => { data.user.updateProfile({displayName: this.name})
                .then();
                })
                .catch(err => {
                this.error = err.message;
                });
            } else {
                alert("Invalid Username or Password")
            }
        },
        google: function() {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function(result) {
                console.log(result)
            });
        }
    }
}
</script>

<style scoped>
    .signup-page {
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