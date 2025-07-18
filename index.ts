import { PostFilter, search } from "./search"

async function main() {
  // Você pode essa função à vontade também pra testar!
  const filter: PostFilter = {
    // title: "875",
    // kind: "informative",
    // category: "Tarefa",
    // target: "Coordenador",
    // publishedAtStart: new Date("2024-03-24"),
    // publishedAtEnd: new Date('2024-06-20'),
    // createdAtStart: new Date("2023-10-21"),
    // createdAtEnd: new Date("2023-11-21"),
  }

  console.time("filter")
  const posts = await search(filter)
  console.timeEnd("filter")

  console.table(posts)
}
main()
