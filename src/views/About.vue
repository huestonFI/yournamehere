<template>
  <div class="bg-gray-50 min-h-screen text-gray-900">
    <!-- Page Header -->
    <section class="bg-white py-16 border-b">
      <div class="max-w-5xl mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold text-indigo-600">About Us</h1>
        <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We help organizations modernize, automate, and scale their data
          operations through expert ETL and system integration services.
        </p>
      </div>
    </section>

    <!-- Story / Mission -->
    <section class="py-20">
      <div class="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold">Our Mission</h2>
          <p class="mt-4 text-gray-700 leading-relaxed">
            Modern businesses depend on fast, reliable, and connected data systems.
            Our mission is to help teams unlock the full potential of their
            data by creating scalable, efficient pipelines—built on proven best practices.
          </p>
          <p class="mt-4 text-gray-700 leading-relaxed">
            I crutched the fuck out of AI to build this entire website if it isn't obvious.
          </p>
        </div>

        <div class="bg-white shadow-md rounded-lg p-8">
          <h3 class="text-xl font-semibold text-indigo-600">What We Believe</h3>
          <ul class="mt-4 space-y-3 text-gray-700">
            <li>✔ Data should be accessible — not siloed</li>
            <li>✔ Automation reduces errors and increases reliability</li>
            <li>✔ Good data pipelines enable better decisions</li>
            <li>✔ Integration doesn’t need to be painful</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Expertise Section -->
    <section class="py-20 bg-white border-t border-b">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center">Our Expertise</h2>

        <div class="mt-12 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <div class="text-indigo-600 text-5xl">🛠️</div>
            <h3 class="mt-4 text-xl font-semibold">ETL Architecture</h3>
            <p class="mt-2 text-gray-600">
              Designing scalable, maintainable ETL pipelines tailored to your data needs.
            </p>
          </div>

          <div>
            <div class="text-indigo-600 text-5xl">☁️</div>
            <h3 class="mt-4 text-xl font-semibold">Cloud Integration</h3>
            <p class="mt-2 text-gray-600">
              Connecting modern cloud platforms such as AWS, Azure, and GCP.
            </p>
          </div>

          <div>
            <div class="text-indigo-600 text-5xl">🔄</div>
            <h3 class="mt-4 text-xl font-semibold">Automation & Workflow Design</h3>
            <p class="mt-2 text-gray-600">
              Building event-driven systems that eliminate manual processes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gray-100 text-center">
      <h2 class="text-3xl font-bold">Want to Work With Us?</h2>
      <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
        Whether you're integrating new platforms, migrating data, or automating
        your workflows, we're ready to help.
      </p>

      <RouterLink
        to="/contact"
        class="inline-block mt-10 px-10 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-500 transition"
      >
        Contact Us
      </RouterLink>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>
