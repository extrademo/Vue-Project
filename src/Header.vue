<template>
    <div>

        <nav style="margin-bottom:40px; background-color:black;" class="header navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target">
            <div class="container">
                <router-link to="/" class="navbar-brand fs-2 fw-bold">Vue</router-link>    

                <div class="f">
                    <ul class="navbar-nav">
                        <li class="nav-item "><router-link to="/" class="nav-link">Home</router-link></li>
                    </ul>
                </div>

                <div v-for="i in User" :key="i.id">
                    <button type="button" class="btn btn-primary me-3" v-on:click="Logout(i.id)">Logout</button>
                </div>
            </div>                
        </nav>

    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'HEADER',

    data(){
        return {
            User : "",
        }
    },

    async mounted(){
        const user= await axios.get("http://localhost:3000/login");
        this.User= user.data;
    },

    methods: {
        async Logout(id){
            console.log("Logout++", id);

            try{
                const del= await axios.delete("http://localhost:3000/login/" + id);

                console.log("Logout API Delete++", del);

                if (del.status== 200) {
                    this.$router.push({name : 'LOGIN'});

                    window.location.reload(); 
                }
            }
            catch(err){
                console.log("Logout Error++", err);
            }
        },
    },
}
</script>


<style scoped>
.header{
    margin-bottom: 20px;
} 
.f{
  margin: auto;
}
</style>
