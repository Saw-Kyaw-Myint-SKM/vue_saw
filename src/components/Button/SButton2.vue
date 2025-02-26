<template>
  <button class="saw-button-2">
    {{ text }}
  </button>
</template>

<script setup>
import { defineProps, defineOptions } from "vue";
defineOptions({
  name: "SButton2",
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
.saw-button-2 {
  position: relative;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  padding-block: 0.5rem;
  padding-inline: 1.25rem;
  background-color: v-bind(bgColor);
  border-radius: v-bind(borderRadius);
  color: v-bind(color);
  gap: 10px;
  font-weight: bold;
  border: v-bind(border);
  outline: none;
  overflow: hidden;
  font-size: 15px;
  cursor: pointer;
}

.icon {
  width: 24px;
  height: 24px;
  transition: all 0.3s ease-in-out;
}

.saw-button-2:hover {
  transform: scale(1.05);
  border-color: #fff9;
}

.saw-button-2:hover .icon {
  transform: translate(4px);
}

.saw-button-2:hover::before {
  animation: shine 1.5s ease-out infinite;
}

.saw-button-2::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 100%;
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0) 70%
  );
  top: 0;
  left: -100px;
  opacity: 0.6;
}

@keyframes shine {
  0% {
    left: -100px;
  }

  60% {
    left: 100%;
  }

  to {
    left: 100%;
  }
}
</style>
