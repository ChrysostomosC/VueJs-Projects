<template>
    <h1>Product catalog</h1>

    <div v-for="p in product" class="product">
        <img :src="p.image" :alt="p.name" width="200" height="300" @click="p.show = !p.show" class="clickable" />

        <p>
            <b>{{ p.name }}</b> <br />
            <i>{{ p.price }}</i> <br />
            <h v-if="p.show">{{ p.description }}</h>
        </p>

        <button @click="buyProduct(p)">Buy</button>

    </div>
</template>

<script>
export default {
    data() {
        return {
            product: [
                {
                    id: 1,
                    name: "KORT KLÄNNING MED SKÄRP ZW COLLECTION",
                    price: "559,00 SEK",
                    description: "Kort klänning i 100 % bomull. Rund krage. V-ringning. Kortärmad. Skärp i samma tyg. Justerbar med metallspänne. Veck på",
                    image: "https://static.zara.net/assets/public/e243/b9d6/798940b09365/01e2a8ab134e/08761298743-p/08761298743-p.jpg?ts=1723543729590&w=1920" // Replace this URL with the actual image URL
                },
                {
                    id: 2,
                    name: "MÖNSTRAD SKJORTA TIE DYE",
                    price: "559,00 SEK",
                    description: "Skjorta. Relaxed fit. Viskosblandat tyg. Bowlingkrage. Långärmad. Knapp i ärmsluten. Knäppning på framsidan med knappar.",
                    image: "https://static.zara.net/assets/public/6100/87ae/7c47402d978c/41cc1aca6f55/07484271170-p/07484271170-p.jpg?ts=1723622179898&w=563" // Replace this URL with the actual image URL
                },
                {
                    id: 3,
                    name: "BYXA JOGGING ANIMAL PRINT",
                    price: "209,00 SEK",
                    description: "Byxa med resårlinning. Snörning på framsidan. Animal print.",
                    image: "https://static.zara.net/assets/public/5274/ed68/2bde47f5aa23/7b807473aef9/00208703051100-p/00208703051100-p.jpg?ts=1723537784581&w=563" // Replace this URL with the actual image URL
                }
            ]
        }
    },
    methods: {
        buyProduct(product) {
            this.$router.push({ name: 'purchase', params: { id: product.id } });
        }
    }
}
</script>

<style>
.product {
    margin-bottom: 20px;
}

.clickable {
    cursor: pointer;
}
</style>