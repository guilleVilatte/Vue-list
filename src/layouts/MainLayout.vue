<template>
  <div class="layout">
    <Sidebar />
    <div class="content">
      <HeaderBar />
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/components/SideBar.vue'
import HeaderBar from '@/components/HeaderBar.vue'
</script>
