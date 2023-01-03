<script >

export default{
    methods:{
        login(){
            console.log(this.login_data)
        }
    },
    data(){
        return{
            login_data:{
                firstname:null,
                lastname:null,
                pincode:null
            }
        }
    }
}
</script>

<template>
  <div>
    <form  @submit.prevent="getFormValues">  
        <h1><b>About You</b></h1>
     <label for="firstname">First Name</label> 
     <!-- First Name: <input type="text" name="first_name"> -->
     <br>
     <input type ="text" v-model="login_data.firstname" name="firstname"><br> 
        <!-- Second Name: <input type="text" name="last_name">   -->
        <label for="lastname">Last Name</label> 
     <br>
       <input type ="text" v-model="login_data.lastname" name="lasttname"><br>
       <label for="pincode">Pin Code</label> <br>
       <input type ="text" v-model="login_data.pincode" name="pincode"><br>
     <button  v-on:click="login">Submit</button>
     <!-- <input v-on:click="Login"> -->
     </form>  
     </div>  
</template> 
   

