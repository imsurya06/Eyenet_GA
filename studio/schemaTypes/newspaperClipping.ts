import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'newspaperClipping',
  title: '5. Newspaper Clippings & Press Scans',
  type: 'document',
  orderings: [
    {
      title: 'Publication Date, Newest First',
      name: 'publishDateDesc',
      by: [{field: 'publishDate', direction: 'desc'}],
    },
  ],
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
      description: 'Publication date (Newer publications automatically appear first on the website)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Brief Summary / Highlights',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishDate',
      media: 'clippingImage',
    },
  },
})
