<template>
    <h1>Single Blogg</h1>

    <input type="text" v-model="title" placeholder="Title"> <br>
    <input type="text" v-model="summary" placeholder="Summary"> <br>
    <input type="text" v-model="content" placeholder="Content"> <br>
    <button @click="updateBlogg">Update</button>
    <button @click="deleteBlogg">Delete</button>
</template>

<script>
export default {
    data() {
        return {
            title: "",
            summary: "",
            content: ""
        }
    },
    created() {
        const id = this.$route.params.id

        fetch('http://localhost:23348/api/Blogg/' + id)
            .then(data => data.json())
            .then(blogg => {
                this.title = blogg.title,
                this.summary = blogg.summary,
                this.content = blogg.content
            })
    },
    methods: {
        updateBlogg() {
            const blogg = {
                title: this.title,
                summary: this.summary,
                content: this.content
            }

            const id = this.$route.params.id

            fetch('http://localhost:23348/api/Blogg/' + id, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(blogg)
            })
                .then(() => {
                    this.$router.push('/bloggs')
                })
        },
        deleteBlogg() {
            const id = this.$route.params.id

            fetch('http://localhost:23348/api/Blogg/' + id, {
                method: 'DELETE',
            })
                .then(() => {
                    this.$router.push('/bloggs')
                })
        }
    }
}
</script>