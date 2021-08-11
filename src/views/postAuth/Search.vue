<template>
  <div>
    <DashboardHeader />
    <main>
      <div v-if="loading == true" class="col-lg-1 mt-5 mx-auto text-center">
        <div
          class="spinner-grow"
          style="width: 3rem; height: 3rem;"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div
        class="row justify-content-center d-flex text-center mt-5">
          <div
            class="p-2 m-2 art" v-for="course in courses" :key="course.id">
            {{ course.courseName }}
        </div>
      </div>
    </main>
    <DashboardNav />
  </div>
</template>
<script>
import DashboardHeader from "@/components/DashboardHeader.vue";
import DashboardNav from "@/components/DashboardNav.vue";

// import { onMounted } from "vue";
// import { ref } from "vue";

export default {
  components: {
    DashboardHeader,
    DashboardNav,
  },
  data () {
    return {
      arts: [],
      sciences: [],
      courses: [],
      sortedCourses: [],
      loading: false
    }
  },
  mounted () {
    this.loading = true
   fetch(
        "https://brainstorm-app-io.herokuapp.com/api/course/get-arts-courses"
      )
        .then((response) => response.json())
        .then((data) => {
          this.arts = data.courses;
          // console.log(arts);
        });
      fetch(
        "https://brainstorm-app-io.herokuapp.com/api/course/get-sciences-courses"
      )
        .then((response) => response.json())
        .then((data) => {
          this.sciences = data.courses;
          // console.log(science);
          this.loading = false
        });
  },
  watch: {
    sciences () {
      const result = this.sciences.concat(this.arts)
      this.courses = this.shuffle(result)
      console.log(result)
    }
  },
  methods: {
     shuffle(array) {
      let currentIndex = array.length,  randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }

      return array;
    }
  }
  // setup() {
  //   let arts = ref([]);
  //   let sciences = ref(null);
  //   let courses = ref(null)
  //   onMounted(() => {
  //     fetch(
  //       "https://brainstorm-app-io.herokuapp.com/api/course/get-arts-courses"
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         arts.value = data.courses;
  //         // console.log(arts);
  //       });
  //     fetch(
  //       "https://brainstorm-app-io.herokuapp.com/api/course/get-sciences-courses"
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         sciences.value = data.courses;
  //         // console.log(science);
  //       });
  //   courses.value = arts.value.concat(sciences.value)
  //   console.log(courses.value)
  //   });
  //   return { arts, sciences, courses };
  // }
}
</script>
<style scoped>
.art {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  width: 30%;
}
</style>
