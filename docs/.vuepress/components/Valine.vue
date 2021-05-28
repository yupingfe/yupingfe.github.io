<template>
  <div id="vcomments"></div>
</template>

<script>
export default {
  name: "Valine",
  mounted: function() {
    // require window
    const Valine = require("valine");
    if (typeof window !== "undefined") {
      this.window = window;
      window.AV = require("leancloud-storage");
    }

    new Valine({
      el: "#vcomments",
      appId: "uQlkXCJ6JMPT69J972o38X8L-MdYXbMMI", // your appId
      appKey: "Huhx2YW3euF2tCXXzzDtdcMe", // your appKey
      notify: false,
      verify: false,
      avatar: "mm",
      placeholder: "leave your comment here",
    });
  },
};
</script>
