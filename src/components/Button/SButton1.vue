<template>
  <button :class="sawClass" class="saw-button-1" role="button">
    <span class="saw-text">{{ text }}</span>
  </button>
</template>

<script setup>
import { defineProps, defineOptions } from "vue";
defineOptions({
  name: "SButton1",
});

defineProps({
  sawClass: {
    type: String,
    default: "",
  },
  color: { type: String, default: "#fff" },
  fontFamiy: {
    text: String,
    default: "Clarkson, Helvetica, sans-serif",
  },
  padding: {
    text: String,
    default: "1em 2.2em",
  },
  borderRadius: {
    text: String,
    default: "30px",
  },
  textColor: {
    text: String,
    default: "#000000",
  },
  buttonBeforeBg: {
    text: String,
    default: "#4889ff",
  },
  text: { type: String, default: "button" },
});
</script>
<style scoped>
.saw-button-1 {
  appearance: none;
  background-color: v-bind(color);
  border: 1px solid #a3a0a0;
  border-radius: v-bind(borderRadius);
  box-sizing: border-box;
  color: v-bind(textColor);
  cursor: pointer;
  display: inline-block;
  font-family: v-bind(fontFamiy);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1em;
  margin: 0;
  opacity: 1;
  outline: 0;
  padding: v-bind(padding);
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: opacity 300ms cubic-bezier(0.694, 0, 0.335, 1),
    background-color 100ms cubic-bezier(0.694, 0, 0.335, 1),
    color 100ms cubic-bezier(0.694, 0, 0.335, 1), box-shadow 200ms ease-in-out;
  user-select: none;
  white-space: nowrap;
}

.saw-button-1:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: v-bind(buttonBeforeBg);
  clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
  transition: clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  border-radius: v-bind(borderRadius);
}

.saw-button-1:hover:before {
  clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
}

.saw-button-1:hover {
  transform: translateY(-0.5px);
  box-shadow: 0px 4px 10px rgba(83, 80, 80, 0.2);
  color: #f4ecec;
}

.saw-button-1 span {
  position: relative;
  z-index: 1;
  transition: transform 200ms ease-in-out;
}

.saw-button-1:hover span {
  transform: translateY(-2px);
}
</style>
