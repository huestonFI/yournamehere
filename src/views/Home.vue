<template>
  <div>
    <div id="app"></div>


        <!-- HERO SECTION -->
        <section class="bg-indigo-600 text-white py-24">
        <div class="max-w-7xl mx-auto px-6 text-center">
            <h2 class="text-4xl md:text-5xl font-bold leading-tight">
            Smarter Data Integration for Modern Businesses
            </h2>

            <p class="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-indigo-100">
            Unlock the full value of your data with expert ETL, automation, and
            integration consulting. We design scalable pipelines, unify systems,
            and help you make data-driven decisions faster.
            <br><br>
            Man we desparately need some creative inspiration of some kind, this is some soulless dogshit as it currently stands.
            </p>

            <div class="mt-10 flex justify-center space-x-4">
            <a
                href="#"
                class="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-indigo-100 transition"
            >
                Get a Free Consultation
            </a>

            <a
                href="#"
                class="px-8 py-3 bg-indigo-500 border border-white font-semibold rounded-lg hover:bg-indigo-400 transition"
            >
                Learn More
            </a>
            </div>
        </div>
        </section>

        <!-- FEATURES SECTION -->
        <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-6">
            <h3 class="text-3xl font-bold text-center">
            Why Businesses Choose Us
            </h3>

            <p class="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Whether you're migrating to a new system, centralizing your data, or automating workflows,
            we provide the expertise to keep your data flowing smoothly.
            </p>

            <div class="mt-16 grid md:grid-cols-3 gap-12">

            <!-- Feature 1 -->
            <div class="text-center">
                <div class="text-indigo-600 text-5xl">⚡</div>
                <h4 class="mt-4 text-xl font-semibold">Fast & Reliable ETL Pipelines</h4>
                <p class="mt-2 text-gray-600">
                Build efficient, scalable Extract-Transform-Load processes that minimize delay and
                maximize data accuracy.
                </p>
            </div>

            <!-- Feature 2 -->
            <div class="text-center">
                <div class="text-indigo-600 text-5xl">🔗</div>
                <h4 class="mt-4 text-xl font-semibold">Seamless System Integration</h4>
                <p class="mt-2 text-gray-600">
                Connect CRMs, ERPs, databases, APIs, cloud platforms, and internal systems with ease.
                </p>
            </div>

            <!-- Feature 3 -->
            <div class="text-center">
                <div class="text-indigo-600 text-5xl">📊</div>
                <h4 class="mt-4 text-xl font-semibold">Data Automation & Workflows</h4>
                <p class="mt-2 text-gray-600">
                Automate routine tasks with smart data pipelines that save time and reduce errors.
                </p>
            </div>

            </div>
        </div>
        </section>

        <!-- CTA -->
        <section class="bg-gray-100 py-20">
        <div class="max-w-7xl mx-auto px-6 text-center">
            <h3 class="text-3xl font-bold">
            Ready to Transform Your Data Strategy?
            </h3>

            <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
            Partner with us to modernize your data workflows, improve reliability,
            and gain insights that drive smarter decisions.
            </p>
            <RouterLink to="/consultation" class="inline-block mt-10 px-10 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-500 transition">Schedule a Consultation</RouterLink>
        </div>
        </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
