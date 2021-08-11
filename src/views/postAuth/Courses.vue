<template>
  <div>
    <DashboardHeader />
    <main>
      <div class="row login">
        <div class="col-lg-6 left-side">
          <img src="@/assets/img/slider-1.jpg" alt="" />
          <div class="overlay"></div>
          <div class="quote text-center p-5">
            <h2>
              The more that you read, the more things you will know, the more
              that you learn, the more places you’ll go.
            </h2>
            <h2 class="author">– Dr. Seuss</h2>
          </div>
        </div>
        <div class="col-lg-6 form p-5 text-center">
          <div class="m-auto">
            <router-link to="/courses/arts">
              <div class="my-5">
                <input class="p-3" type="button" value="Arts" />
              </div>
            </router-link>
            <router-link to="/courses/science">
              <div class="my-5">
                <input class="p-3" type="button" value="Science" />
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </main>
    <DashboardNav />
  </div>
</template>
<script>
import DashboardHeader from "@/components/DashboardHeader.vue";
import DashboardNav from "@/components/DashboardNav.vue";
import { ref } from "vue";

export default {
  components: {
    DashboardHeader,
    DashboardNav,
  },
  setup() {
    let arts = ref(false);
    let science = ref(false);
    return {
      arts,
      science,
    };
  },
};
</script>
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

input {
  width: 80%;
  border: none;
  background: #011627;
  border-radius: 10px;
  color: white;
}
input:focus {
  outline: none;
}
a {
  color: #ceb32a;
}
span {
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
