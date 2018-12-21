<template>
  <a class="btn" :href="to" @click="onClick">{{ text }}</a>
</template>

<script>
export default {
  props: [
    'text',
    'to'
  ],
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>


<style scoped>
.btn{
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    border-radius: 3px;
    font-weight: bold;
    color: #FFF;
    background-image: -webkit-linear-gradient(45deg, #709dff 0%, #b0c9ff 100%);
    background-image: linear-gradient(45deg, #709dff 0%, #b0c9ff 100%);
    transition: .4s;
}

.btn:hover{
    background-image: -webkit-linear-gradient(45deg, #709dff 50%, #b0c9ff 100%);
    background-image: linear-gradient(45deg, #709dff 50%, #b0c9ff 100%);
}
</style>
