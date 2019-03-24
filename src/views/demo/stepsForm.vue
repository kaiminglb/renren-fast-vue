<template>
  <div class="mod-demo-stepsForm">
    <el-alert
      title="提示："
      type="warning"
      :closable="false">
      <div slot-scope="">
        <p class="el-alert__description">多步表单提交</p>
      </div>
    </el-alert>

    <el-row :gutter="20">
      <el-col :span="24">
        <el-card>
            <el-steps :active="active" finish-status="success">
             <el-step title="基本信息"></el-step>
             <el-step title="联系方式"></el-step>
             <el-step title="哈哈"></el-step>
            </el-steps>
    <!-- 各步骤表单 -->
          <el-form :model="dataForm" :rules="dataRule" ref="dataForm" label-width="100px">
            <div v-if="active == 0">
              <el-row>
                <el-col :span="12">
                  <el-form-item  label="用户名" prop="userName">
                      <el-input v-model.trim="dataForm.userName" placeholder="登录帐号" key="userName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="密码" prop="password" :class="{ 'is-required': !dataForm.id }">
                      <el-input v-model.trim="dataForm.password" type="password" placeholder="密码" key="password"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="确认密码" prop="comfirmPassword" :class="{ 'is-required': !dataForm.id }">
                      <el-input v-model.trim="dataForm.comfirmPassword" type="password" placeholder="确认密码" key="comfirmPassword"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
                
            </div>
            <div v-if="active == 1">
              <el-row>
                <el-col :span="12">
                  <el-form-item label="邮箱" prop="email">
                      <el-input  v-model.trim="dataForm.email" placeholder="邮箱。如xxxx@163.com" key="email"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="手机号" prop="mobile">
                      <el-input v-model.trim="dataForm.mobile" placeholder="手机号"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
            <div v-if="active == 2">
              <el-row>
                <el-col :span="12">
                  <el-form-item label="状态" size="mini" prop="status">
                  <el-radio-group v-model="dataForm.status">
                      <el-radio-button :label="0">禁用</el-radio-button>
                      <el-radio-button :label="1">正常</el-radio-button>
                  </el-radio-group>
                  </el-form-item>
                </el-col>
              </el-row>  
            </div>

            <el-row>
              <el-col :span="12">
              </el-col>
              <el-col :span="12">
                <el-form-item class="btn-bottom">
                    <el-button type="info">
                        取消
                    </el-button>
                    <el-button v-if="active < 2" type="primary" @click="next">
                        Next
                    </el-button>
                    <el-button v-if="active == 2" type="success" @click="done">
                        Done
                    </el-button>
                    <el-button v-if="active > 0" style="margin-left: 8px" @click="prev">
                        Previous
                    </el-button>
                </el-form-item>
              </el-col>
            </el-row>

          </el-form>
        </el-card>
      </el-col>
    </el-row>

    

  </div>
</template>

<script>
  import { isEmail, isMobile } from '@/utils/validate'
  export default {
    data () {
      let validatePassword = (rule, value, callback) => {
        if (!this.dataForm.id && !/\S/.test(value)) { // \S非空白字符
          callback(new Error('密码不能为空'))
        } else {
          callback()
        }
      }
      let validateComfirmPassword = (rule, value, callback) => {
        if (!this.dataForm.id && !/\S/.test(value)) {
          callback(new Error('确认密码不能为空'))
        } else if (this.dataForm.password !== value) {
          callback(new Error('确认密码与密码输入不一致'))
        } else {
          callback()
        }
      }
      let validateEmail = (rule, value, callback) => {
        if (!isEmail(value)) {
          callback(new Error('邮箱格式错误'))
        } else {
          callback()
        }
      }
      let validateMobile = (rule, value, callback) => {
        if (!isMobile(value)) {
          callback(new Error('手机号格式错误'))
        } else {
          callback()
        }
      }

      return {
        active: 0,
        dataForm: {
          id: 0,
          userName: '',
          password: '',
          comfirmPassword: '',
          email: '',
          mobile: '',
          status: 1
        },
        dataRule: {
          userName: [
            { required: true, message: '用户名不能为空', trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ],
          comfirmPassword: [
            { validator: validateComfirmPassword, trigger: 'blur' }
          ],
          email: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { validator: validateEmail, trigger: 'blur' }
          ],
          mobile: [
            { required: true, message: '手机号不能为空', trigger: 'blur' },
            { validator: validateMobile, trigger: 'blur' }
          ]
        }
      }
    },
    mounted () {
    },
    activated () {
    },
    methods: {
      next () {
        // console.info(`dataForm${this.active}`)
        this.$refs[`dataForm`].validate((valid) => {
          if (valid) {
            this.active++
          }
        })
      },
      prev () {
        // 清空验证
        this.$refs[`dataForm`].clearValidate()
        this.active--
      },
      done () {
        this.$refs[`dataForm`].validate((valid) => {
          if (valid) {
            this.active++
            let params = {...this.dataForm}
            console.info(params)
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .mod-demo-stepsForm {
    > .el-alert {
      margin-bottom: 10px;
    }
    > .el-row {
      margin-top: 10px;
      margin-bottom: -10px;
      .el-col {
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }
    .el-card {
      .el-steps{
        max-width: 700px;
        margin: 16px auto;
      }
    }
    .el-form {
      width: 700px;
      margin: 40px auto;
    }
    .btn-bottom{
        margin-top: 50px;
    }
    .steps-action {
      margin-top: 24px;
    }
  }
</style>
