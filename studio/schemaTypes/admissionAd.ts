import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'admissionAd',
  title: 'Admission Ads',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Ad Title / Campaign Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Instagram Vertical Ad Image (4:5 Ratio Recommended)',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Target Link / URL (Optional)',
      type: 'string',
    }),
    defineField({
      name: 'active',
      title: 'Active (Show on website)',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
