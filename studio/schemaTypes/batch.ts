import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'batch',
  title: 'Upcoming Batch',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Batch Title / Course Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Badge Tag (e.g., Seats filling fast, New batch, Most Popular)',
      type: 'string',
      initialValue: 'Seats filling fast',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date (e.g., 5 September 2026)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'timing',
      title: 'Batch Timing (e.g., 6:00 PM - 8:00 PM)',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Duration (e.g., 6 months)',
      type: 'string',
    }),
    defineField({
      name: 'mode',
      title: 'Mode (e.g., Online + Offline, Online, Offline Studio)',
      type: 'string',
    }),
    defineField({
      name: 'seatsLeft',
      title: 'Seats Remaining (e.g., 12)',
      type: 'number',
      initialValue: 12,
    }),
    defineField({
      name: 'courseTitleToSelect',
      title: 'Course to Pre-select in Form (e.g., Computer Courses, Diploma in Fashion Designing)',
      type: 'string',
    }),
  ],
})
