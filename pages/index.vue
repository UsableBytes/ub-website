<template>
<div>
    <h2> Welcome to nuxt.js website</h2>
    <p> This website is POC for {{company_name}} website</p>
    <nuxt-link to ="/about">About Page</nuxt-link>

</div>
</template>
<script>
export default {
    data(){
        return{
            company_name:"Usable Bytes"
        }
    },
    head:{
        title:"Welcome to Usable Bytes"
    }
}
</script>
<style>
</style>
