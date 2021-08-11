<template>
  <div class="row login">
    <div class="col-lg-6 left-side">
      <img src="@/assets/img/slider-1.jpg" alt="" />
      <div class="overlay"></div>
      <div class="quote text-center p-5">
        <h2>
          The more that you read, the more things you will know, the more that
          you learn, the more places you’ll go.
        </h2>
        <h2 class="author">– Dr. Seuss</h2>
      </div>
    </div>
    <div class="col-lg-6 form p-5 text-center">
      <div class="mx-5 my-auto">
        <div class="bg-white m-lg-5 p-5 rounded">
          <h5>Login</h5>
          <div class="my-5">
            <input class="p-2" type="text" placeholder="Email" />
          </div>
          <div class="my-5">
            <input class="p-2" type="text" placeholder="Password" />
          </div>
          <div class="my-4">
            <input class="p-2 btn" type="button" value="LOGIN" /> <br />
            <span
              >Dont have an account?
              <router-link to="/signup">Signup</router-link></span
            >
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
a{
  color: #ceb32a;
}
span{
  font-size: 12px;
}
.btn {
  background: #ceb32a;
  color: white;
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
