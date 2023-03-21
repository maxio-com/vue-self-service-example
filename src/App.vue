<script setup>
import { provide} from "vue";
import {Components} from '@maxio-com/self-service';

let componentsFactory = new Components({
  accessTokenUrl:
      'https://link-to-your-access-token-endpoint.com',
  onAuthenticationRequest: () => ({
    customHeader: 'customHeaderValue',
  }),
  apiUrl: 'https://link-to-your-api-endpoint.com',
});

provide('componentsFactory', componentsFactory)

</script>

<template>
  <div>
    <h1>Maxio Components</h1>
  </div>
  <div class="wrapper">
  <router-link to="/customer-details">Go to Customer Details</router-link>
  <router-link to="/subscription-manager">Go to Subscription Manager</router-link>
  <router-link to="/billing-history">Go to Billing History</router-link>
  </div>
  <router-view></router-view>
</template>

<style>
  .wrapper{
    margin: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
</style>