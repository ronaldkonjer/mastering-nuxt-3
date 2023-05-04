<template>
  <label
    class="rounded text-white font-bold py-2 px-4 cursor-pointer"
    :class="{
      'bg-green-500': modelValue,
      'bg-gray-500': !modelValue,
<<<<<<< HEAD
    }">
=======
    }"
  >
>>>>>>> upstream/4-8
    <input
      type="checkbox"
      :value="modelValue"
      @input="() => $emit('update:modelValue', !modelValue)"
<<<<<<< HEAD
      class="hidden" />
    {{ modelValue ? "Completed!" : "Mark as complete" }}
=======
      class="hidden"
    />
    {{ modelValue ? 'Completed!' : 'Mark as complete' }}
>>>>>>> upstream/4-8
  </label>
</template>

<script setup>
<<<<<<< HEAD
  defineProps({
    modelValue: {
      type: Boolean,
      default: false,
    },
  })

  defineEmits(["update:modelValue"])
</script>

<style lang="scss" scoped>
  ::selection {
    display: none;
  }
=======
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
::selection {
  display: none;
}
>>>>>>> upstream/4-8
</style>
