<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :disabled="disabled"
    :class="href ? '' : buttonClass"
  >
    <span v-if="startIcon" class="icon-left">
      <component :is="startIcon" />
    </span>
    <slot></slot>
    <span v-if="endIcon" class="icon-right">
      <component :is="endIcon" />
    </span>
  </component>
</template>

<script setup>
import { defineOptions, defineProps, computed, toRefs } from "vue";

defineOptions({
  name: "SButton",
});

// Define props
const props = defineProps({
  variant: {
    type: String,
    default: "contained",
    validator: (value) => ["text", "contained", "outlined"].includes(value),
  },
  color: {
    type: String,
    default: "primary",
    validator: (value) =>
      ["primary", "success", "error", "warning"].includes(value),
  },
  disabled: Boolean,
  href: String,
  startIcon: Object, // Pass icon component
  endIcon: Object, // Pass icon component
});

// Convert props to refs
const { variant, color, disabled, href, startIcon, endIcon } = toRefs(props);

// Compute button classes based on variant and color
const buttonClass = computed(() =>
  href.value
    ? ""
    : ["btn", variant.value, color.value, { disabled: disabled.value }]
);
</script>

<style scoped>
/* Base Button Styles */
.btn {
  font-size: 16px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  text-align: center;
  text-decoration: none;
  gap: 8px;
}

/* Variants */
.btn.text {
  background: transparent;
  border: none;
}

.btn.contained {
  color: white;
  border: none;
}

.btn.outlined {
  background: transparent;
  border: 2px solid;
}

/* Colors */
.btn.primary {
  background: #007bff;
  border-color: #007bff;
}

.btn.primary:hover {
  background: #0056b3;
}

.btn.success {
  background: #28a745;
  border-color: #28a745;
}

.btn.success:hover {
  background: #218838;
}

.btn.error {
  background: #dc3545;
  border-color: #dc3545;
}

.btn.error:hover {
  background: #c82333;
}

.btn.warning {
  background: #ffc107;
  border-color: #ffc107;
  color: black;
}

.btn.warning:hover {
  background: #e0a800;
}

/* Outlined Buttons */
.btn.outlined.primary {
  color: #007bff;
}

.btn.outlined.success {
  color: #28a745;
}

.btn.outlined.error {
  color: #c1b0b2;
}

.btn.outlined.warning {
  color: #ffc107;
}

/* Disabled State */
.btn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Icons */
.icon-left {
  display: flex;
  align-items: center;
}

.icon-right {
  display: flex;
  align-items: center;
}
</style>
