<template>
  <div>
    <DashboardHeader />
    <main>
      <div class="row justify-content-center">
        <div></div>
      </div>
    </main>
    <DashboardNav />
  </div>
</template>
<script>
import DashboardHeader from "@/components/DashboardHeader.vue";
import DashboardNav from "@/components/DashboardNav.vue";

import { onMounted } from "vue";
import { ref } from "vue";

export default {
  components: {
    DashboardHeader,
    DashboardNav,
  },
  setup() {
    let arts = ref(null);
    let science = ref(null);
    onMounted(() => {
      fetch(
        "https://brainstorm-app-io.herokuapp.com/api/course/get-arts-courses"
      )
        .then((response) => response.json())
        .then((data) => {
          arts.value = data.courses;
          console.log(arts);
        });
      fetch(
        "https://brainstorm-app-io.herokuapp.com/api/course/get-sciences-courses"
      )
        .then((response) => response.json())
        .then((data) => {
          science.value = data.courses;
          console.log(science);
        });
    });
    return { arts, science };
  },
};
</script>
