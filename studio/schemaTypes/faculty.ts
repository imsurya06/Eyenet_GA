import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faculty',
  title: 'Faculty & Team',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category / Department',
      type: 'string',
      options: {
        list: [
          {title: 'Faculty / Mentors', value: 'Faculty'},
          {title: 'Technical Team', value: 'Technical Team'},
        ],
      },
      initialValue: 'Faculty',
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
