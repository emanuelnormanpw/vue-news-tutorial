<template>
  <b-row>
    <b-container>
      <b-col lg="12" class="mb-5 title justify-content-center">
        <h1>BERITA MASYARAKAT</h1>
        <b-col class="txt-content">
          <p>Sebuah portal untuk membagikan berita di sekitar anda</p>
          <p class="text-uppercase"><strong>Ada Berita. </strong><strong>Tulis. </strong><strong>Bagikan</strong></p>
        </b-col>
      </b-col>
      <b-col lg="12" class="justify-content-center">
        <img src="../assets/img-home.svg" style="width: 100%;">
      </b-col>
      <b-col class="mt-5 title">
        <h2>List Berita</h2>
        <hr>
      </b-col>


      <!-- Berita Upload disini -->
      <list-content></list-content>
    </b-container>
  </b-row>
</template>

<script>
  import Content from './Content.vue'
  export default {
    components: {
      'list-content': Content
    },
  }
</script>

<style>

</style>