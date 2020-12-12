<template>
    <div>
        <Header v-if="this.signIn" />
        <HeaderSignIn v-if="!this.signIn"/>    
    </div>
</template>

<script>
import Header from './Header.vue'
import HeaderSignIn from "./HeaderSignIn";
export default {
    name: 'HeaderFather',
    components: { 
      Header,
      HeaderSignIn,
    },
    data() {
        return {
            signIn: true,
        }
    },
}
</script>

<style scoped>

</style>