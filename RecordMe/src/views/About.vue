<template>
    <div>
        <NavBar></NavBar>
        <div id="back">
          <p>Record My life</p>
          <p>life is not only code!</p>
          <p>本项目已在gitee上开源，欢迎交流！</p>
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
    }
  } 
</script>

<style>
  #back {
    background:url("../assets/1.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
p{
  text-align: center;
  color: black;
}
</style>