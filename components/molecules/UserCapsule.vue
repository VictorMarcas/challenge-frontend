<script setup>
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
import SocialButton from '@/components/atoms/SocialButton.vue'
import Icon from '@/components/atoms/Icon.vue'
import Button from '@/components/atoms/Button.vue'
import ButtonLink from '@/components/atoms/ButtonLink.vue'
import { useUsers } from '@/composables/useUsers'
defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const { deleteUser } = useUsers()
const handleDeleteUser = (id) => {
  deleteUser(id)
}
</script>
<template>
  <article class="flex items-center w-full gap-6 p-3 rounded-md bg-gray-100/50">
    <div class="flex items-center flex-1 gap-3">
      <img
        loading="lazy"
        :src="user.avatar"
        class="object-cover object-center w-20 border-4 border-white rounded-full aspect-square shrink-0"
        aria-label="profile photo"
      />
      <div aria-label="description" class="flex-1">
        <h4 class="text-base font-bold text-primary-900">
          {{ user.name }} {{ user.last_name }}
        </h4>
        <p class="text-sm text-gray-500">{{ user.profession }}</p>
        <ul arial-label="social network" class="flex items-center gap-2 mt-3">
          <li v-if="user.linkedin">
            <SocialButton
              :href="user.linkedin"
              name="social/linkedin"
              class="w-5 h-5"
              title="Linkedin"
            />
          </li>
          <li v-if="user.github">
            <SocialButton
              :href="user.github"
              name="social/github"
              class="w-5 h-5"
              title="Github"
            />
          </li>
          <li v-if="user.twitter">
            <SocialButton
              :href="user.twitter"
              name="social/twitter"
              class="w-5 h-5"
              title="Twitter"
            />
          </li>
        </ul>
      </div>
    </div>
    <div aria-label="settings" class="relative shrink-0">
      <Menu>
        <MenuButton
          class="inline-flex text-gray-500 transition-colors duration-200 focus:outline-none hover:text-gray-800"
        >
          <Icon name="interface/settings" class="w-6 h-6 shrink-0" />
          <Icon name="interface/small-caret-down" class="w-6 h-6 shrink-0" />
        </MenuButton>
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute right-0 w-40 px-2 py-3 space-y-1 bg-white border rounded-lg border-slate-50 z-2 focus:outline-none"
          >
            <ButtonLink
              :to="`/editar/${user.id}`"
              intent="minimal"
              size="sm"
              icon="interface/edit"
              alignment="left"
              full-width
              >Edit</ButtonLink
            >

            <Button
              intent="minimal"
              size="sm"
              icon="interface/bin"
              alignment="left"
              full-width
              @click="handleDeleteUser(user.id)"
              >Eliminar</Button
            >
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </article>
</template>
