<!-- <script >

export default{
    methods:{
        login(){
            console.log(this.login_data)
        }
    },
    data(){
        return{
            login_data:{
               
            }
        }
    }
}
</script> -->

<template>

    <div>
     <table style="width:100%">
     
   <tr>
     <th>Name</th>
     <th>Cost</th>
     
   </tr>
   <tr>
     <td>Perk</td>
     <td>Kitkat</td>
     
   </tr>
   <tr>
     <td>50</td>
     <td>40</td>
   </tr>
        <RouterLink to="/Aboutyou">
         <button>Back to login</button>
        </RouterLink>
 </table>
 </div>
 </template>
 // ProfilePage.vue
  <!-- {{login_data.firstname}} -->
 
 <!-- <account-info username='matt' /> -->
 <style>
 .table,th,td{
     text-align: center;
 }
 
 .tr{
     border-color: black;
 }
 .th{
     font-weight:bold;
 }
 </style>