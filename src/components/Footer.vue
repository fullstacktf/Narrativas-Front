<template>
  <footer class="footer bg-black text-gray">
    <!--bg-red-900-->
    <div class="title">
      <img
        src="../assets/img/logo_completo.png"
        class="w-52 h-40"
        alt="ROLLIFY"
      />
    </div>

    <div class="nav space-x-10 mb-10 -mt-5">
      <a href="" class="hover:text-white hover:bg-primaryColor p-3 rounded"
        >About us</a
      >
      <a href="" class="hover:text-white hover:bg-primaryColor p-3 rounded"
        >Privacy Policy</a
      >
      <a href="" class="hover:text-white hover:bg-primaryColor p-3 rounded"
        >Terms of Service</a
      >
      <a href="" class="hover:text-white hover:bg-primaryColor p-3 rounded"
        >Security</a
      >
    </div>
    <div class="media flex justify-center space-x-10 text-2xl">
      <a href="https://twitter.com/"
        ><i class="fa fa-twitter hover:text-white"></i
      ></a>
      <a href="https://www.instagram.com/"
        ><i class="fa fa-instagram hover:text-white"></i
      ></a>
      <a href="https://github.com/fullstacktf/Narrativas-Front"
        ><i class="fa fa-github hover:text-white"></i
      ></a>
      <a href="https://www.facebook.com/"
        ><i class="fa fa-facebook hover:text-white"></i
      ></a>
    </div>
    <div class="copyright flex justify-start ml-4 pb-4 text-xs">
      <p>
        ©<span>{{ currentYear }}</span> Rollify. All rights reserved
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: getCurrentYear(),
    };
  },
};

const getCurrentYear = () => {
  const date = new Date();
  return date.getFullYear();
};
</script>
<!--
<style scoped>
.footer{
    background-color: var(--black);
    color: gray;
}
</style>-->