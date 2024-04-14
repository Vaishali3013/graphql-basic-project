export const data = {
    books: [
        { id: "1", title: 'book1', publishedYear: 2023, authorId: "1" },
        { id: "2", title: 'book2', publishedYear: 2023, authorId: "2" },
        { id: "3", title: 'book3', publishedYear: 2023, authorId: "3" }
    ],
    authors: [
        { id: "1", name: 'author1', books: ["2", "3"] },
        { id: "2", name: 'author2', books: ["1"] },
        { id: "3", name: 'author3', books: ["2", "1"] }
    ]
}