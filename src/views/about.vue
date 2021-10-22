<template>
  <div>About</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from 'vuex'
export default defineComponent({
  name: "About",
  isNeedVuex: true,
  setup() {
    const store = useStore();
    return { 
      
    };
  },
});
</script>

<style>
</style>