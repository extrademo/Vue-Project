<template>
    <div>

        <h2 v-for="i in User" :key="i.id">Hello {{ i.name }}, Welcome Home Page</h2>

        <table class="table table-dark table-hover mt-5">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>UserId</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="i in GetData" :key="i.id">
                    <td>{{ i.id }}.</td>
                    <td>{{ i.userId }}</td>
                    <td>{{ i.title }}</td>
                    <td>{{ i.body }}</td>
                </tr>
            </tbody>
        </table>
        
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'HOME',

    data(){
        return {
            User : "",
            
            GetData : "",
        }
    },

    async mounted(){
        const user = await axios.get("http://localhost:3000/login");

        this.User = user.data;

        if(user.data==0){
            this.$router.push({ name: 'LOGIN' });
        }

        
        const getdata= await axios.get("https://jsonplaceholder.typicode.com/posts");

        this.GetData= getdata.data;
    },

    methods: {
        
    },
}
</script>


<style scoped>
table{
    width: 1420px;
    margin: auto;
}
table,th{
    border: 2px solid #454d55;
}
table,td{
    border: 1px solid #454d55;
}
</style>
