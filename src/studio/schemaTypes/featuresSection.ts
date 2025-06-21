import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'featuresSection',
  title: 'Features Section',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Section Title', type: 'string'}),
    defineField({name: 'description', title: 'Section Description', type: 'text'}),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'icon', title: 'Icon', type: 'image'}),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text'}),
          ],
        }),
      ],
    }),
  ],
})
