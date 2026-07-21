import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'infrastructureImage',
  title: 'Infrastructure Image',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image URL',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Carousel', value: 'carousel'},
          {title: 'Lab', value: 'lab'},
          {title: 'Classroom', value: 'classroom'},
          {title: 'Library', value: 'library'},
          {title: 'Campus', value: 'campus'},
          {title: 'Other', value: 'other'}
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
