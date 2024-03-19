<template>
    <div class="main-app">
      <h2>Welcome, {{ localUsername }}!</h2>

    </div>
  </template>
  
  <script>
  import { msalInstance } from '../authConfig';
  
  export default {
    props: {
      username: String,
    },
    data() {
      return {
        localUsername: this.username, 
      };
    },
    async mounted() {
      if (!this.localUsername) {
        try {
          const account = msalInstance.getActiveAccount();
          if (account) {
            const response = await msalInstance.acquireTokenSilent({
              scopes: ['user.read'], 
              account: account,
            });
  
            this.localUsername = account.idTokenClaims.name;
          }
        } catch (error) {
          console.error('Failed to acquire token', error);
        }
      }
    },
  };
  </script>
  