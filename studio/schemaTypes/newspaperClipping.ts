import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'newspaperClipping',
  title: 'Newspaper Clippings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Article Headline / Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clippingImage',
      title: 'Newspaper Clipping Image (A4 Page)',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publicationName',
      title: 'Newspaper / Publication Name',
      type: 'string',
      description: 'e.g. The Hindu, Dinakaran, Dina Thanthi, Press Release',
    }),
    defineField({
      name: 'publishDate',
      title: 'Publication Date',
      type: 'date',
    }),
    defineField({
      name: 'description',
      title: 'Brief Summary / Highlights',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'order',
      title: 'Display Order Priority',
      type: 'number',
      description: 'Lower numbers appear first (e.g. 1, 2, 3)',
      initialValue: 1,
    }),
  ],
})
