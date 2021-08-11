<template>
  <div class="m-3">
    <div v-if="loading == true" class="col-lg-1 mt-5 mx-auto text-center">
        <div
          class="spinner-grow"
          style="width: 3rem; height: 3rem;"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    <router-link to="/courses">
      <div class="px-3 m-3 back">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
      </div>
    </router-link>
    <div class="row justify-content-center text-center">
      <div
        @click="changeIndex(index)"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        class="art p-3 m-2 my-3"
        v-for="(art, index) in arts"
        :key="art.id"
      >
        {{ art.courseName }}
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      v-for="art  in arts"
      :key="art.id"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ arts[count].courseName }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div
              class="p-2"
              v-for="(subject, index) in arts[count].subjects"
              :key="index"
            >
              {{ subject }}
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted } from "vue";
import { ref } from "vue";

export default {
  setup() {
    let arts = ref(null);
    let count = ref(0);
    let loading = ref(false);
    onMounted(() => {
      loading.value = true;
      fetch(
        "https://brainstorm-app-io.herokuapp.com/api/course/get-arts-courses"
      )
        .then((response) => response.json())
        .then((data) => {
          arts.value = data.courses;
        //   console.log(arts);
        loading.value = false;
        });
    });
    function changeIndex(index) {
      count.value = index;
    //   console.log(count.value);
    }
    return { arts, changeIndex, count, loading };
  },
};
</script>
<style scoped>
.art {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  width: 30%;
}
a {
  color: #114b5f;
}
.btn{
  color: white;
  background: #114b5f;
}
@media (max-width: 600px) {
  .art {
    width: 90%;
  }
}
</style>
