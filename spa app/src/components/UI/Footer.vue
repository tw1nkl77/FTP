<template>
  <v-footer class="footer">
    <div class="footer-content">
      <div class="icons">
        <v-icon v-for="icon of icons" :key="icon">{{ icon }}</v-icon>
      </div>
      <p>
        PRagmstic.STUDIO работаем с 2008 года, выполнено более 300 проектов в
        сферах: сайт для бюджетной организации, сайт детского сада, сайт школы,
        сайт сельского поселения, сайт администрации муниципального образования,
        сайт текстильной компании, сайт завода, сайт it компании, корпоративный
        портал...
      </p>
    </div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      "mdi-facebook",
      "mdi-twitter",
      "mdi-linkedin",
      "mdi-instagram",
      "mdi-vk",
    ],
    // icons: [1, 2, 3, 4, 5]
  }),
};
</script>

<style lang="scss">
.footer {
  background: url("http://orgcomnet.ru/wp-content/themes/scalia/images/footer-bg.png");
  // height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;

  .icons {
    margin: 20px auto 30px;
    text-align: center;

    i {
      color: #fff;
      padding: 20px;
      border: 1px solid #fff;
      border-radius: 50%;
      margin: 0px 10px;
      transition: 0.4s;

      &:hover {
        background-color: #fff;
        color: #1b1b1b;
        cursor: pointer;
      }
    }
  }

  p {
    text-align: center;
    margin: 0 auto;
    color: #fff;
    font-size: 20px;
  }
}
</style>