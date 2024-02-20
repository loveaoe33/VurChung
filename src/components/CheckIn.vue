<template>
    <div>
      <button @click="getDeviceInfo">获取设备信息</button>
      <p v-if="deviceInfo">
        设备識別碼：{{ deviceInfo.uuid }} <br>
        地理座標：{{ deviceInfo.latitude }}, {{ deviceInfo.longitude }}
      </p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        deviceInfo: null
      };
    },
    methods: {
      async getDeviceInfo() {
        try {
          const uuid = await this.getDeviceUUID();
          const { latitude, longitude } = await this.getGeoLocation();
          this.deviceInfo = { uuid, latitude, longitude };
        } catch (error) {
          console.error('Error getting device info:', error);
        }
      },
      async getDeviceUUID() {
        // 这里可以使用浏览器提供的 User Agent API 来获取设备識別碼
        // 这里只是示例，实际中需要根据浏览器类型来使用相应的 API
        return navigator.userAgent;
      },
      async getGeoLocation() {
        // 使用浏览器提供的地理定位 API 来获取地理座标
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            position => {
              resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              });
            },
            error => {
              reject(error);
            }
          );
        });
      }
    }
  };
  </script>
  