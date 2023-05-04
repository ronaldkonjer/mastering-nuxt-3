<<<<<<< HEAD
<script lang="ts" setup>
=======
<template>
  <iframe
    width="560"
    height="315"
    :src="`https://player.vimeo.com/video/${props.videoId}`"
    title="Video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script setup>
>>>>>>> upstream/4-8
const props = defineProps({
  videoId: {
    type: Number,
    required: true,
  },
});
</script>
<<<<<<< HEAD

<template>
  <iframe width="560" height="315" :src="`https://player.vimeo.com/video/${props.videoId}`" title="Video Player"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
</template>

<style scoped></style>
=======
>>>>>>> upstream/4-8
