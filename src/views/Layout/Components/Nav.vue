<template>
    <div id="nav-wrap">
        侧边栏
    </div>
 </template>
 
 <script>
     
     export default{
         name:'layoutNav',
         setup(){
 
         }
     }
 </script>
 
 <style lang="scss" scoped>
    #nav-wrap{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 250px;
        height: 100vh;
        color: #fff;
        background-color: #32495F;
    }
 </style>