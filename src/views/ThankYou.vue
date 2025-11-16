<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
    <div class="bg-white shadow-lg rounded-xl p-10 max-w-lg text-center">

      <h1 class="text-4xl font-bold text-indigo-600 mb-4">
        Thank You!
      </h1>

      <p class="text-gray-700 text-lg mb-6">
        This page is not used until we build a real backend or pay a fee to Formspree.
      </p>

      <router-link
        to="/"
        class="inline-block mt-6 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 transition"
      >
        Return to Home
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: "ThankYou",
};
</script>
