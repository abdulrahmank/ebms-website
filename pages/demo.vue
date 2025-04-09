<template>
  <div class="demo-page">
    <div class="custom-container">
      <div class="content-wrapper">
        <h1>Request a Demo</h1>

        <p class="description">
          Experience how eBMS can transform your shipping and logistics operations.
          Fill out the form below and our team will get in touch with you.
        </p>

        <div class="form-container">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Full Name*</label>
              <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  placeholder="Enter your full name"
                  required
              >
            </div>

            <div class="form-group">
              <label for="company">Company Name*</label>
              <input
                  type="text"
                  id="company"
                  v-model="formData.company"
                  placeholder="Enter your company name"
                  required
              >
            </div>

            <div class="form-group">
              <label for="email">Email*</label>
              <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  placeholder="Enter your email address"
                  required
              >
            </div>

            <div class="form-group">
              <label for="phone">Phone Number*</label>
              <input
                  type="tel"
                  id="phone"
                  v-model="formData.phone"
                  placeholder="Enter your phone number"
                  required
              >
            </div>

            <div class="form-group">
              <label for="interest">I'm interested in*</label>
              <select id="interest" v-model="formData.interest" required>
                <option value="" disabled>Select your interest</option>
                <option v-for="option in interestOptions" :key="option.value" :value="option.value">
                  {{ option.label }}
                </option>
              </select>
            </div>

            <div class="form-group">
              <label for="message">Message (Optional)</label>
              <textarea
                  id="message"
                  v-model="formData.message"
                  placeholder="Tell us more about your requirements"
                  rows="4"
              ></textarea>
            </div>

            <div class="submit-group">
              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                {{ isSubmitting ? 'Submitting...' : 'Request Demo' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Setup form data
const formData = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  interest: '',
  message: ''
})

const isSubmitting = ref(false)

// Interest options
const interestOptions = [
  { value: 'liner', label: 'Liner Solution' },
  { value: 'feeder', label: 'Feeder Solution' },
  { value: 'agency', label: 'Agency House Solution' },
  { value: 'nvocc', label: 'NVOCC Solution' },
  { value: 'global', label: 'Global Forwarding' },
  { value: 'transport', label: 'Transport Solution' },
  { value: 'warehouse', label: 'Warehouse / 3PL Solution' },
  { value: 'other', label: 'Other' }
]

// Form submission handler
const submitForm = () => {
  isSubmitting.value = true

  // Simulate API call
  setTimeout(() => {
    alert('Thank you for your interest! Our team will contact you soon.')
    // Reset the form
    Object.keys(formData).forEach(key => {
      formData[key] = ''
    })
    isSubmitting.value = false
  }, 1500)
}

// Set meta information for the page
useHead({
  title: 'Request a Demo - eBMS',
  meta: [
    { name: 'description', content: 'Book a demo to discover how eBMS solutions can transform your shipping and logistics operations.' }
  ]
})
</script>

<style scoped>
.demo-page {
  padding: 4rem 0;
  background-color: #f8f9fa;
  min-height: calc(100vh - 200px);
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
}

.description {
  font-size: 1.1rem;
  color: #7f8c8d;
  text-align: center;
  margin-bottom: 3rem;
}

.form-container {
  background-color: #fff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

input,
select,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: #0066cc;
}

.submit-group {
  margin-top: 2rem;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background-color: #0066cc;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover:not(:disabled) {
  background-color: #004c99;
}

.submit-btn:disabled {
  background-color: #99c2ff;
  cursor: not-allowed;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .demo-page {
    padding: 3rem 0;
  }

  h1 {
    font-size: 2rem;
  }

  .form-container {
    padding: 1.5rem;
  }
}
</style>
