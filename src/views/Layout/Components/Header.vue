<template>
    <div id="header-wrap">
        头部
    </div>
 </template>
 
 <script>
     
     export default{
         name:'layoutHeader',
         setup(){
 
         }
     }
 </script>
 
 <style lang="scss" scoped>
    #header-wrap{
        position: fixed;
        top: 0;
        left: 250px;
        right: 0;
        height: 75px;
        background-color: #fff;
        -webkit-box-shadow: 0 3px 16px 0 rgba(0,0,0,.1);
        box-shadow: 0 3px 16px 0 rgba(0,0,0,.1);
    }
 </style>
 