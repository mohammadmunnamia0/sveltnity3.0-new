import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({name: 'heading', title: 'Heading', type: 'string'}),
    defineField({name: 'subheading', title: 'Subheading', type: 'text'}),
    defineField({name: 'ctaText', title: 'CTA Text', type: 'string'}),
    defineField({name: 'ctaUrl', title: 'CTA URL', type: 'url'}),
    defineField({name: 'image', title: 'Hero Image', type: 'image'}),
  ],
})
