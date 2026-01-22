import { defineField, defineType } from 'sanity'
import { BookIcon } from '@sanity/icons' // 1. Import Icon bawaan Sanity

export default defineType({
  name: 'kegiatan',
  title: 'Berita Kegiatan',
  type: 'document',
  icon: BookIcon, // 2. Pasang Icon di sini (Akan muncul di Sidebar Kiri)
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
      name: 'excerpt',
      title: 'Ringkasan Singkat',
      type: 'text',
      description: 'Deskripsi singkat untuk ditampilkan di halaman daftar kegiatan (maksimal 200 karakter)',
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: 'body',
      title: 'Isi Berita',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],

  // 3. Konfigurasi Tampilan List (PREVIEW)
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      date: 'publishedAt'
    },
    prepare(selection) {
      const { title, media, date } = selection
      return {
        title: title,
        // Menampilkan tanggal sebagai subtitle agar admin lebih informatif
        subtitle: date ? new Date(date).toLocaleDateString('id-ID', {
          day: 'numeric', month: 'long', year: 'numeric'
        }) : 'Belum dipublikasi',
        media: media // Menampilkan thumbnail foto di list
      }
    },
  },
})