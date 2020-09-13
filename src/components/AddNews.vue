<template>
  <b-row>
    <b-container>
      <h1 class="title pb-5">TULIS BERITA ANDA DISINI</h1>
      <b-row class="mt-5 mb-5">
        <b-col lg="5" class="d-flex align-content-center justify-content-center">
          <img src="../assets/add-news.svg" style="width: 100%;">
        </b-col>

        <b-col v-if="!submitted" lg="7" class="txt-content-regular text-left shadow p-3 bg-white rounded">
          <b-col class="title text-center" lg="12">
            <h2>Form berita</h2>
            <hr>
          </b-col>
          <b-row>
            <b-col lg="3" class="mb-2 d-flex align-items-center">
              <label for="date"> Tanggal </label>
            </b-col>
            <b-col lg="9" class="mb-2">
              <b-form-input id="date" :type="type" size="md" @mouseover="mouseOver" placeholder="Masukkan Tanggal"
                v-model="berita.date">
              </b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="3" class="mb-2 d-flex align-items-center">
              <label for="date"> Nama </label>
            </b-col>
            <b-col lg="9" class="mb-2">
              <b-form-input id="date" type=text size="md" placeholder="Masukkan Nama" v-model="berita.author">
              </b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="3" class="mb-2 d-flex align-items-center">
              <label for="date"> Judul Berita </label>
            </b-col>
            <b-col lg="9" class="mb-2">
              <b-form-input class="txt-uppercase" type=text size="md" placeholder="Judul Berita" v-model="berita.title">
              </b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="3" class="mb-2 d-flex align-items-center">
              <label for="date"> Lokasi Kejadian </label>
            </b-col>
            <b-col lg="9" class="mb-2">
              <b-form-input class="txt-uppercase" type=text size="md" placeholder="Lokasi Kejadian"
                v-model="berita.location"></b-form-input>
            </b-col>
          </b-row>

          <b-row>
            <b-col lg="3" class="mb-2">Konten Berita :</b-col>
            <b-col lg="12" class="mb-3">
              <b-form-textarea id="textarea-large" size="sm" rows="10" placeholder="Tuliskan Berita Anda"
                v-model="berita.news">
              </b-form-textarea>
            </b-col>
            <b-col lg="12" class="button-post">
              <b-button block variant="success" @click.prevent="post">Posting Berita</b-button>
            </b-col>
          </b-row>
        </b-col>

        <b-col lg="7" v-if="submitted"
          class="txt-content-regular text-center rounded d-flex align-items-center justify-content-center">
          <b-col>
            <b-alert variant="success" show>Berita Anda Sudah di Post, <router-link to="/" exact><strong>Lihat
                  Disni</strong></router-link>
            </b-alert>
          </b-col>

        </b-col>

        <b-col lg="12" class="mt-5 title">
          <h1>Preview Berita Anda</h1>
        </b-col>
        <b-col lg="12" class="text-left shadow p-3 bg-white rounded mt-5">
          <h1 class="txt-uppercase title">{{berita.title}}</h1>
          <p><small><strong>Tanggal : {{berita.date}}</strong></small></p>
          <p><small><strong>Penulis : {{berita.author}}</strong></small></p>
          <p class="txt-content text-justify"><span class="txt-uppercase"><strong>{{berita.location}}</strong></span> - {{berita.news}}</p>
        </b-col>

      </b-row>

    </b-container>
  </b-row>
</template>

<script>
  export default {
    data() {
      return {
        type: 'text',
        formInputs: [{
            id: "date",
            nama: "Tanggal"
          },
          {
            id: "text",
            nama: "Nama"
          },
        ],
        berita: {
          date: "",
          author: "",
          title: "",
          location: "",
          news: "",
        },
        submitted: false,
      }
    },
    methods: {
      post() {
        this.$http.post('https://vue-news-42e7c.firebaseio.com/posts.json', this.berita).then(function (data) {
          console.log(data);
          this.submitted = true;
        });
      },
      mouseOver() {
        this.type = "date";
      }
    },
    props: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input[type=text],
  input[type=date] {
    width: 100%;
    margin: 8px 0;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid #44b194;
  }
</style>