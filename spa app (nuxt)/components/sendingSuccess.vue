<template>
  <div class="incorrect">
    <p><slot></slot></p>
  </div>
</template>

<script>
export default {
  name: "SendingSuccess",
};
</script>

<style>
.incorrect {
  transition: 0.5s;
  margin-top: 40px;
  text-align: center;
  border-radius: 10px;
  padding: 20px 10px 0;
  font-weight: 600;
  animation: ani 2.5s forwards;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
}

@keyframes ani {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>