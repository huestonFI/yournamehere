<template>
  <div class="min-h-screen bg-gray-50 py-16 px-6">
    <div class="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-10">
      
      <h1 class="text-4xl font-bold text-indigo-600 text-center mb-4">
        Request a Consultation
      </h1>
      <p class="text-center text-gray-600 mb-10">
        Form for setting up a meeting with us. Also using Formspree for now.
      </p>

      <form
        action="https://formspree.io/f/mkgkvnev"
        method="POST"
        class="space-y-6"
      >
        <!-- Name -->
        <div>
          <label class="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            required
            class="w-full px-4 py-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            class="w-full px-4 py-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <!-- Company -->
        <div>
          <label class="block font-medium mb-1">Company (optional)</label>
          <input
            type="text"
            name="company"
            class="w-full px-4 py-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <!-- Project Type -->
        <div>
          <label class="block font-medium mb-2">Project Type</label>
          <select
            name="projectType"
            required
            class="w-full px-4 py-3 border rounded-lg bg-white focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select a project type...</option>
            <option>ETL Pipeline Development</option>
            <option>System Migration</option>
            <option>API / System Integration</option>
            <option>Data Automation / Workflow</option>
            <option>Data Quality / Cleanup</option>
            <option>General Consulting</option>
          </select>
        </div>

        <!-- Tools / Tech Stack -->
        <div>
          <label class="block font-medium mb-1">
            Current Tools / Data Stack (optional)
          </label>
          <input
            type="text"
            name="techStack"
            placeholder="e.g. Snowflake, DBT, Airflow, Azure Data Factory, Salesforce, MySQL..."
            class="w-full px-4 py-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <!-- Timeline -->
        <div>
          <label class="block font-medium mb-2">Desired Timeline</label>
          <select
            name="timeline"
            class="w-full px-4 py-3 border rounded-lg bg-white focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option>ASAP</option>
            <option>Within 1 month</option>
            <option>1–3 months</option>
            <option>3+ months</option>
            <option>Just exploring options</option>
          </select>
        </div>

        <!-- Budget -->
        <div>
          <label class="block font-medium mb-2">Budget Range (optional)</label>
          <select
            name="budget"
            class="w-full px-4 py-3 border rounded-lg bg-white focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Prefer not to say</option>
            <option>$1,000 – $5,000</option>
            <option>$5,000 – $15,000</option>
            <option>$15,000 – $50,000</option>
            <option>$50,000+</option>
          </select>
        </div>

        <!-- Details -->
        <div>
          <label class="block font-medium mb-1">Project Details</label>
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Describe what you're trying to achieve…"
            class="w-full px-4 py-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>

        <!-- Submit -->
        <button
          type="submit"
          class="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-500 transition"
        >
          Submit Consultation Request
        </button>

        <!-- Success redirect -->
        <input type="hidden" name="_redirect" value="/thank-you" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Consultation",
};
</script>

<style scoped>
</style>
