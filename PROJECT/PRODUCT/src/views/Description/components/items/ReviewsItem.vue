<template>
  <div class="description_text">
    <figure>
        <div class="reviews_img"></div>
    </figure>
    <!-- <figcaption>
        <div class="reviews_info">
        <span><b>Name:</b> {{ item.name }}</span>
        <span><b>Surname:</b> {{ item.name }}</span>
        <span><b>Age:</b> {{ item.name }}</span>
        <span><b>Evaluation:</b> {{ item.name }}</span>
        <span><b>Positive:</b> {{ item.name }}</span>
        <span><b>Negative:</b> {{ item.name }}</span>
        <span><b>Comment:</b> {{ item.name }}</span>
        </div>
    </figcaption> -->
  </div>
</template>

<script>
export default {
    name: 'ReviewsItem',
    props: {
        item: {
            type: Object,
            // default: () => {},
        },
    },
};
</script>