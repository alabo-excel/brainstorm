<template>
  <div class="home">
    <HeaderNav />
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/assets/img/hero.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h2>
                The more that you read, the more things you will know, the more
                that you learn, the more places you’ll go.
              </h2>
              <h2>– Dr. Seuss</h2>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="@/assets/img/slider-2.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h2>
                The more that you read, the more things you will know, the more
                that you learn, the more places you’ll go.
              </h2>
              <h2>– Dr. Seuss</h2>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="@/assets/img/slider-1.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h2>
                The more that you read, the more things you will know, the more
                that you learn, the more places you’ll go.
              </h2>
              <h2>– Dr. Seuss</h2>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div class="row about justify-content-center text-center p-5 my-3">
      <div class="col-lg-5">
        <h1>About</h1>
        <p>
          We are here to asist you in your career choice so you can get the
          bright future you deserve by guiding you in choosing the accredited
          universities and letting you know subjects to that back up each
          courses you might want to choose
        </p>
      </div>
    </div>
    <div class="row justify-content-center p-5 faq mt-5">
      <div class="col-lg-8">
        <div class="text-center py-3">
          <h1>FAQ's</h1>
        </div>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Is it true that only those above 16 can gain admission into the
                university?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Is it true that only those above 16 can gain admission into the
                university?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Is it true that only those above 16 can gain admission into the
                university?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row footer px-5 p-5 justify-content-evenly">
      <div class="col-lg-5">
        <div class="logo">Brainstorm</div>
        <p class="mt-3">
          We are here to asist you in your career choice so you can get the
          bright future you deserve by guiding you in choosing the accredited
          universities
        </p>
      </div>
      <div class="col-lg-2">
        <h6>Join our community</h6>
        <div class="d-flex justify-content-between">
          <div class="icon p-1">
            <img src="@/assets/icons/bx_bxl-facebook.png" alt="" />
          </div>
          <div class="icon p-1">
            <img src="@/assets/icons/ei_sc-twitter.png" alt="" />
          </div>
          <div class="icon p-1">
            <img src="@/assets/icons/bx_bxl-slack.png" alt="" />
          </div>
          <div class="icon p-1">
            <img src="@/assets/icons/ei_sc-telegram.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderNav from "@/components/HeaderNav.vue";

export default {
  name: "Home",
  components: {
    HeaderNav,
  },
};
</script>
<style scoped>
.carousel-caption {
  top: 30%;
}
/* img {
  height: 100vh;
} */

h1 {
  color: #011627;
}
.faq,
.accordion-item,
.accordion-button {
  background: #ceb32a;
}
.accordion-item,
.accordion-button {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.accordion-item {
  margin-bottom: 20px;
}
.accordion-button {
  color: white;
  font-weight: 700;
}
.footer {
  background: #011627;
  color: white;
}
.logo {
  font-family: "Righteous";
}
.footer p {
  font-size: 15px;
}
.icon {
  background-color: #ceb32a;
  width: 35px;
  border-radius: 10px;
}
.icon img {
  width: 30px;
  height: 30px;
}
h2 {
  text-shadow: 2px 2px #4e4d4d;
}
@media (max-width: 600px) {
  img{
    height: auto;
  }
}

</style>
