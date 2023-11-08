<template>
    <div>
        
        <MDBFooter bg="black" style="color:white; text-align:left; margin-top:100px;">
            <MDBContainer class="p-4">
                <MDBRow>
                    <MDBCol lg="6"  class="mb-4 mb-md-0">
                        <h4 class="mb-3 fw-bold">Company</h4>

                        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur
                             adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </MDBCol>

                    <MDBCol lg="3" md="" class="mb-4 mb-md-0">
                        <h4 class="mb-3 fw-bold">Useful Links</h4>

                        <ul class="list-unstyled mb-0">
                            <li><router-link to="/" class="text-white fw-bold text-decoration-none">Home</router-link></li>        
                            <li><router-link to="/Login" class="text-white fw-bold text-decoration-none">Login</router-link></li>        
                            <li><router-link to="/Signup" class="text-white fw-bold text-decoration-none">SignUp</router-link></li>   
                        </ul>
                    </MDBCol>

                    <MDBCol lg="3" md="" class="mb-4 mb-md-0">
                        <h4 class="mb-3 fw-bold">Contact Us</h4>

                        <p>
                            A108 Adam Street <br />
                            New York, NY 535022<br />
                            United States <br /><br />
                            <strong>Phone:</strong> +1 5589 55488 55<br />
                            <strong>Email:</strong> info@example.com<br />
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <div class="text-center p-3" style="backgroundColor: rgba(0, 0, 0, 0.2)">
                © 2022 Copyright :
                <a class="text-white ms-2 text-decoration-none" target="_blank" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        </MDBFooter>
                
    </div>
</template>


<script>
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-vue-ui-kit';

export default {
    name: 'FOOTER',
    components: {
        MDBFooter,
        MDBContainer,
        MDBRow,
        MDBCol,
    },
}
</script>


<style scoped>
</style>
