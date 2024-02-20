<template>
  <div>
    <button @click="getDeviceUUID">获取设备UUID</button>
    <p v-if="uuid">设备識別碼：{{ uuid }}</p>
  </div>
</template>

<script>

function generateUUID() {
  var d = new Date().getTime();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
    d += performance.now(); // 使用性能API来增强唯一性
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

export default {
  data() {
    return {
      uuid: null
    };
  },
  methods: {
    async getDeviceUUID() {
      try {
        // 这里可以使用浏览器提供的其他 API 来获取设备 UUID
        // 例如，你可以使用客户端生成的唯一标识符（UUID）来作为设备标识
        this.uuid = generateUUID(); // 生成 UUID 的函数示例，你需要根据实际情况来实现
      } catch (error) {
        console.error('Error getting device UUID:', error);
      }
    },
    
    
  }
};
</script>
