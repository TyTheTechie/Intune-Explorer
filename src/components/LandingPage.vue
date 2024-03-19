<template>
  <div class="landing-page">
    <h1 class="title">Intune Explorer</h1>
    <p class="description">Welcome to Intune Explorer!</p>
    <button class="login-button" @click="$emit('login')">Login with Azure SSO</button>
  </div>
</template>

<script>
export default {
  emits: ['login']
};
</script>

<style scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 20px;
  text-align: center;

}
.login-button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  color: #0f0f0f;
  background-color: #ffffff;
  transition: border-color 0.25s;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}

.login-button:hover {
  border-color: #396cd8;
}
</style>
