<template>
<router-link :to="{name: 'product', params: {id: product.id}}">
    <div class="top-picks-items col-3 container add {{product.category}}">
        <img :src ="product.img" :alt="product.itemName" class="top-picks-img">

        <p>{{product.itemName }}<br> R{{product.price}}</p>
        <button class="btn-add-to-cart btn">Add To Cart</button>
        <button class="btn-see-more btn">See More</button>
    </div>
</router-link>
</template>

<script>
export default {
    props: ["product"]
};
</script>

<style scoped></style>
