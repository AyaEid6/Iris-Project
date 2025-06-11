<template>
  <div class="not-found">
    <div class="content d-flex flex-column align-items-center">
      <h1 class="error-code">404</h1>
      <h2 class="message">Page Not Found</h2>
      <p class="description text-center">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <router-link to="/" class="home-button">Go to Homepage</router-link>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff0f2;
  color: #B1202F;
  padding: 2rem;
  text-align: center;
}

.content {
  max-width: 500px;
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.error-code {
  font-size: 6rem;
  font-weight: bold;
  margin: 0;
  color: #B1202F;
}

.message {
  font-size: 2rem;
  margin: 0.5rem 0;
}

.description {
  font-size: 1rem;
  color: #6b0e1b;
  margin-bottom: 2rem;
}

.home-button {
  display: inline-block;
  background-color: #B1202F;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.home-button:hover {
  background-color: #941c28;
}
</style>
