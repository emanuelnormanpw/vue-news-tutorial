<template>
    <b-col lg="12" class="text-left">
        <b-row class="text-right">
            <b-col class="md-form mt-0 mb-3">
                <input class="form-control" v-model="search" type="search" placeholder="Cari Judul Berita"
                    aria-label="Search">
            </b-col>
        </b-row>
        <div v-for="berita in filteredNews" :key="berita">
            <h1 class="title">{{berita.title}}</h1>
            <p><small><strong>Tanggal : {{berita.date}}</strong></small></p>
            <p><small><strong>Ditulis oleh : {{berita.author}}</strong></small></p>
            <p class="txt-content text-justify"><span class="txt-uppercase"><strong>{{berita.location}}</strong></span> - {{berita.news}}</p>
            <hr>
        </div>

    </b-col>

</template>

<script>
    export default {
        data() {
            return {
                news: [],
                search: '',
            }
        },
        created() {
            this.$http.get('https://vue-news-42e7c.firebaseio.com/posts.json').then(function (data) {
                return data.json();
            }).then(function (data) {
                var newsArray = [];
                for (let key in data) {
                    data[key].id = key;
                    newsArray.push(data[key]);
                }
                this.news = newsArray;
            })
        },

        computed: {
            filteredNews() {
                return this.news.filter(berita => {
                    return berita.title.toLowerCase().includes(this.search.toLowerCase())
                })
            }
        },
    }
</script>

<style scoped>

</style>