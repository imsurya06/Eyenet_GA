import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'newsEvent',
  title: '4. News & Events (Workshops, Runway Shows)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Fashion Walks', value: 'Fashion Walks'},
          {title: 'Seminar & Workshop', value: 'Seminar & Workshop'},
          {title: 'Others', value: 'Others'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Feature as Top Main Card',
      type: 'boolean',
      description: 'Check this to explicitly pin/showcase this activity in the main top hero card at the top of the page',
      initialValue: false,
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube Video Link',
      type: 'url',
      description: 'Link to YouTube video (e.g. https://www.youtube.com/watch?v=... or https://youtu.be/... or shorts)',
    }),
    defineField({
      name: 'description',
      title: 'Description (Optional)',
      type: 'text',
      description: 'Optional brief description',
    }),
    defineField({
      name: 'image',
      title: 'Cover Image / Video Poster',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Custom cover photo (optional fallback if YouTube video thumbnail is not used)',
    }),
  ],
})
