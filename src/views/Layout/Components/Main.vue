<template>
    <div id="main-wrap">
        内容
    </div>
 </template>
 
 <script>
     
     export default{
         name:'layoutMain',
         setup(){
 
         }
     }
 </script>
 
 <style lang="scss" scoped>
    #main-wrap{
        position: fixed;
        top: $layoutHeader;
        left: $navMenu;
        right: 0;
        bottom: 0;
        padding: 30px;
        border: 30px solid #f7f7f7;
        box-sizing: border-box;
    }
 </style>