<template>
  <el-dialog
    :title="!dataForm.id ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="80px">
      <el-form-item label="角色名称" prop="roleName">
        <el-input v-model.trim="dataForm.roleName" placeholder="角色名称"></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input v-model="dataForm.remark" placeholder="备注"></el-input>
      </el-form-item>
      <el-form-item size="mini" label="授权">
        <el-tree
          :data="menuList"
          :props="menuListTreeProps"
          node-key="menuId"
          ref="menuListTree"
          :default-expand-all="true"
          show-checkbox>
        </el-tree>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  import { treeDataTranslate } from '@/utils'
  export default {
    data () {
      return {
        visible: false, // 新增、更新弹窗是否可见
        menuList: [], // 所有menus
        checked: [], // 选中节点
        menuListTreeProps: {
          label: 'name',
          children: 'children'
        },
        dataForm: { // 角色的基本信息
          id: 0,
          roleName: '',
          remark: ''
        },
        dataRule: {
          roleName: [
            { required: true, message: '角色名称不能为空', trigger: 'blur' }
          ]
        },
        tempKey: -666666 // 临时key, 用于解决tree半选中状态项不能传给后台接口问题. # 待优化
      }
    },
    methods: {
      /**
       * 请求所有menu，并把flat转为tree
       *  */
      async getAllMenus () {
        try {
          // 1 请求所有menu
          let {data} = await this.$http({ // 1 请求所有角色
            url: this.$http.adornUrl('/sys/menu/list'),
            method: 'get',
            params: this.$http.adornParams()
          })
          // 2 flat转为tree
          this.menuList = treeDataTranslate(data, 'menuId') // Flat数据转为tree
        } catch (err) {
          console.log(err)
        }
      },
      /**
       * 获得角色的信息及该角色拥有权限菜单
       *  */
      async getRoleInfo (id) {
        try {
          let {data} = await this.$http({
            url: this.$http.adornUrl(`/sys/role/info/${this.dataForm.id}`),
            method: 'get',
            params: this.$http.adornParams()
          })
          // console.info(data)
          if (data && data.code === 0) { // 改变dataForm\checked数据
            this.dataForm.roleName = data.role.roleName
            this.dataForm.remark = data.role.remark
            let idx = data.role.menuIdList.indexOf(this.tempKey)
            if (idx !== -1) {
              // 把tempKey: -666666，及之后的半选节点删除。半选的节点可能是导航菜单
              data.role.menuIdList.splice(idx, data.role.menuIdList.length - idx)
            }
            this.checked = data.role.menuIdList
          }
        } catch (e) {
          console.log(e)
        }
      },
      /**
       * 3 重置表单、清空树的选中项，设置回显数据
       *  */
      show () {
        this.visible = true
        this.$nextTick(() => {
          // if (!this.dataForm.id) { // 新增重置表单
          //   this.$refs['dataForm'].resetFields()
          // }
          // this.$refs.menuListTree.setCheckedKeys([])
          if (this.checked) { // 设置全选节点，半选的在getRoleInfo()方法中已过滤了
            this.$refs.menuListTree.setCheckedKeys(this.checked)
          }
        })
      },
      // 初始化弹窗
      async init (id) {
        this.checked = []
        this.dataForm = {}
        this.dataForm.id = id || 0 // 新增id为空，赋值为0
        await this.getAllMenus()
        // 获取修改数据
        if (this.dataForm.id) {
          await this.getRoleInfo(this.dataForm.id)
        }
        // 渲染
        this.show()
      },
      // 表单提交
      dataFormSubmit () {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            this.$http({
              url: this.$http.adornUrl(`/sys/role/${!this.dataForm.id ? 'save' : 'update'}`),
              method: 'post',
              data: this.$http.adornData({
                'roleId': this.dataForm.id || undefined,
                'roleName': this.dataForm.roleName,
                'remark': this.dataForm.remark,
                // 全选节点,间隔字符'-666666',半选节点
                'menuIdList': [].concat(this.$refs.menuListTree.getCheckedKeys(), [this.tempKey], this.$refs.menuListTree.getHalfCheckedKeys())
              })
            }).then(({data}) => { // 从返回结果中取data属性
              if (data && data.code === 0) {
                this.$message({
                  message: '操作成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.checked = []
                    this.dataForm = {}
                    this.visible = false
                    this.$emit('refreshDataList')
                  }
                })
              } else {
                this.$message.error(data.msg)
              }
            })
          }
        })
      }
    }
  }
</script>
