import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'kegiatan',
  title: 'Berita Kegiatan',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Kegiatan',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (Link URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Tanggal Posting',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Foto Utama',
      type: 'image',
      options: {
        hotspot: true, 
      },
    }),
    defineField({
      name: 'body',
      title: 'Isi Berita',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})