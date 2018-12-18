<template>
  <el-container>
    <el-header>
      <home-header></home-header>
    </el-header>
    <el-row style="margin: 1em">
      <el-col :span="16" :offset="4">
        <el-container>
          <el-main style="margin-right:6em ">
            <!-- 右边主体[[ -->
            <router-view></router-view>
            <!-- 右边主体]] -->
          </el-main>
          <el-aside width="300px">Aside</el-aside>
        </el-container>
      </el-col>
    </el-row>
    <el-footer>
      <home-footer></home-footer>
    </el-footer>
  </el-container>
</template>

<style >
  body {
    background-color: #eee;
    color: #333;
    margin: 0;
    padding: 0;
  }
  .el-header, .el-footer {
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

<script>
  import HomeHeader from './components/header.vue'
  import HomeFooter from './components/footer.vue'
  export default{
    name:"Home",
    components:{
      HomeHeader,
      HomeFooter
    }
  }
</script>
