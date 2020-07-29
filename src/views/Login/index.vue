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
                <el-form-item prop="passwords" class="item-form" v-show="model === 'register'">
                    <label>重复密码</label>
                    <el-input type="password" v-model="ruleForm.passwords" autocomplete="off" minlength="6" maxlength="20"></el-input>
                </el-form-item>
                <el-form-item prop="code" class="item-form">
                    <label>验证码</label>
                    <el-row :gutter="20">
                        <el-col :span="15"><el-input type="text" v-model.number="ruleForm.code" minlength="1" maxlength="6"></el-input></el-col>
                        <el-col :span="9"> <el-button type="success" @click="getSms()" class="block">获取验证码</el-button></el-col>
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
    import { reactive, ref, isRef, toRef, onMounted  } from '@vue/composition-api';
    import { stripscript, validateEmail, validatePass, validateVCode } from '@/utils/validate';
    export default{
        name: 'login',
        // setup(props,context){
        /**
        *attrs: (...) == this.$attrs
        emit: (...) == this.$emit
        listeners: (...) == this.$listeners
        parent: (...) == this.$parent
        refs: (...) == this.$refs
        root: (...) == this
        */
        setup(props,{ refs, root}){
            //这里面放置data数据，生命周期，自定义的函数

            //验证用户名
            let validateUsername = (rule, value, callback) => {
                if (value === '') {
                    return callback(new Error('请输入用户名(邮箱)'));
                }else if(validateEmail(value)){
                    return callback(new Error('用户名格式有误'));
                }else {
                    callback();
                }
            };
            //验证密码
            let validatePassword = (rule, value, callback) => {
                //过滤后的数据
                ruleForm.password = stripscript(value);
                value =ruleForm.password;

                if (value === '') {
                    callback(new Error('请输入密码'));
                }else if(validatePass(value)){
                    return callback(new Error('密码为6至20位的数字+字母'));
                }else {
                    callback();
                }
            };
            //验证重复密码
            let validatePasswords = (rule, value, callback) => {
                //如果模块值为login,直接通过
                if(model.value === 'login'){ callback(); }
                //过滤后的数据
                ruleForm.passwords = stripscript(value);
                value =ruleForm.passwords;

                if (value === '') {
                    callback(new Error('请再次输入密码'));
                }else if(value != ruleForm.password){
                    return callback(new Error('重复密码不正确'));
                }else {
                    callback();
                }
            };
            //验证验证码
            let validateCode = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入验证码'));
                }else if(validateVCode(value)){
                    return callback(new Error('验证码格式有误'));
                }else {
                    callback();
                }
            };

            /**
             * reactive 声明的数据是对象类型
             * ref 声明的数据是基础类型
             **/ 

            const menuTab = reactive([
                {txt:'登录',current:true ,type:'login'},
                {txt:'注册',current:false,type:'register'}
            ])

            //模块值
            const model = ref('login');
            //表单绑定数据
            const ruleForm = reactive({
                username: '',
                password: '',
                passwords: '',
                code: ''
            })
            //表单验证
            const rules = reactive({
                username: [
                    { validator: validateUsername, trigger: 'blur' }
                ],
                password: [
                    { validator: validatePassword, trigger: 'blur' }
                ],
                passwords: [
                    { validator: validatePasswords, trigger: 'blur' }
                ],
                code: [
                    { validator: validateCode, trigger: 'blur' }
                ]
            })

            // 声明函数
            const toggleMenu = (data =>{
                menuTab.forEach((elem,index)=>{
                    elem.current = false;
                })
                //高光
                data.current = true;
                //修改模块值
                model.value = data.type;
            })
            const submitForm = (formName => {
                refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            })
            //获取验证码
            const getSms = (()=>{
                root.$api.getSms({
                    username: '1111111@qq.com',
                    module: 'login'
                },res => {
                    console.log(res);
                })
            })
            const resetForm = (formName => {
                refs[formName].resetFields();
            })

            //组件挂载完成、内容更新或者解除挂载时 (这就对应了生命周期钩子)
            onMounted(() => {
                console.log('component is mounted!')
            })

            return{
                menuTab,
                model,
                ruleForm,
                rules,
                toggleMenu,
                getSms,
                submitForm,
                resetForm
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