<template>
  <v-container>
    <ApolloQuery
      :query="require('../graphql/AllRecipes.gql')"
      :variables="{ searchString }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occured</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          <v-row>
            <v-col cols="6" v-for="(item,i) in data.Recipes" :key="i">
              <v-card class="mx-auto" max-width="350">
                <v-card-text>
                  <h1> {{ item.title }} </h1>
                  <div > {{ item.instructions}} </div>
                  <div> {{ item.ingredients}} </div>
                </v-card-text>
                <v-card-actions>
                <v-btn color="primary" fab x-small dark @click="editRecipe(item)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
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
  }
</script>

<style>
.result {
  padding: 1rem;
}
</style>
