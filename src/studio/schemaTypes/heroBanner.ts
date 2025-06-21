import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroBanner',
  title: 'Hero Banner',
  type: 'document',
  fields: [
    defineField({name: 'image', title: 'Banner Image', type: 'image'}),
    defineField({name: 'overlayText', title: 'Overlay Text', type: 'string'}),
    defineField({name: 'ctaText', title: 'CTA Text', type: 'string'}),
    defineField({name: 'ctaUrl', title: 'CTA URL', type: 'url'}),
  ],
})
