import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faculty',
  title: 'Faculty',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image URL',
      type: 'string',
    }),
    defineField({
      name: 'qualification',
      title: 'Qualification',
      type: 'string',
    }),
    defineField({
      name: 'achievements',
      title: 'Achievements',
      type: 'text',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
