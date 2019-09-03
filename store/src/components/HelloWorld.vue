<template>
  <div class="content">
      <button class="knop bnt1" name="button"><router-link to="/product">TO BUY CLICK HERE!</router-link></button>

    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  text-decoration: none;
  color: white;
  padding: 33px;

}
</style>
