<template>
    <h1>Bloggs List</h1>

    <BlogginlaggList :key="bloggsKey" />

    <p>
        <input type="text" placeholder="Title" v-model="title"> <br>
        <input type="text" placeholder="Summary" v-model="summary"> <br>
        <input type="text" placeholder="Content" v-model="content"> <br>
        <button @click="SaveBlogg">Save</button>
    </p>
</template>

<script>
import BlogginlaggList from '@/components/BlogginlaggList.vue';

export default {
    components: {
        BlogginlaggList
    },

    data() {
        return {
            title: "",
            summary: "",
            content: "",
            bloggsKey: 0
        }
    },
    methods: {
        SaveBlogg() {
            const blogg = {
                title: this.title,
                summary: this.summary,
                content: this.content,
            }

            fetch('http://localhost:23348/api/Blogg', {
                method: 'POST',
                body: JSON.stringify(blogg),
                headers: { 'content-type': 'application/json' }
            })
                .then(() => {
                    this.bloggsKey++
                })
        }
    }
}
</script>
