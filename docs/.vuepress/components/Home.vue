<template>
  <div class="container">
    <div class="main">
      <transition name="fade">
        <div class="greeting">
          <h1>Hello.</h1>
          <div class="intro">
            I am a Web developer.<br />
            This site collects my study notes. Hope it helps you someway.
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div class="foot" v-show="ip">
        <div>
          {{ browser != "unknown" ? browser : "" }}
          {{ system != "unknown" ? system : "" }}
          {{ systemVs != "unknown" ? systemVs : "" }}
        </div>
        <div>Location: {{ region }}</div>
        <div>
          <span v-if="ipVersion === 'IPv4'">Your IP: </span>{{ ip }}({{
            ipVersion
          }})
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ua from "../public/ua"; // 浏览器UA判断组件
// import fetch from "node-fetch"; // 必须引入fetch，不然build时候会报错fetch undefined
export default defineComponent ({
  name: "Home",
  data() {
    return {
      ip: "",
      region: "",
      ipVersion: "",
      browser: "",
      systemVs: "",
      system: "",
    };
  },
  created() {
    this.getIpAdress();
  },
  mounted() {
    this.browser = ua().browser;
    this.systemVs = ua().systemVs;
    this.system = ua().system;
  },
  methods: {
    async getIpAdress() {
      const res = await fetch("https://ipapi.co/json/");
      const resp = await res.json();
      this.ip = resp.ip;
      this.region = resp.region;
      this.ipVersion = resp.version;
    },
  },
});
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
  /* background: url("../public/bg.svg") no-repeat; */
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.main {
  margin: 0 5vw;
  transform: translateY(-50%);
}
.main .greeting .intro {
  font-size: 1.6rem;
}
.foot {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  color: #4e6e8e;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.foot div {
  margin: 0 0.3rem;
}
@media (max-width: 500px) {
  .foot {
    flex-direction: column;
    align-items: center;
  }
}
/* 动画 */
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}
</style>
