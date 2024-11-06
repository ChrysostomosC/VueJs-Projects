<template>
    <div>
      <h1>SOKRATES TAVERNA</h1>
    <h2>en liten bit av medelhavet i Krokslätt!</h2>

      <!-- Using require() to resolve the image path -->
      <img alt="sokrates taverna" :src="imageSrc">
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        // Reference the image using require
        imageSrc: require('@/assets/sokrates.webp')
      }
    }
  }
</script>
  


<style scoped>
  /* Add any styles for your component here */
</style>
  