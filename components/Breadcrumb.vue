<template>
  <div class="custom-breadcrumb">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <NuxtLink to="/">{{ homeName }}</NuxtLink>
        </li>
        <li v-if="parentPath" class="breadcrumb-item">
          <NuxtLink :to="parentPath">{{ parentName }}</NuxtLink>
        </li>
        <li class="breadcrumb-item active">
          {{ currentName }}
        </li>
      </ol>
    </nav>
  </div>
</template>

<script setup>
const props = defineProps({
  homeName: {
    type: String,
    default: 'Home'
  },
  parentPath: {
    type: String,
    default: ''
  },
  parentName: {
    type: String,
    default: ''
  },
  currentName: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.custom-breadcrumb {
  margin: 1.5rem 0;
}

.breadcrumb {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  color: #7f8c8d;
}

.breadcrumb-item a {
  color: #0066cc;
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb-item a:hover {
  color: #004c99;
}

.breadcrumb-item + .breadcrumb-item {
  padding-left: 0.5rem;
}

.breadcrumb-item + .breadcrumb-item::before {
  display: inline-block;
  padding-right: 0.5rem;
  content: "/";
  color: #7f8c8d;
}
</style>
