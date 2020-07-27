<template>
    <div id="login">
        <div class="login-wrap">
            <ul class="menu-tab">
                <li v-for="item in menuTab" :key="item.id" :class="{'current': item.current}" @click="toggleMenu(item)">{{ item.txt }}</li>
            </ul>

            <!-- 表单 -->
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="login-form" size="medium ">
                <el-form-item prop="username" class="item-form">
                    <label>用户名（邮箱）</label>
                    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item prop="password" class="item-form">
                    <label>密码</label>
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off" minlength="6" maxlength="20"></el-input>
                </el-form-item>
                <el-form-item prop="code" class="item-form">
                    <label>验证码</label>
                    <el-row :gutter="20">
                        <el-col :span="15"><el-input type="text" v-model.number="ruleForm.code" minlength="1" maxlength="6"></el-input></el-col>
                        <el-col :span="9"> <el-button type="success" @click="submitForm('ruleForm')" class="block">获取验证码</el-button></el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                  <el-button type="danger" @click="submitForm('ruleForm')" class="login-btn block">提交</el-button>
                </el-form-item>
              </el-form>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'login',
        data(){
            //验证用户名
            var validateUsername = (rule, value, callback) => {
                let reg = /^([a-zA-z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
                if (value === '') {
                    return callback(new Error('请输入用户名(邮箱)'));
                }else if(!reg.test(value)){
                    return callback(new Error('用户名格式有误'));
                }else {
                    callback();
                }
            };
            //验证密码
            var validatePassword = (rule, value, callback) => {
                let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
                if (value === '') {
                    callback(new Error('请输入密码'));
                }else if(!reg.test(value)){
                    return callback(new Error('密码为6至20位的数字+字母'));
                }else {
                    callback();
                }
            };
            //验证验证码
            var validateCode = (rule, value, callback) => {
                let reg = /^[a-zA-Z0-9]{6}$/;
                if (value === '') {
                    callback(new Error('请输入验证码'));
                }else if(!reg.test(value)){
                    return callback(new Error('验证码格式有误'));
                }else {
                    callback();
                }
            };
            return {
                menuTab:[
                    {txt:'登录',current:true},
                    {txt:'注册',current:false}
                ],
                isActive:true,
                ruleForm: {
                    username: '',
                    password: '',
                    code: ''
                },
                rules: {
                    username: [
                        { validator: validateUsername, trigger: 'blur' }
                    ],
                    password: [
                        { validator: validatePassword, trigger: 'blur' }
                    ],
                    code: [
                        { validator: validateCode, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            toggleMenu(data){
                this.menuTab.forEach((elem,index)=>{
                    elem.current = false;
                })
                //高光
                data.current = true;
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style lang="scss" scoped >
#login{
    height: 100vh;
    background-color: #344a5f;
}
.login-wrap{
    width: 330px;
    margin: auto;
}
.menu-tab{
    text-align: center;
    li {
        display: inline-block;
        width: 88px;
        line-height: 36px;
        font-size: 14px;
        color: #fff;
        border-radius: 2px;
        cursor: pointer;
    }
    .current{
        background-color: rgba(0,0,0,.1);
    }
}
.login-form{
    margin-top: 29px;
    label{
        display: block;
        font-size: 14px;
        color: #fff;
        margin-bottom: 3px;
    }
    .item-form{
        margin-bottom: 13px;
    }
    .login-btn{
        margin-top: 19px;
    }
    .block{
        display: block;
        width: 100%;
    }
}
</style>