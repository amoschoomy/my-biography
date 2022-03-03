<script setup lang="ts"></script>

<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarsExample11"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="mx-auto d-sm-flex d-block flex-sm-nowrap">
      <div class="collapse navbar-collapse text-center" id="navbarsExample11">
        <div class="navbar-nav">
          <router-link to="/" class="nav-item nav-link mx-5">Home</router-link>
          <router-link to="/about-me" class="nav-item nav-link mx-5"
            >About Me</router-link
          >
          <router-link to="/ExpAndEdu" class="nav-item nav-link mx-5"
            >Experience and Education</router-link
          >
          <router-link to="/ContactMe" class="nav-item nav-link mx-5"
            >Contact Me</router-link
          >
        </div>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>
