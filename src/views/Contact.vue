<template>
  <div class="max-w-3xl mx-auto py-20 px-6">
    <h2 class="text-4xl font-bold text-center mb-8">Contact Us</h2>

    <p class="text-center text-gray-600 mb-12 max-w-xl mx-auto">
      Form for general inquiries and quick questions. I set up the backend using a third party, Formspree. If we can prove this is viable we need to build our own backend though.
    </p>

    <form @submit.prevent="submitForm" class="space-y-6">

      <!-- Name -->
      <div>
        <label class="block mb-2 font-medium">Name *</label>
        <input
          v-model="name"
          class="w-full p-3 border rounded-lg"
          type="text"
          required
        />
      </div>

      <!-- Email -->
      <div>
        <label class="block mb-2 font-medium">Email *</label>
        <input
          v-model="email"
          class="w-full p-3 border rounded-lg"
          type="email"
          required
        />
      </div>

      <!-- Optional company -->
      <div>
        <label class="block mb-2 font-medium">Company (Optional)</label>
        <input
          v-model="company"
          class="w-full p-3 border rounded-lg"
          type="text"
        />
      </div>

      <!-- Reason dropdown -->
      <div>
        <label class="block mb-2 font-medium">Reason for contact (Optional)</label>
        <select
          v-model="reason"
          class="w-full p-3 border rounded-lg"
        >
          <option value="">Select...</option>
          <option>General Question</option>
          <option>Potential Collaboration</option>
          <option>Technical Inquiry</option>
          <option>Speaking Request</option>
          <option>Something Else</option>
        </select>
      </div>

      <!-- Message -->
      <div>
        <label class="block mb-2 font-medium">Message *</label>
        <textarea
          v-model="message"
          class="w-full p-3 border rounded-lg h-32"
          required
        ></textarea>
      </div>

      <!-- Submit button -->
      <button
        type="submit"
        class="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-500 transition"
      >
        Send Message
      </button>

      <!-- Success message -->
      <p
        v-if="submitted"
        class="mt-4 text-center text-green-600 font-medium"
      >
        Thanks! Your message has been sent.
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const company = ref("");
const reason = ref("");
const message = ref("");
const submitted = ref(false);

async function submitForm() {
  const endpoint = "https://formspree.io/f/xanadyby";

  const body = {
    name: name.value,
    email: email.value,
    company: company.value,
    reason: reason.value,
    message: message.value
  };

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    alert("There was an issue sending your message.");
    return;
  }

  submitted.value = true;

  // Clear fields
  name.value = "";
  email.value = "";
  company.value = "";
  reason.value = "";
  message.value = "";

  setTimeout(() => (submitted.value = false), 3000);
}
</script>
