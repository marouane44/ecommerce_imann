<template>
  <div class="container">
    <common-navbar />
    <h1 style="border-style: dotted; border-color: green; text-align: center;padding:10px;font-size: 30px;color :red">Contact_me:+212 602-78-11-07</h1>
    <iframe style="margin-top:10px;  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;" src="https://giphy.com/embed/1yMfs1NsNIAItbpXzO" width="300" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    <Nuxt />
 
  </div>
</template>

<script>
import CommonNavbar from '~/components/CommonNavbar'

export default {
  components: { CommonNavbar }
}
</script>
