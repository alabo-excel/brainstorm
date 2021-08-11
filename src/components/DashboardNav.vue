<template>
  <div>
    <nav class="p-3 text-white text-center px-lg-5">
      <div class="d-flex justify-content-evenly mx-lg-5 px-lg-5">
        <router-link to="/universities" exact active-class="active">
          <div>
            <img src="@/assets/icons/fa-solid_university.png" alt="" />
            <span class="p-2">Universities</span>
          </div>
        </router-link>
        <router-link to="/search" exact active-class="active">
          <div>
            <img src="@/assets/icons/bx_bxs-search-alt-2.png" alt="" />
            <span class="p-2">Search</span>
          </div>
        </router-link>
        <router-link to="/courses" exact active-class="active">
          <div>
            <img src="@/assets/icons/ls_college.png" alt="" />
            <span class="p-2">Courses</span>
          </div>
        </router-link>
        <router-link to="settings" exact active-class="active">
          <div>
            <img src="@/assets/icons/ci_settings-filled.png" alt="" />
            <span class="p-2">Settings</span>
          </div>
        </router-link>
      </div>
    </nav>
  </div>
</template>
<style scoped>
nav {
  position: fixed;
  width: 100%;
  background: #011627;
  bottom: 0;
}
img {
  width: 30px;
  height: 30px;
}
.active img {
  background: #CEB32A;
  border-radius: 100%;
  padding: 2px;
}
.active span{
  color: #CEB32A;
}
a{
  color: white;
  text-decoration: none;
}
@media (max-width: 600px) {
  span {
    display: none;
  }
}
</style>
