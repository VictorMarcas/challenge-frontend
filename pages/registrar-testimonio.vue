<script setup>
import { reactive, ref } from 'vue'
import { useUsers } from '@/composables/useUsers'
import Input from '@/components/atoms/Input.vue'
import InputError from '@/components/atoms/InputError.vue'
import Label from '@/components/atoms/Label.vue'
import Textarea from '@/components/atoms/Textarea.vue'
import Helper from '@/components/atoms/Helper.vue'
import Button from '@/components/atoms/Button.vue'
import ButtonLink from '@/components/atoms/ButtonLink.vue'
import Loading from '@/components/atoms/Loading.vue'
import { useRouter } from 'vue-router'
const form = reactive({
  avatar: '',
  company_logo: '',
  name: '',
  last_name: '',
  twitter: '',
  linkedin: '',
  github: '',
  profession: '',
  testimony: '',
})
const loading = ref(false)
const { addUser } = useUsers()
const router = useRouter()
const errors = ref({})

const handleSubmit = async () => {
  loading.value = true
  errors.value = []
  await addUser(form)
    .then(() => {
      router.push('/')
    })
    .catch((error) => {
      const {
        response: { _data },
      } = error

      _data.errors.forEach((error) => {
        const { param, msg } = error
        errors.value[param] = msg
      })
    })
    .finally(() => {
      loading.value = false
    })
}
</script>

<template>
  <section class="py-12">
    <div class="container">
      <div class="w-full max-w-screen-md mx-auto">
        <header>
          <h1 class="text-xl font-semibold text-gray-900">
            Crear nuevo testimonio
          </h1>
          <p class="mt-1 text-sm leading-relaxed text-gray-600">
            Ingresa todos los datos requidos para registar un nuevo testimonio
          </p>
        </header>
        <section class="py-6">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <fieldset class="px-6 py-6 rounded-lg bg-gray-50">
              <div
                class="flex flex-col items-center justify-center gap-4 md:justify-start md:flex-row"
                aria-label="avatar"
              >
                <div
                  class="w-20 h-20 overflow-hidden bg-gray-100 rounded-full ring-2 ring-gray-300 shrink-0"
                >
                  <img
                    v-if="form.avatar"
                    :src="form.avatar"
                    class="object-cover object-center w-full h-full aspect-square"
                    :alt="form.name"
                  />
                </div>
                <div class="flex-1 w-full">
                  <Label for="avatar">Avatar</Label>
                  <Input
                    id="avatar"
                    type="url"
                    pattern="https://.*"
                    required
                    v-model="form.avatar"
                  />
                  <InputError v-if="errors.avatar" :label="errors.avatar" />
                  <Helper
                    label="Ingresa una URL v??lida para tu foto. Ejemplo: https://example.com/images/myphoto.jpg"
                  />
                </div>
              </div>
            </fieldset>
            <fieldset class="px-6 py-6 rounded-lg bg-gray-50">
              <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <Label for="name">Nombre</Label>
                  <Input id="name" type="text" required v-model="form.name" />
                </div>
                <div>
                  <Label for="last_name">Apellidos</Label>
                  <Input
                    id="last_name"
                    type="text"
                    required
                    v-model="form.last_name"
                  />
                  <InputError
                    v-if="errors.last_name"
                    :label="errors.last_name"
                  />
                </div>
                <div class="md:col-span-2">
                  <Label for="profession">Profesi??n</Label>
                  <Input
                    id="profession"
                    type="text"
                    required
                    v-model="form.profession"
                  />
                  <InputError
                    v-if="errors.profession"
                    :label="errors.profession"
                  />
                </div>
              </div>
            </fieldset>
            <fieldset class="px-6 py-6 rounded-lg bg-gray-50">
              <div class="space-y-4">
                <div>
                  <Label for="github">Link de Github</Label>
                  <Input
                    id="github"
                    type="url"
                    pattern="https://.*"
                    required
                    v-model="form.github"
                  />
                  <InputError v-if="errors.github" :label="errors.github" />
                </div>
                <div>
                  <Label for="linkedin">Link de Linkedin</Label>
                  <Input
                    id="linkedin"
                    type="url"
                    pattern="https://.*"
                    required
                    v-model="form.linkedin"
                  />
                  <InputError v-if="errors.linkedin" :label="errors.linkedin" />
                </div>
                <div>
                  <Label for="twitter">Link de Twitter</Label>
                  <Input
                    id="twitter"
                    type="url"
                    pattern="https://.*"
                    required
                    v-model="form.twitter"
                  />
                  <InputError v-if="errors.twitter" :label="errors.twitter" />
                </div>
                <div>
                  <Label for="company_logo">Logo de la empresa</Label>
                  <Input
                    id="company_logo"
                    type="url"
                    pattern="https://.*"
                    required
                    v-model="form.company_logo"
                  />
                  <InputError
                    v-if="errors.company_logo"
                    :label="errors.company_logo"
                  />
                  <Helper
                    label="Ingresa una URL v??lida para el logo. Ejemplo: https://example.com/images/myphoto.jpg"
                  />
                </div>
                <div>
                  <Label for="testimony">Testimonio</Label>
                  <Textarea
                    id="testimony"
                    class="w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 disabled:border-gray-200 disabled:bg-gray-100"
                    rows="4"
                    required
                    v-model="form.testimony"
                  ></Textarea>
                  <InputError
                    v-if="errors.testimony"
                    :label="errors.testimony"
                  />
                </div>
                <div class="flex flex-col gap-4 md:flex-row">
                  <Button type="submit" :disabled="loading"
                    >Registrar testimonio <Loading v-if="loading"
                  /></Button>
                  <ButtonLink to="/" intent="minimal"
                    >Regresar a listado</ButtonLink
                  >
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    </div>
  </section>
</template>
