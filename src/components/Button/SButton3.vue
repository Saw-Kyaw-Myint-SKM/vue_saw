<template>
  <button class="button-92" role="button">Button 92</button>
</template>

<script setup>
import { defineProps, defineOptions } from "vue";
defineOptions({
  name: "SButton3",
});

defineProps({
  sawClass: {
    type: String,
    default: "",
  },
  color: { type: String, default: "#fff" },
  fontFamiy: {
    type: String,
    default: "Clarkson, Helvetica, sans-serif",
  },
  padding: {
    type: String,
    default: "1em 2.2em",
  },
  borderRadius: {
    type: String,
    default: "30px",
  },
  textColor: {
    type: String,
    default: "#000000",
  },
  bgColor: {
    type: String,
    default: "#4889ff",
  },
  border: {
    type: String,
    default: "",
  },
  text: { type: String, default: "button" },
});
</script>
<style scoped>
/* CSS */
.button-92 {
  --c: #fff;
  /* text color */
  background: linear-gradient(90deg, #0000 33%, #fff5, #0000 67%)
      var(--_p, 100%) / 300% no-repeat,
    #004dff;
  /* background color */
  color: #0000;
  border: none;
  transform: perspective(500px) rotateY(calc(20deg * var(--_i, -1)));
  text-shadow: calc(var(--_i, -1) * 0.08em) -0.01em 0 var(--c),
    calc(var(--_i, -1) * -0.08em) 0.01em 2px #0004;
  outline-offset: 0.1em;
  transition: 0.3s;
}

.button-92:hover,
.button-92:focus-visible {
  --_p: 0%;
  --_i: 1;
}

.button-92:active {
  text-shadow: none;
  color: var(--c);
  box-shadow: inset 0 0 9e9Q #0005;
  transition: 0s;
}

.button-92 {
  font-weight: bold;
  font-size: 2rem;
  margin: 0;
  cursor: pointer;
  padding: 0.1em 0.3em;
}
</style>
