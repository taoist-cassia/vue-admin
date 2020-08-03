<template>
    <div id="nav-wrap">
        <el-menu 
            default-active="1-4-1"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            class="el-menu-vertical-demo"
            background-color="transparent"
            text-color="#fff" 
            active-text-color="#fff"
            router>

            <template v-for="(item,index) in routers" >
                <el-submenu  v-if="!item.hidden" :key="item.id" :index="index + ''">
                    <!-- 一级菜单 -->
                    <template slot="title">
                        <i :class="item.meta.icon"></i>
                        <span slot="title">{{item.meta.name}}</span>
                    </template>
                    <!-- 子级菜单 -->
                    <template v-for="subItem in item.children">
                        <el-menu-item v-if="!subItem.hidden" :key="subItem.id" :index="subItem.path">
                            {{subItem.meta.name}}
                        </el-menu-item>
                    </template>
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