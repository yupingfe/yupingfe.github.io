<template>
  <div class="container">
    <div class="main">
      <transition name="fade">
        <div class="greeting" v-if="message">
          <div class="title">Welcome</div>
          <div class="motto" v-if="messageZh">{{ messageZh }}</div>
          <div class="motto" v-if="message != messageZh">{{ message }}</div>
        </div>
      </transition>
    </div>
    <div class="ip">
      <transition name="fade">
        <span v-if="region">位置：{{ region }}</span>
      </transition>
      <br />
      <transition name="fade">
        <span v-if="ip"> 你的IP地址：{{ ip }}</span>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetIp",
  data() {
    return {
      ip: "",
      region: "",
      message: "",
      messageZh: "",
    };
  },
  created() {
    this.getIpAdress();
    this.getMotto();
  },
  methods: {
    async getMotto() {
      const res = await fetch("https://starbucks-proxy.vercel.app/");
      const resp = await res.json();
      console.log(resp.data.messageZh);
      this.message = resp.data.message;
      this.messageZh = resp.data.messageZh;
    },
    async getIpAdress() {
      const res = await fetch("https://ipapi.co/json/");
      const resp = await res.json();
      this.ip = resp.ip;
      this.region = resp.region;
      console.log(resp);
    },
  },
};
</script>

<style>
.home {
  padding-left: 0 !important;
  margin: 0 !important;
  max-width: 100vh !important;
}
</style>
<style scoped>
.container {
  height: calc(100vh - 3.6rem);
  /* width: calc(100vw - 15px); */
  width: 100vw;
  background: url("../public/bg.svg") no-repeat;
  background-size: 100% 100%;
  /* border: 1px solid red; */
  /* background: olive; */
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.main {
  margin: auto;
  text-align: center;
}
.main .title {
  font-size: 2rem;
  margin-bottom: 1.2rem;
  font-weight: 700;
}

.ip {
  text-align: center;
  margin-bottom: 20px;
  color: #4e6e8e;
}
/* 动画 */
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}
</style>
