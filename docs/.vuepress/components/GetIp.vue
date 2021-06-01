<template>
  <div class="container">
    <div class="main">
      <div class="title">Welcome to Cyan's blog</div>
      <div class="motto">{{ messageZh }}</div>
      <div class="motto">{{ message }}</div>
    </div>
    <div class="ip">
      位置：{{ region }}<br />
      你的IP地址：{{ ip }}
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
.main .title {
}
.ip {
  text-align: center;
  margin-bottom: 20px;
  color: #4e6e8e;
}
</style>
