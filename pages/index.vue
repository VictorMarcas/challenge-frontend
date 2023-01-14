<script setup>
import { onMounted } from 'vue'
import { useUsers } from '@/composables/useUsers'
import UserCapsule from '@/components/molecules/UserCapsule.vue'
import UserCapsuleSkeleton from '@/components/molecules/UserCapsuleSkeleton.vue'
const { users, getUsers } = useUsers()
onMounted(() => {
  getUsers()
})
</script>
<template>
  <section class="py-12">
    <div
      class="container grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 xl:grid-cols-3"
    >
      <template v-if="users.length === 0">
        <UserCapsuleSkeleton v-for="(_, index) in 8" :key="index" />
      </template>
      <template v-else>
        <UserCapsule v-for="user in users" :key="user.id" :user="user" />
      </template>
    </div>
  </section>
</template>
