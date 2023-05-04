<template>
  <div>
<<<<<<< HEAD
    <p class="mt-0 uppercase font-bold text-slate-400 mb-1">Lesson {{ chapter.number }} - {{ lesson.number }}</p>
=======
    <p class="mt-0 uppercase font-bold text-slate-400 mb-1">
      Lesson {{ chapter.number }} - {{ lesson.number }}
    </p>
>>>>>>> upstream/4-8
    <h2 class="my-0">{{ lesson.title }}</h2>
    <div class="flex space-x-4 mt-2 mb-8">
      <NuxtLink
        v-if="lesson.sourceUrl"
        class="font-normal text-md text-gray-500"
<<<<<<< HEAD
        :to="lesson.sourceUrl">
=======
        :to="lesson.sourceUrl"
      >
>>>>>>> upstream/4-8
        Download Source Code
      </NuxtLink>
      <NuxtLink
        v-if="lesson.downloadUrl"
        class="font-normal text-md text-gray-500"
<<<<<<< HEAD
        :to="lesson.downloadUrl">
=======
        :to="lesson.downloadUrl"
      >
>>>>>>> upstream/4-8
        Download Video
      </NuxtLink>
    </div>
    <VideoPlayer
<<<<<<< HEAD
      :if="lesson?.videoId"
      :videoId="lesson?.videoId" />
    <p>{{ lesson.text }}</p>
    <LessonCompleteButton
      :modelValue="isLessonComplete"
      @update:modelValue="toggleComplete" />
=======
      v-if="lesson.videoId"
      :videoId="lesson.videoId"
    />
    <p>{{ lesson.text }}</p>
    <LessonCompleteButton
      :model-value="isLessonComplete"
      @update:model-value="toggleComplete"
    />
>>>>>>> upstream/4-8
  </div>
</template>

<script setup>
<<<<<<< HEAD
  const course = useCourse()
  const route = useRoute()

  const chapter = computed(() => {
    return course.chapters.find((chapter) => chapter.slug === route.params.chapterSlug)
  })

  const lesson = computed(() => {
    return chapter.value.lessons.find((lesson) => lesson.slug === route.params.lessonSlug)
  })

  useHead({
    title: `${lesson.value.title} - ${chapter.value.title} - ${course.title}`,
    meta: [
      {
        hid: "description",
        name: "description",
        content: lesson.value.text,
      },
    ],
  })

  const progress = useLocalStorage("progress", [])

  const isLessonComplete = computed(() => {
    if (!progress.value[chapter.value.number - 1]) {
      return false
    }

    if (!progress.value[chapter.value.number - 1][lesson.value.number - 1]) {
      return false
    }

    return progress.value[chapter.value.number - 1][lesson.value.number - 1]
  })

  const toggleComplete = () => {
    if (!progress.value[chapter.value.number - 1]) {
      progress.value[chapter.value.number - 1] = []
    }

    progress.value[chapter.value.number - 1][lesson.value.number - 1] = !isLessonComplete.value

    localStorage.setItem("progress", JSON.stringify(progress.value))
  }
</script>

<style scoped></style>
=======
const course = useCourse();
const route = useRoute();

definePageMeta({
  middleware: [
    function ({ params }, from) {
      const course = useCourse();

      const chapter = course.chapters.find(
        (chapter) => chapter.slug === params.chapterSlug
      );

      if (!chapter) {
        return abortNavigation(
          createError({
            statusCode: 404,
            message: 'Chapter not found',
          })
        );
      }

      const lesson = chapter.lessons.find(
        (lesson) => lesson.slug === params.lessonSlug
      );

      if (!lesson) {
        return abortNavigation(
          createError({
            statusCode: 404,
            message: 'Lesson not found',
          })
        );
      }
    },
    'auth',
  ],
});

const chapter = computed(() => {
  return course.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});

const lesson = computed(() => {
  return chapter.value.lessons.find(
    (lesson) => lesson.slug === route.params.lessonSlug
  );
});

const title = computed(() => {
  return `${lesson.value.title} - ${course.title}`;
});
useHead({
  title,
});

const progress = useLocalStorage('progress', []);

const isLessonComplete = computed(() => {
  if (!progress.value[chapter.value.number - 1]) {
    return false;
  }

  if (
    !progress.value[chapter.value.number - 1][
      lesson.value.number - 1
    ]
  ) {
    return false;
  }

  return progress.value[chapter.value.number - 1][
    lesson.value.number - 1
  ];
});

const toggleComplete = () => {
  if (!progress.value[chapter.value.number - 1]) {
    progress.value[chapter.value.number - 1] = [];
  }

  progress.value[chapter.value.number - 1][
    lesson.value.number - 1
  ] = !isLessonComplete.value;
};
</script>
>>>>>>> upstream/4-8
