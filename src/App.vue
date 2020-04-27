<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
    <router-link class="routerLink" to="/">
      <v-app-bar-title>DARRIN HARVARD - <span class="font-weight-bold">DGM4790 Final Project</span></v-app-bar-title>
    </router-link>
    <v-spacer></v-spacer>
    <div>
        <router-link class="routerLink" to="/">Home</router-link><span class="routerLink"> | </span>
        <router-link class="routerLink" to="/graphql-add">GQL Add</router-link><span class="routerLink"> | </span>
        <router-link class="routerLink" to="/graphql-edit">GQL Edit</router-link><span class="routerLink"> | </span>
        <router-link class="routerLink" to="/rest-home">Rest Home</router-link><span class="routerLink"> | </span>
        <router-link class="routerLink" to="/rest-add">Rest Add</router-link><span class="routerLink"> | </span>
        <router-link class="routerLink" to="/rest-edit">Rest Edit</router-link>
      </div>
    </v-app-bar>

    <v-content>
      
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.routerLink {
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
}
</style>
