<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Hello World!" />
      <button
        class="btn btn-primary"
        data-bs-target="#collapseTarget"
        data-bs-toggle="collapse"
      >
        Bootstrap collapse
      </button>
      <div class="collapse py-2" id="collapseTarget">
        This is the toggle-able content!
      </div>
    </div>
  </header>
</template>
