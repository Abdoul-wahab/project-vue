<template>
  <ValidationProvider v-slot="{ errors }" :rules="rules" :name="name">
    <div :class="divclass">
        <label
            :for="name"
            class="block text-sm text-white"
            >{{ label }}
        </label>
      <input
        :id="name"
        :type="type"
        :placeholder="placeholder"
        class="w-full px-5 py-1 bg-gray-300 rounded focus:outline-none focus:bg-white"
        :class="
          apiErrors || errors.length > 0
            ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-300 focus:border-red-300 focus:shadow-outline-red'
            : 'text-gray-700'
        "
        @input="$emit('input', $event.target.value)"
      />
      <div
        v-if="apiErrors || errors.length > 0"
        class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
      >
      </div>
    </div>
    <p v-if="apiErrors || errors.length > 0" class="mt-2 text-sm text-red-600">
      {{ errors[0] || apiErrors.toString() }}
    </p>
  </ValidationProvider>
</template>

<script>
export default {
  name: 'AppInput',

  props: {
    value: {
      type: String,
      required: false,
    },
    apiErrors: {
      type: Array,
      required: false,
      default: null
    },
    rules: {
      type: String,
      required: false,
      default: 'required'
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: ''
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    divclass: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
