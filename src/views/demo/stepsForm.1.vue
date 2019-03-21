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
    <el-form v-if="active == 0" :model="dataForm1" :rules="dataRule1" ref="dataForm1" label-width="80px">
      <el-form-item label="用户名1" prop="userName1">
        <el-input v-model.trim="dataForm1.userName1" placeholder="登录帐号1"></el-input>
      </el-form-item>
    </el-form>
    <el-form v-if="active == 1" :model="dataForm2" :rules="dataRule2" ref="dataForm2" label-width="80px">
      <el-form-item label="用户名2" prop="userName2">
        <el-input v-model.trim="dataForm2.userName2" placeholder="登录帐号2"></el-input>
      </el-form-item>
    </el-form>
    <el-form  v-if="active == 2" :model="dataForm3" :rules="dataRule3" ref="dataForm3" label-width="80px">
      <el-form-item label="用户名3" prop="userName3">
        <el-input v-model.trim="dataForm3.userName3" placeholder="登录帐号3"></el-input>
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
        dataForm1: {
          userName1: ''
        },
        dataForm2: {
          userName2: ''
        },
        dataForm3: {
          userName3: ''
        },
        // 验证规则
        dataRule1: {
          userName1: [
            { required: true, message: '用户名1不能为空', trigger: 'blur' }
          ]
        },
        dataRule2: {
          userName2: [
            { required: true, message: '用户名2不能为空', trigger: 'blur' }
          ]
        },
        dataRule3: {
          userName3: [
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
        this.$refs[`dataForm${this.active + 1}`].validate((valid) => {
          if (valid) {
            this.active++
          }
        })
      },
      prev () {
        this.active--
      },
      done () {
        this.$refs[`dataForm${this.active + 1}`].validate((valid) => {
          if (valid) {
            // this.active++
            let params = {...this.dataForm1, ...this.dataForm2, ...this.dataForm3}
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
