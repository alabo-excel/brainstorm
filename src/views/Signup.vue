<template>
  <div class="row login">
    <div class="col-lg-6 left-side">
      <img src="@/assets/img/slider-1.jpg" alt="" />
      <div class="overlay"></div>
      <div class="quote text-center p-5">
        <h2>
          Live as if you were to die tomorrow. Learn as if you were to live
          forever.
        </h2>
        <h2 class="author">― Mahatma Gandhi</h2>
      </div>
    </div>
    <div class="col-lg-6 form p-5 text-center">
      <div class="mx-5 my-auto">
        <div class="bg-white m-lg-5 p-5 rounded">
          <h5>Signup</h5>
          <div class="my-5">
            <input class="p-2" type="text" placeholder="Name" />
          </div>
          <div class="my-5">
            <input class="p-2" type="text" placeholder="Email" />
          </div>
          <div class="my-5">
            <input class="p-2" type="text" placeholder="Password" />
          </div>
          <div class="my-4">
            <input class="p-2 btn" type="button" value="SIGNUP" /><br>
            <span>Already have an account? <router-link to="/login">Login</router-link></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
img {
  width: 100%;
  height: 100vh;
}
.overlay {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100vh;
  background: #011627;
  opacity: 0.5;
}
.row > * {
  padding-right: 0px !important;
  padding-left: 0px !important;
}
.login {
  background: #011627;
  height: 100vh;
}
input {
  width: 80%;
  border: none;
  background: #e5e5e5;
  border-radius: 10px;
}
input:focus {
  outline: none;
}
.btn {
  background: #ceb32a;
  color: white;
}
span{
    font-size: 12px;
}
a{
    color: #ceb32a;
}
.quote {
  position: absolute;
  top: 30%;
  width: 50%;

  z-index: 10;
  color: white;
}
.quote .author {
  color: #ceb32a;
}
@media (max-width: 600px) {
  .left-side {
    display: none;
  }
  input {
    width: 100%;
  }
}
</style>
