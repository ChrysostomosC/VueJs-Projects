<template>
    <h1>Books</h1>

    <BooksList :key="booksKey" />

    <p>
        <input type="text" placeholder="Title" v-model="title"> <br>
        <input type="number" placeholder="Pages" v-model="pages"> <br>
        <button @click="saveBook">Save</button>
    </p>
</template>

<script>
import BooksList from '@/components/BooksList.vue';

export default{
    components:{
        BooksList
    },

    data(){
        return{
            title:"",
            pages:"",
            booksKey: 0
        }
    },
    methods:{
        saveBook(){
            const book= {
                title: this.title,
                pages: this.pages,
            }

            fetch('http://localhost:57790/api/Books',{
                method: 'POST',
                body: JSON.stringify(book),
                headers: {'content-Type': 'application/json'}
            })
            .then(()=>{
                this.booksKey++
            })
        }
    }
}
</script>