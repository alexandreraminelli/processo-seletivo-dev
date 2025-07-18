import { readFileSync } from "fs"

export type Post = {
  id: number
  title: string
  kind: "report" | "gallery" | "video" | "banner" | "informative"
  publishedAt: string
  createdAt: string
  category: string[]
  targets: string[]
}

export type PostFilter = {
  title?: string
  kind?: "report" | "gallery" | "video" | "banner" | "informative"
  category?: string
  target?: string
  publishedAtStart?: Date
  publishedAtEnd?: Date
  createdAtStart?: Date
  createdAtEnd?: Date
}

export async function search(filter: PostFilter): Promise<Post[]> {
  const posts: Post[] = JSON.parse(readFileSync("./data/posts.json", "utf-8"))

  /********************************************
   *            CODIFIQUE AQUI!
   *    Você deve implementar essa função
   ********************************************/
  let result: Post[] = posts

  // Filtrar por título
  if (filter.title) result = result.filter((post) => post.title.toLowerCase().includes(filter.title!.toLowerCase()))
  // Filtrar por tipo
  if (filter.kind) result = result.filter((post) => post.kind.includes(filter.kind!))
  // Filtrar por categoria
  if (filter.category) result = result.filter((post) => post.category.includes(filter.category!))
  // Filtrar por tags
  if (filter.target) result = result.filter((post) => post.targets.includes(filter.target!))

  // Filtrar por data de publicação
  if (filter.publishedAtStart) result = result.filter((post) => new Date(post.publishedAt) >= filter.publishedAtStart!)
  if (filter.publishedAtEnd) result = result.filter((post) => new Date(post.publishedAt) <= filter.publishedAtEnd!)
  // Date de criação
  if (filter.createdAtStart) result = result.filter((post) => new Date(post.createdAt) >= filter.createdAtStart!)
  if (filter.createdAtEnd) result = result.filter((post) => new Date(post.createdAt) <= filter.createdAtEnd!)

  return result.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}
