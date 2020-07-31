<template>
    <div id="nav-wrap">
        <el-menu 
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            background-color="transparent"
            text-color="#fff" 
            active-text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            router>

            <template v-for="(item,index) in routers" >
                <el-submenu :key="item.id" :index="index" v-if="!item.hidden">
                    <!-- 一级菜单 -->
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">{{item.meta.name}}</span>
                    </template>
                    <!-- 子级菜单 -->
                    <el-menu-item v-for="subItem in item.children" :key="subItem.id" :index="subItem.path">{{subItem.meta.name}}</el-menu-item>
                </el-submenu>
            </template>

        </el-menu>
          
    </div>
 </template>
 
 <script>
     import { ref, reactive } from '@vue/composition-api';
     export default{
         name:'NavMenu',
         setup(props, { root }){
            /**
             * data数据 
             */
            const isCollapse = ref(false);
            const routers = reactive(root.$router.options.routes);
            console.log(routers);

            /**
             * data函数
             */
            const handleOpen = (key, keyPath)=>{
                console.log(key, keyPath);
            }

            const handleClose = (key, keyPath)=>{
                console.log(key, keyPath);
            }

            return {
                isCollapse,
                routers,
                handleOpen,
                handleClose
            }
         }
     }
 </script>
 
 <style lang="scss" scoped>
    #nav-wrap{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: $navMenu;
        height: 100vh;
        background-color: #32495F;
    }
 </style>