<template>
  <div class="bg-gray-50 text-gray-900">

    <!-- HEADER BANNER -->
    <section class="bg-indigo-600 text-white py-20">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold">Our Services</h1>
        <p class="mt-4 text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto">
          High-quality data engineering, system integration, and automation solutions
          tailored to modern business needs.
        </p>
      </div>
    </section>

    <!-- SERVICES GRID -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">

        <h2 class="text-3xl font-bold text-center">What We Offer</h2>
        <p class="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          From building reliable ETL pipelines to automating complex workflows,
          we help organizations unlock the full value of their data.
        </p>

        <div class="mt-16 grid md:grid-cols-3 gap-12">

          <!-- ETL Pipelines -->
          <div class="bg-gray-50 p-8 rounded-xl shadow text-center">
            <div class="text-indigo-600 text-5xl mb-4">⚡</div>
            <h3 class="text-xl font-semibold">ETL Pipeline Development</h3>
            <p class="mt-3 text-gray-600">
              We design and implement efficient, scalable ETL pipelines that transform
              raw data into reliable, analytics-ready datasets.
            </p>
          </div>

          <!-- Integration -->
          <div class="bg-gray-50 p-8 rounded-xl shadow text-center">
            <div class="text-indigo-600 text-5xl mb-4">🔗</div>
            <h3 class="text-xl font-semibold">System & API Integration</h3>
            <p class="mt-3 text-gray-600">
              Connect CRMs, ERPs, databases, APIs, cloud apps, and internal systems to
              eliminate silos and streamline operations.
            </p>
          </div>

          <!-- Automation -->
          <div class="bg-gray-50 p-8 rounded-xl shadow text-center">
            <div class="text-indigo-600 text-5xl mb-4">🤖</div>
            <h3 class="text-xl font-semibold">Data Workflow Automation</h3>
            <p class="mt-3 text-gray-600">
              Automate repetitive tasks and orchestrate multi-system workflows with
              precision and reliability.
            </p>
          </div>

          <!-- Cloud Migration -->
          <div class="bg-gray-50 p-8 rounded-xl shadow text-center md:col-span-3 lg:col-span-1 lg:col-start-2">
            <div class="text-indigo-600 text-5xl mb-4">☁️</div>
            <h3 class="text-xl font-semibold">Cloud Data Migration</h3>
            <p class="mt-3 text-gray-600">
              Smooth, secure migrations to modern cloud data platforms like Snowflake,
              BigQuery, Azure, or AWS.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-indigo-600 text-white py-16">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold">Need a Custom Data Solution?</h2>
        <p class="mt-4 text-indigo-100 max-w-2xl mx-auto">
          We’ll evaluate your needs and build a tailored strategy that brings clarity,
          automation, and scalability to your data processes.
        </p>

        <a
          href="#"
          class="inline-block mt-10 px-10 py-4 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-indigo-100 transition"
        >
          Book a Consultation
        </a>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "Services",
};
</script>
