<template>
  <div>

    <!-- NAVBAR (shared) -->
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <!-- Clickable business name → Home -->
        <RouterLink to="/" class="text-2xl font-bold text-indigo-600 hover:text-indigo-700">
          [Your Name Here] <span class="text-gray-900">Data Integration Consulting</span>
        </RouterLink>

        <nav class="hidden md:flex space-x-8 text-gray-700">
          <RouterLink to="/services" class="hover:text-indigo-600">Services</RouterLink>
          <RouterLink to="/about" class="hover:text-indigo-600">About</RouterLink>
          <RouterLink to="/contact" class="hover:text-indigo-600">Contact</RouterLink>
        </nav>

        <button class="md:hidden px-3 py-2 border rounded text-gray-600">
          Menu
        </button>

      </div>
    </header>


    <!-- PAGE CONTENT (changes per route) -->
    <router-view />

    <!-- FOOTER (shared) -->
    <footer class="bg-white py-6 border-t mt-20">
      <div class="max-w-7xl mx-auto px-6 text-center text-gray-600">
        © 2025 [Your Name Here] Data Integration Consulting. All rights reserved.
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style></style>