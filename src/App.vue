<template>
  <div id="app">
    <LandingPage v-if="!isAuthenticated" @login="handleLogin" />
    <MainApp v-else :username="username" />
  </div>
</template>

<script>
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './authConfig';
import LandingPage from './components/LandingPage.vue';
import MainApp from './components/MainApp.vue';

export default {
  components: {
    LandingPage,
    MainApp,
  },
  data() {
    return {
      isAuthenticated: false,
      msalInstance: null,
      username: '',
    };
  },
  async created() {
    this.msalInstance = new PublicClientApplication(msalConfig);
    await this.msalInstance.initialize();
  },
  methods: {
    async handleLogin() {
      if (this.msalInstance) {
        try {
          const loginRequest = {
            scopes: ['user.read'],
          };

          const response = await this.msalInstance.loginPopup(loginRequest);
          console.log('Login successful', response);

          this.isAuthenticated = true;
          this.msalInstance.setActiveAccount(response.account);
          this.username = response.account.name;
        } catch (error) {
          console.error('Login failed', error);
        }
      } else {
        console.error('MSAL instance is not initialized');
      }
    },
  },
};
</script>
