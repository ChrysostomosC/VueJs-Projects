<template>
    <div>
        <h1>Welcome to my blogs</h1>
        <p v-for="b in bloggs" :key="b.title">
            <router-link :to="{ name: 'BloggsDetails', params: { title: b.title } }">
                <b>{{ b.title }}</b>
            </router-link>
        </p>
    </div>
</template>

<script>
export default {
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
            ]
        };
    }
};
</script>