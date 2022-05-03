<template>
  <div class="description_text">
    <figure>
        <div class="reviews_img"></div>
        <div class="reviews_info__about">
            <span>{{ review.name }}</span>
        </div>
    </figure>
    <figcaption>
        <div class="reviews_info">
        
        <span><b>Evaluation:</b> {{ review.evaluation }}</span>
        <span><b>Positive:</b> {{ review.positive }}</span>
        <span><b>Negative:</b> {{ review.negative }}</span>
        <span class="text-justify"><b>Comment:</b> {{ review.comment }}</span>
        </div>
    </figcaption>
  </div>
</template>

<script>
export default {
    name: 'ReviewsItem',
    props: {
        review: {
            type: Object,
            default: () => {},
        },
    },
};
</script>