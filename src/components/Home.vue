<template>
  <v-container>
    <ApolloQuery
      :query="require('../graphql/AllRecipes.gql')"
      :variables="{ searchString }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <h1 class="text-center">Welcome to the GraphQL home!</h1>
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occured</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          <v-row>
            <v-col cols="6" v-for="(item,i) in data.Recipes" :key="i">
              <v-card class="mx-auto">
                <v-card-text>
                  <h1> {{ item.title }} </h1>
                  <div class=""> <v-img :src="item.imageUrl" alt="recipe image"  max-width="500" max-height="350"></v-img></div>
                  <h2> Instructions </h2>
                  <v-row v-for="(item,i) in item.instructions" :key="i">
                    <v-col>
                      <p> {{ item }} </p>
                    </v-col>
                  </v-row>
                  <h2> Ingredients </h2>
                  <v-row>
                    <v-col cols="6" v-for="(item, i) in item.ingredients" :key="i">
                      <h4>Title</h4>
                      <div class="ingredients"> {{ item.title.charAt(0).toUpperCase() + item.title.substring(1)}} </div>
                      <h4>Quantity</h4>
                      <div class="ingredients"> {{ item.quantity}} </div>
                      <h4>Type</h4>
                      <div class="ingredients"> {{ item.type.charAt(0).toUpperCase() + item.type.substring(1)}} </div>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions>
                  <v-btn color="secondary" @click="editRecipe(item)"><v-icon>mdi-pencil</v-icon></v-btn>
                  <v-btn color="red" @click="deleteRecipe(item)"><v-icon>mdi-delete</v-icon></v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
      
  </v-container>
</template>

<script>


  export default {
    name: 'Home',

    data: () => ({
      
    }),
    methods: {
      deleteRecipe() {
    },
      editRecipe(recipe) {
        this.$store.dispatch('editRecipe', recipe)
        this.$router.push(`graphql-edit/${recipe.id}`)
      }
    }
  }
</script>

<style>
.result {
  padding: 1rem;
}
h1 {
  padding-bottom: 1rem;
}
h2 {
  padding: .5rem 0;
}
.ingredients {
  background-color: #e1e1e1;
}
</style>
