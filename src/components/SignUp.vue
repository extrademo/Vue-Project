<template>
    <div>

        <div class="infinity-container">
            <div class="row">
                <div class="col-md-1 infinity-left-space"></div>

                <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12 text-center infinity-form">
            
                    <div class="text-center mb-3 mt-5">
                        <img src="../assets/vuelogo.png" :width="100">
                    </div>
                    <div class="text-center mb-4">
                        <h4>Create an account</h4>
                    </div>
                    <form class="px-3">
                        <div class="form-input">
                            <span><i class="fa fa-user"></i></span>
                            <input type="text" placeholder="Full Name" tabindex="10" v-model="name" required>
                        </div>
                        <div class="form-input">
                            <span><i class="fa fa-envelope"></i></span>
                            <input type="email" placeholder="Email Address" tabindex="10" v-model="email" required>
                        </div>
                        <div class="form-input">
                            <span><i class="fa fa-lock"></i></span>
                            <input type="password" placeholder="Password" v-model="password" required>
                        </div>
                        
                        <div class="mb-3">
                            <button type="button" class="btn btn-block" v-on:click="Signup">Register</button>
                        </div>

                        <div class="text-center mb-2">
                            <div class="text-center mb-3" style="color: #777;">or register with</div>

                            <router-link to="" class="btn btn-social btn-facebook"><i class="fa fa-facebook"></i></router-link>

                            <router-link to="" class="btn btn-social btn-google"><i class="fa fa-google"></i></router-link>

                            <router-link to="" class="btn btn-social btn-twitter"><i class="fa fa-twitter"></i></router-link>
                        </div>
                        <div class="text-center mb-5" style="color: #777;">Already have an account?
                            <router-link class="login-link" to="/Login">Login here</router-link>
                        </div>
                    </form>
                </div>

                <div class="col-md-1 infinity-right-space"></div>
            </div>
        </div>

    </div>
</template>


<script>
import axios from 'axios';

export default {
    name: 'SIGNUP',

    data(){
        return {
            name : "",
            email : "",
            password : "",
        }
    },

    methods: {
        async Signup() {
            console.log("Register Value++", this.name, this.email, this.password);

            if(this.name== "" && this.email== "" && this.password== ""){
                alert("Name and Email and Password is required");
            }
            else if(this.name== "") {
                alert("Name are not valid");
            }
            else if(this.email== "") {
                alert("Email are not valid");
            }
            else if(this.password== "") {
                alert("Password are not valid");
            }

            const register = {
                id: Math.floor(Math.random() * 1000),
                name: this.name,
                email: this.email,
                password: this.password,
            };

            try{
                const post = await axios.post("http://localhost:3000/register", register);

                console.log("Register API Post++", post);   

                if (post.status== 201){
                    alert("Your Registration SuccessFully");
                }
            }
            catch(err){
                console.log("Register Error++", err);
            }


            this.name = "";
            this.email = "";
            this.password = "";
        },
    },
}
</script>


<style scoped>
.infinity-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('../assets/bg1.jpg');
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
}

.infinity-form {
    box-shadow: 0 3px 6px hsla(0, 0%, 0%, 0.1);
    border-radius: 10px;
    width: 27rem;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 15px;
    padding-right: 15px;
}

.infinity-form {
    background: white;
}

.infinity-form h4 {
    font-weight: bold;
}

.infinity-form .form-input {
    position: relative;
}

.infinity-form .form-input input {
    width: 100%;
    margin-bottom: 20px;
    height: 40px;
    border: none;
    border-bottom: 2px solid #777;
    outline: none;
    background: transparent;
    padding-left: 40px;
    font-weight: bold;
    color: #777;
}

.infinity-form .form-input span {
    position: absolute;
    top: 8px;
    padding-left: 10px;
    color: #777;
}

.infinity-form .form-input input::placeholder {
    padding-left: 0px;
}

.infinity-form .form-input input:focus,
.infinity-form .form-input input:valid {
    border-bottom: 2px solid #57b894;
}

.infinity-form .custom-checkbox .custom-control-input:checked~.custom-control-label::before {
    background-color: #4ea585 !important;
    border: 0px;
}

.infinity-form button[type="button"] {
    margin-top: 10px;
    border: none;
    cursor: pointer;
    border-radius: 20px;
    background: linear-gradient(45deg, #4ea585, #57b894);
    color: #fff;
    font-weight: bold;
    transition: 0.5s;
    margin-bottom: 10px;
}

.infinity-form button[type="button"]:hover {
    background: linear-gradient(45deg, #57b894, #4ea585);
}

.forget-link,
.login-link,
.register-link {
    color: #57b894;
    font-weight: bold;
}

.forget-link:hover,
.login-link:hover,
.register-link:hover {
    color: #4ea585;
    text-decoration: none;
}

.infinity-form .btn-social {
    color: #fff;
    border: 0;
    display: inline-block;
    font-weight: bold;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin: 0px;
    margin-right: 10px;
    margin-bottom: 10px;
}

.infinity-form .btn-facebook {
    background: #4866a8;
}

.infinity-form .btn-google {
    background: #da3f34;
}

.infinity-form .btn-twitter {
    background: #33ccff;
}

.infinity-form .btn-facebook:hover {
    background: hsla(221, 40%, 40%, 1);
}

.infinity-form .btn-google:hover {
    background: hsla(4, 59%, 47%, 1);
}

.infinity-form .btn-twitter:hover {
    background: hsla(195, 78%, 54%, 1);
}
</style>
