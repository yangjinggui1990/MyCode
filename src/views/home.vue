<template>
  <el-button @click="add">Home</el-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: "Home",
  isNeedVuex: true,
  setup() {
   const store = useStore();
   const router = useRouter();
   const add = () => {
     store.dispatch('receive')
     router.push('about')
   }
    return {
      add
    };
  },
});
</script>

<style>
</style>