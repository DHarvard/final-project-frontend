<template>
  <ApolloMutation
    :mutation="require('../graphql/UpdateRecipe.gql')"
    :variables="{
      id,
      title,
      // instructions,
      // ingredients
      }"
      @done="onDone"
  >
  <template v-slot="{ mutate, loading, error }">
    <!-- Form here -->
    <v-card class="mx-auto" max-width="750">
            <v-form>
                <v-row>
                    <v-col cols="12" md="12">
                        <v-text-field v-model="title" label="Recipe title" required filled></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="12">
                        <v-textarea v-model="instructions" label="Recipe instructions" rows="4" filled clearable></v-textarea>
                    </v-col>
                </v-row>
                <v-row >
                    <v-col cols="12" md="12">
                        <v-text-field v-model="ingredients" filled label="Recipe ingredients quantity"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12">
                        <v-text-field v-model="ingredients" filled label="Recipe ingredients title"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12">
                        <v-text-field v-model="ingredients" filled label="Recipe ingredients type"></v-text-field>
                    </v-col>
                </v-row>
                <v-row >
                    <v-col cols="12" md="12">
                        <v-text-field v-model="imageURL" filled label="Recipe imageURL"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-btn large color="secondary" :disabled="loading" @click="returnHome">Cancel</v-btn>
                    <v-btn class="buttonFix" large color="red" :disabled="loading" @click="deleteRecipe">Delete</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn large color="green" :disabled="loading" @click="mutate">Save</v-btn>
                </v-row>
            </v-form>
            <p v-if="error">An error occurred: {{ error }}</p>
        </v-card>
  </template>
  </ApolloMutation>
</template>

<script>

export default {
  data: function() {
    return {
      id: this.$store.getters.currentEditableRecipe.id,
      title: this.$store.getters.currentEditableRecipe.title,
      instructions: this.$store.getters.currentEditableRecipe.instructions,
      ingredients: this.$store.getters.currentEditableRecipe.ingredients,
    }
  },
  methods: {
    onDone() {
      return console.log('Done')
    },
    returnHome() {
      console.log('Returning Home')
      this.$router.push('/')
    },
    deleteRecipe() {
			
		},
  }
}
</script>

<style scoped>
  .v-btn {
    margin: 1rem 3rem;
  }
  .buttonFix {
    margin: inherit;
    margin: 1rem 0;
  }
</style>