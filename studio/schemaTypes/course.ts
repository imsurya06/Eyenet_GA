import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'tag',
      title: 'Tag (e.g., Degree, Diploma)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Fashion', value: 'fashion'},
          {title: 'Computer', value: 'computer'},
          {title: 'Multimedia', value: 'multimedia'},
          {title: 'Photography', value: 'photography'},
          {title: 'Beautician', value: 'beautician'},
          {title: 'Spoken English', value: 'spoken-english'}
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
    defineField({
      name: 'eligibility',
      title: 'Eligibility',
      type: 'string',
    }),
    defineField({
      name: 'learningOutcomes',
      title: 'Learning Outcomes',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'careerProspects',
      title: 'Career Prospects',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'description', title: 'Description', type: 'text'},
          ],
        },
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Course Showcase Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text / Caption',
              type: 'string',
            },
          ],
        },
      ],
      description: 'Upload gallery images for this course to display in the animated infinite ticker carousel on the course details page.',
    }),
  ],
})
