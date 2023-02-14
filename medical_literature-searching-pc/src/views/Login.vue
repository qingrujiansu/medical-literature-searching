<template>
    <div class="box">
        <h1>登录</h1>
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px"
            class="demo-ruleForm" label-position="top">
            <el-form-item label="电话号码:" prop="phone">
                <el-input v-model="ruleForm.phone" type="phone" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码:" prop="pass">
                <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
                <el-button type="primary" @click="toRegister">注册</el-button>

            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import router from '@/router';
import useStore from '@/stores'
const ruleFormRef = ref<FormInstance>()

const Phone = (rule: any, value: any, callback: any) => {
    let reg = /^[1][3,4,5,6,7,8][0-9]{9}$/
    if (!reg.test(value)) {
        callback(new Error('请输入正确的手机号码'))
    } else {
        callback()
    }
}

const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入密码'))
    } else {
        if (ruleForm.pass !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('checkPass', () => null)
        }
        callback()
    }
}

const ruleForm = reactive({
    pass: '',
    phone: '',
})

const rules = reactive({
    pass: [{ validator: validatePass, trigger: 'blur' }],
    phone: [{ validator: Phone, trigger: "blur" }],

})
//声明emit事件
const emit = defineEmits(['change-flag'])
const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            //触发父组件改变flag
            emit('change-flag')
            console.log('submit!')
        } else {
            console.log('error submit!')
            return false
        }
    })
}

function toRegister() {

    router.push('/register')
}

const { userStore } = useStore()

//获取登录信息
// userStore.Login()

</script>

<style lang="less" scoped>
.box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    //   background: #96bfee;
    border: 1px solid #ccc;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -250px;
    margin-top: -250px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    background-color: rgb(252, 249, 249);

    h1 {
        font-size: 30px;
        margin: 10px 150px;
        font-weight: 400;
    }

    ::v-deep(.el-form-item__content) {
        justify-content: space-around;
    }
}
</style>