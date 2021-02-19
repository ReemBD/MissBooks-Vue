<template>
  <header class="app-header">
    <div class="main-layout flex space-between align-center">
      <div class="logo">
        <p>Books</p>
      </div>
      <nav>
        <router-link to="/" exact>Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/book">Books</router-link>
      </nav>
    </div>
  </header>
</template>
