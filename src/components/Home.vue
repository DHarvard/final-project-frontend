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
            <v-col cols="12" v-for="(item,i) in data.Recipes" :key="i">
              <v-card class="mx-auto">
                <v-card-text>
                  <h1> {{ item.title }} </h1>
                  <div class=""> <v-img :src="item.imageUrl" alt="recipe image"  max-width="500" max-height="350"></v-img></div>
                  <h2> Instructions </h2>
                  <div > {{ item.instructions}} </div>
                  <h2> Ingredients </h2>
                  <v-row>
                    <v-col cols="4" v-for="(item, i) in item.ingredients" :key="i">
                      <h4>Title</h4>
                      <div class="ingredients"> {{ item.title}} </div>
                      <h4>Quantity</h4>
                      <div class="ingredients"> {{ item.quantity}} </div>
                      <h4>Type</h4>
                      <div class="ingredients"> {{ item.type}} </div>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions>
                  <v-btn color="secondary"><v-icon>mdi-pencil</v-icon></v-btn>
                  <v-btn color="red"><v-icon>mdi-delete</v-icon></v-btn>
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
