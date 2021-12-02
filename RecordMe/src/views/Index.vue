

<template>
    <div class="index">
            <NavBar></NavBar>
        <div class="content">
        </div>
    </div>
</template>

<script>
    import NavBar from "../components/NavBar";

    export default{
      components: {NavBar},
      data() {
      return {

      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
.index {

}
.content {
    background:url("../assets/01hero.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
}

.el-menu{
    background-color:white;      
}
    .header {
        height: 94px;
        margin: 0 auto;
    }
    
    .head {
        height: 94px;
        overflow: hidden;
        margin: 0 auto;
        width: 1000px;
    }
    
    .logo {
        width: 309px;
        height: 65px;
        float: left;
        margin-top: 15px;
    }
    
    .head_r {
        float: right;
        height: auto;
        overflow: hidden;
        width: 260px;
    }
    
    .homepage {
        line-height: 30px;
        height: 30px;
        width: 260px;
        float: right;
    }
    
    .homepage ul {
        overflow: hidden;
    }
    
    .homepage ul li.home_line {

        width: 2px;
        height: 15px;
        margin: 0;
        margin-top: 7px;
    }
    
    .homepage ul li {
        float: left;
        margin: 0 15px;
        margin-top: 5px;
    }
    
    ul {
        margin: 0;
        padding: 0;
    }
    
    li {
        list-style: none;
        display: list-item;
    }
    
    .search {
        margin-top: 20px;
        overflow: hidden;
        width: 205px;
        height: 30px;
        float: right;
    }
    
    .querystyle1020386 {
        border-top: medium none;
        height: 29px;
        border-right: medium none;
        width: 150px;
        vertical-align: middle;
        background-color: #fff;
        border-bottom: medium none;
        color: #fff;
        padding-left: 5px;
        border-left: medium none;
        line-height: 29px;
    }
</style>