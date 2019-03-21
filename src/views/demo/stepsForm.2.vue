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

    <el-steps :active="active" finish-status="success">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    <!-- 各步骤表单 -->
    <el-form  :model="dataForm" :rules="dataRule" ref="dataForm" label-width="80px">
      <el-form-item v-if="active == 0" label="姓名" prop="userName">
        <el-input v-model.trim="dataForm.userName" placeholder="登录帐号1"></el-input>
      </el-form-item>
      <el-form-item v-if="active == 1" label="爱好" prop="favirate">
        <el-input v-model.trim="dataForm.favirate" placeholder="爱好"></el-input>
      </el-form-item>
      <el-form-item v-if="active == 2" label="备注" prop="mark">
        <el-input v-model.trim="dataForm.mark" placeholder="备注"></el-input>
      </el-form-item>
    </el-form>

    <div class="steps-action">
      <el-button v-if="active < 2" type="primary" @click="next">
        Next
      </el-button>
      <el-button v-if="active == 2" type="primary" @click="done">
        Done
      </el-button>
      <el-button v-if="active > 0" style="margin-left: 8px" @click="prev">
        Previous
      </el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        active: 0,
        dataForm: {
          userName: '',
          favirate: '',
          mark: ''
        },
        // 验证规则
        dataRule: {
          userName: [
            { required: true, message: '用户名1不能为空', trigger: 'blur' }
          ],
          favirate: [
            { required: true, message: '爱好不能为空', trigger: 'blur' }
          ],
          mark: [
            { required: true, message: '用户名3不能为空', trigger: 'blur' }
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
        this.active--
      },
      done () {
        this.$refs[`dataForm`].validate((valid) => {
          if (valid) {
            // this.active++
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
      margin-top: -10px;
      margin-bottom: -10px;
      .el-col {
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }
    .steps-action {
      margin-top: 24px;
    }
  }
</style>
