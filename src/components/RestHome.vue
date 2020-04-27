<template>
  <v-container>
    <h1 class="text-center">Welcome to the REST home!</h1>
    <v-row>
      <v-col cols="4" v-for="(recipe,i) in recipes" :key="i">
        <v-card class="mx-auto recipe" max-width="350">
          <v-card-text>
            <h1> {{ recipe.title }} </h1>
            <div> {{ recipe.content}} </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'RestHome',

  data() {
    return {
      recipes: []
    }
  },
  computed: {
    loading() {
      return !(this.recipes.length > 0)
    }
  },
  methods: {
    getRecipes() {
      fetch('https://thawing-chamber-73654.herokuapp.com/recipes/posts')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.recipes = data.posts
      })
      .catch((err) => {
        console.error('Error getting recipes:', err)
      })
    }
  },
  created() {
    this.getRecipes()
  }
}
</script>

<style scoped>
  h1 {
    line-height: 1.3;
    padding-bottom: 1rem;
  }
  .recipe {
    height: 200px;
  }
</style>
