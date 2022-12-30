<!-- <script setup> -->

<script>
    import router from "../router"    
    import axios from "axios"    
    export default {    
        name: "Login",    
        methods: {    
            login: (e) => {
e.preventDefault()    
                let email = "user@email.com"   
                let password = "password"    
                let login = () => {    
                    let data = {    
                        email: email,    
                        password: password    
                    }    
                    axios.post("/api/login", data)    
                        .then((response) => {    
                            console.log("Logged in")
router.push("/dashboard")    
                        })    
                        .catch((errors) => {    
                            console.log("Cannot log in")    
                        })    
                }    
                login()    
            }    
        }    
    }
</script>

<template>
    <div>
        <h2>Login</h2>
        <form v-on:submit="login">
            <input type="text" name="email" /> <br>
            <input type="password" name="password"/><br>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>


