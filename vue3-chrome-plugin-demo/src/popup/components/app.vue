<template>
  <div class="wrapper">
    <el-button type="danger" @click="test">测试按钮</el-button>
  </div>
</template>
<script setup>
const test = () => {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    function (tabs) {
      console.log(tabs)
      chrome.tabs.sendMessage(tabs[0].id, { popAction: 'Test' }, (data) => {
        console.log('回调',data)
      })
    }
  )
}
</script>
<style scoped>
.wrapper {
  width: 100px;
  height: 100px;
  background-color: rgb(248, 214, 242);
}
</style>
