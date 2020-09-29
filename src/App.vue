<template>
  <div id="nav">
    <router-link id="home-link" to="/">Chatterbox</router-link> |
    <router-link id="login-link" to="/login">LOG IN</router-link>
    <router-link id="signup-link" to="/signup">SIGN UP</router-link>
  </div>
  <router-view/>
</template>

<style>

body {
  background-color: #050505;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 5vh;
  width: 100%;
  background-color: #191919;
  border-bottom: 1px #e6e6e6 solid;
}

#nav a {
  font-weight: bold;
  position: fixed;
  text-decoration: none;
}

#login-link {
  top: 1vh;
  right: 10vw;
  color: #e6e6e6;
  font-size: .7rem;
  border: 1px #e6e6e6 solid;
  padding: .8vh;
  border-radius: 4.5px;
  text-align: center;
  width: 6vw;
}

#home-link {
  top: 1vh;
  color: #e6e6e6;
  font-size: 1.5rem;
  left: 2vw;
}

#signup-link {
  border-radius: 4.5px;
  padding: .8vh;
  top: 1vh;
  font-size: .7rem;
  right: 2vw;
  background-color: #e6e6e6;
  width: 6vw;
  text-align: center;
  color: #212121;
}

</style>
