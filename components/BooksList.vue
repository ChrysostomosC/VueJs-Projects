<template>
    <h2>Books List</h2>

    <p v-for="book in books" :key="book.id">
        <router-link :to=" '/books/' + book.id ">{{ book.title }}</router-link>
    </p>
</template>

<script>
export default{
    name: 'bookList',

    data(){
        return {
            books: []
        }
    },

    created(){
        fetch('http://localhost:57790/api/Books')
            .then(data => data.json())
            .then(books => {
                this.books = books
            })
    }
}
</script>