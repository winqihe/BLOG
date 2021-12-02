
<template>
    <div class="index">
            <NavBar></NavBar>
             <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="created"
        label="创建时间"
        width="180">
      </el-table-column>
        <el-table-column
        prop="userId"
        label="创建人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        width="300">
      </el-table-column>
      <el-table-column
        prop="description"
        label="简介">
      </el-table-column>
    </el-table>
    </div>
</template>
<script>
    import NavBar from "../components/NavBar";
       export default {
      components: {NavBar},
      data() {
        return {
          tableData: []
        }
      },
     created() {
            const _this = this
            _this.axios.get('http://localhost:7099/blogs').then(function(resp){
                console.log(resp)
                _this.tableData = resp.data.data.records
            })
     }
    }
</script>


<style scoped>
</style>
