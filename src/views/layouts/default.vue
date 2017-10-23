<template>
<div>
  <website-header></website-header>
  <nuxt />
  <website-footer></website-footer> 
    </div>
</template>
<script>
import header from '../../components/header/header'
import footer from '../../components/footer/footer'

export default {
  components: {
    'website-header': header,
    'website-footer': footer
  }
}
</script>
