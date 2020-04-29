<template>
    <v-container>
        <h1 class="text-center">REST: Edit a Recipe!!</h1>
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
                        <v-textarea v-model="content" label="Recipe content" rows="4" filled clearable></v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-btn large color="secondary" :disabled="loading" @click="returnHome">Cancel</v-btn>
                    <v-btn class="buttonFix" large color="red" :disabled="loading" @click="deleteRecipe">Delete</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn large color="green" :disabled="loading" @click="updateRecipe">Save</v-btn>
                </v-row>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'RestEdit',
    data: function() {
        
    },
    methods: {
        updateRecipe() {

        },
        deleteRecipe() {

        },
        returnHome() {
        console.log('Returning Home')
        this.$router.push('/')
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
    .v-text-field {
      margin: 0 2rem;
    }
</style>