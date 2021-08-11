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
      <div v-else class="row justify-content-center">
        <div class="p-4 px-5 col-12">
          <input
            placeholder="Search"
            type="text"
            v-model="search"
            @change="filterUni()"
          />
        </div>
        <div
          class="col-lg-6 uni-card d-flex p-3 m-3"
          v-for="(university, index) in universities"
          :key="index"
        >
          <img :src="university.logo" alt="" />
          <div class="ml-2 p-2">
            <div>{{ university.name }}</div>
            <div>{{ university.motto }}</div>
            <a :href="university.web">
              <button class="p-1 px-3">Visit</button>
            </a>
          </div>
        </div>
      </div>
      <div>
        
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
    let universities = ref(null);
    let filtered = ref([]);
    let loading = ref(false);
    let search = ref("");
    onMounted(() => {
      loading.value = true;
      fetch("https://nigerian-universities.herokuapp.com")
        .then((response) => response.json())
        .then((data) => {
          universities.value = data;
          // console.log(universities);
          loading.value = false;
          // console.log(loading)
        });
    });
    function filterUni() {
      fetch("https://nigerian-universities.herokuapp.com")
        .then((response) => response.json())
        .then((data) => {
          filtered.value = data;
          let allData = [];
          filtered.value.forEach((element) => {
            if (element.name.includes(search.value)) {
              allData.push(element);
              universities.value = allData;
            }
          });
        });
    }
    return {
      universities,
      loading,
      search,
      filterUni,
    };
  },
};
</script>
<style scoped>
.uni-card {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 30%;
  border-radius: 10px;
}
img {
  width: 50px;
  height: 50px;
}
button {
  border-radius: 10px;
  border: none;
  background: #ceb32a;
  color: white;
}
@media (max-width: 600px) {
  .uni-card {
    width: 90%;
  }
}
</style>
