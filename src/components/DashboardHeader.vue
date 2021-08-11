<template>
  <div>
    <nav class="px-5 d-flex justify-content-between p-2">
      <div class="logo pt-1">Brainstorm</div>
      <div class="d-flex">
          <div class="avatar p-1">AE</div>
          <img src="@/assets/icons/ri_logout-circle-r-fill.png" alt="">
      </div>
    </nav>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.logo {
  font-family: "Righteous";
}
img{
    width: 35px;
    height: 35px;
}
nav {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.avatar{
    background: #CEB32A;
    color: white;
    border-radius: 100%;
    width: 33px;
    height: 33px;
    text-align: center;
}
</style>
