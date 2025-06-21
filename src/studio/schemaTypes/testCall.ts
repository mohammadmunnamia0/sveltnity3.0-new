import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testCall',
  title: 'Test Call Section',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text'}),
    defineField({name: 'ctaText', title: 'CTA Text', type: 'string'}),
    defineField({name: 'ctaUrl', title: 'CTA URL', type: 'url'}),
    defineField({name: 'image', title: 'Image', type: 'image'}),
  ],
})
