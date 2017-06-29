<script>
import {postsUrl} from '@/services/api'
/* eslint-disable */
export default {
    data: () => ({
        blogs: [],
        searchBlog: '',
        textSearch: 'Searching',
        isSearching: false
    }),
    computed: {
        filterBlog () {
            return this.blogs.filter(blog => {
                return blog.title.match(this.searchBlog)
            })
        }
    },
    watch: {
        searchBlog (newVal, oldVal) {
            if (newVal.length > 0) {
                this.isSearching = true
                if (this.filterBlog.length == 0) {
                    this.textSearch = "searching not found"
                } else {
                    this.textSearch = "searching..."
                }
            } else {
                this.isSearching = false
            }
        }
    },
    created () {
        axios.get(postsUrl).then( async res => {
            let data = res.data
            this.blogs = data
        })
    }
}
</script>
<template>
    <div class="content">
        <div class="field search">
            <p class="control has-icons-left">
                <input type="text" v-model="searchBlog" class="input is-large" placeholder="Search">
                <span class="icon is-left is-large">
                    <i class="fa fa-search"></i>
                </span>
                <small class="help is-success" v-show="isSearching" style="font-size:20px">{{textSearch}}</small>
            </p>
        </div>
        <div class="card" v-for="v in filterBlog" :style="{'opacity:0.4' : isSearching}">
            <div class="card-content">
                <p class="title is-3">{{v.title}}</p>
                <p>{{v.body}}</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.content {
    width: 50%;
    margin: 0 auto;
}
.search {
    margin-top: 20px;
}
.card {
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>
