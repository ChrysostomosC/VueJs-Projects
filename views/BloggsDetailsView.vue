<template>
    <div v-if="blog">
        <h1>{{ blog.title }}</h1>
        <p>{{ blog.description }}</p>
        <router-link to="/bloggs">Back to Blogs</router-link>
    </div>
    <div v-else>
        <p>Blog not found. <router-link to="/bloggs">Back to Blogs</router-link></p>
    </div>
</template>

<script>
export default {
    props: ['title'],
    data() {
        return {
            bloggs: [
                {
                    title: "One day at the park",
                    description: "A nice sunny day at the park, having a picnic next to the duck lake and then playing games on the grass!",
                },
                {
                    title: "My wife's misery",
                    description: "My wife cannot handle the kids alone. I hope one day I can provide more help after I am done with my studies.",
                },
                {
                    title: "Changes in life",
                    description: "I am done with Zara, and now I am much calmer and happier than before.",
                },
            ],
            blog: {},
        };
    },
    created() {
        this.blog = this.bloggs.find(b => b.title === this.title);
    }
};
</script>