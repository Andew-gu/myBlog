<template>
  <el-row style="height: 60px;background-color: white;margin-left: -20px;margin-right: -20px">
    <el-col :span="4" :offset="4" style="background-color: red">
      <div class="grid-content bg-purple">left</div>
    </el-col>
    <el-col :span="11" :offset="1">
      <div class="grid-content bg-purple-light">
        <el-menu class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">主页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">项目</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3" disabled>分享</el-menu-item>
          <el-submenu index="4">
            <template slot="title">更多</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>

          <div style="display: inline-block;line-height: 60px;float: right;margin-right: 10px">
            <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </el-menu>
      </div>
    </el-col>
  </el-row>
</template>

<style>

</style>

<script>
  export default{
    name:"HomeHeader",
    data(){
      return {
        input5:""
      }
    }
  }
</script>
