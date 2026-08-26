import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'galleryImage',
  title: '8. General Gallery Images',
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
          {title: 'About Page 3D Slider', value: 'about_hero_slider'},
          {title: 'Carousel', value: 'carousel'},
          {title: 'Fashion', value: 'fashion'},
          {title: 'Event', value: 'event'},
          {title: 'General', value: 'general'}
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ticker_row',
      title: 'Ticker Row',
      type: 'string',
      hidden: ({ document }) => document?.category === 'carousel',
      options: {
        list: [
          {title: 'Top Ticker (1)', value: '1'},
          {title: 'Bottom Ticker (2)', value: '2'}
        ],
      },
    }),
  ],
})
