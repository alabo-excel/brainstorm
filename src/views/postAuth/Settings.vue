<template>
  <div>
    <DashboardHeader />
    <main>
      <div class="row justify-content-center p-5">
        <div class="col-lg-4">
          <div class="p-3 avatar mx-auto">AE</div>
          <div>
            <span class="px-1">Name</span>
            <input
              class="p-2 mt-2"
              type="text"
              value="Alabo Excel"
              placeholder="Enter new name"
            />
          </div>
          <div class="mt-4">
            <span class="px-1">Email</span>
            <input
              class="p-2 mt-2"
              type="text"
              value="alaboexcel@gmail.com"
              placeholder="Enter new Email"
            />
          </div>
          <div class="mt-5">
              <input class="p-2 btn" type="button" value="UPDATE">
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

export default {
  components: {
    DashboardHeader,
    DashboardNav,
  },
};
</script>
<style scoped>
.avatar {
  border-radius: 100%;
  background: #ceb32a;
  font-size: 60px;
  text-align: center;
  color: white;
  width: 120px;
}
input {
  width: 100%;
  border: none;
  background: #e5e5e5;
  border-radius: 10px;
}
.btn{
    background: #ceb32a;
    color: white;
}
</style>
