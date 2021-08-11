<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid px-5">
      <div class="navbar-brand" href="#">Brainstorm</div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Faq</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <router-link to="/signup">
            <button class="btn" type="submit">Sign up</button>
          </router-link>
        </form>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.navbar-brand {
  font-family: "Righteous";
}
.navbar {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: fixed;
  width: 100%;
  z-index: 10;
  background-color: white;
}
.btn {
  background-color: #ceb32a;
  color: white;
}
ul li {
  padding-right: 15px;
  padding-left: 15px;
}
</style>
