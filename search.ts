import { readFileSync } from 'fs'

export type Post = {
  id: number
  title: string
  kind: 'report' | 'gallery' | 'video' | 'banner' | 'informative'
  publishedAt: string
  createdAt: string
  category: string[]
  targets: string[]
}

export type PostFilter = {
  title?: string
  kind?: 'report' | 'gallery' | 'video' | 'banner' | 'informative'
  category?: string
  target?: string
  publishedAtStart?: Date
  publishedAtEnd?: Date
  createdAtStart?: Date
  createdAtEnd?: Date
}

export async function search(filter: PostFilter): Promise<Post[]> {
  const posts: Post[] = JSON.parse(readFileSync('./data/posts.json', 'utf-8'))

  /********************************************
   *            CODIFIQUE AQUI!
   *    Você deve implementar essa função
   ********************************************/

  return posts
}
