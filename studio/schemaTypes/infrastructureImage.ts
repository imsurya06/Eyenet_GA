import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'infrastructureImage',
  title: 'Infrastructure Image',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
          {title: 'Ticker', value: 'ticker'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
