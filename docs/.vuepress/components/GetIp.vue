<template>
  <div class="ip">
    位置：{{region}}<br />
    你的IP地址：{{ip}}
  </div>
</template>

<script>
export default {
  name: 'GetIp',
  data() {
    return {
      ip: "",
      region: ""
    }
  },
  created() {
    this.getIpAdress()
  },
  methods:{
    async getIpAdress() {
      const res = await fetch('https://ipapi.co/json/')
      const resp = await res.json()
      const {ip, region} = resp
      console.log(resp);
      this.ip = ip
      this.region = region
    }
  }
}
</script>

<style scoped>
  .ip {
    text-align: center;
    margin-bottom: 20px;
    color: #4e6e8e;
  }
</style>