<template>
    <div>
        <h1>Purchase Form</h1>

        <div v-if="product">
            <img :src="product.image" :alt="product.name" width="200" />
            <h2>{{ product.name }}</h2>
            <p>Price: {{ product.price }}</p>
            <p>{{ product.description }}</p>

            <form @submit.prevent="submitPurchase">
                <div>
                    <label for="name">Your Name:</label>
                    <input type="text" id="name" v-model="form.name" required />
                </div>
                <div>
                    <label for="address">Shipping Address:</label>
                    <input type="text" id="address" v-model="form.address" required />
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="form.email" required />
                </div>
                <button type="submit">Purchase</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                address: '',
                email: '',
            },
            product: null,
        };
    },
    created() {
        const productId = this.$route.params.id;
        console.log("Received product ID:", productId);
        if (productId) {
            // Simulate fetching the product data; replace this with actual data fetching
            const productData = [
                // Same product data as in ProductListView
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
            ];
            this.product = productData.find(p => p.id == productId);
            console.log("Found product:", this.product);
        }
    },
    methods: {
        submitPurchase() {
            alert(`Purchased ${this.product.name} for ${this.product.price}`);
            // Handle actual form submission, e.g., send data to a server
        }
    }
};
</script>