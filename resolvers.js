import { uuid } from "uuidv4"
import { data } from "./constant.js"

export const resolvers = {
    Book: {
        author: (parent, args, context, info) => {
            return data.authors.find((author) => author.id === parent.authorId)
        }
    },
    Author: {
        books: (parent, args, context, info) => {
            return data.books.filter((book) => parent.books.includes(book.id))
        }
    },
    Query: {
        authors: () => {
            return data.authors
        },
        books: () => {
            return data.books
        }
    },
    Mutation: {
        addBook: (parent, args, context, info) => {
            let newBook = { id: uuid(), ...args }
            data.books.push(newBook)
            return newBook;
        }
    }
}