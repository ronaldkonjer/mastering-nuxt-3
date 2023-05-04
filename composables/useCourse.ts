import courseData from './courseData.js'

interface Lesson {
  title: string
  slug: string
  number: number
  downloadUrl: string
  videoId: number
  text: string
  sourceUrl?: string
  path: string
}

interface Chapter {
  title: string
  slug: string
  number: number
  lessons: Lesson[]
}

interface Course {
  title: string
  chapters: Chapter[]
}

export const useCourse = (): Course => {
  // return {
  const chapters: Chapter[] = courseData.chapters.map((chapter) => {
    const lessons: Lesson[] = chapter.lessons.map(lesson => ({
      ...lesson,
      path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
    }))
    return {
      ...chapter,
      lessons,
    }
  })
  return {
    ...courseData,
    chapters,
  }
}
