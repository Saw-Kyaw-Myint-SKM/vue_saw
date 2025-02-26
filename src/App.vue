<template>
  <div>
    <SButton1 text="Click Me" class="hla" />
    <SButton2></SButton2>
    <SButton3></SButton3>
    <SButton variant="contained">button</SButton>
    <SButton>Primary</SButton>
    <SButton disabled>Disabled</SButton>
    <SButton href="#text-buttons">Link</SButton>
    <SButton variant="contained" color="success"> Success </SButton>
    <SButton variant="contained" color="error"> Error </SButton>
  </div>
</template>

<script>
import SButton1 from "./components/Button/SButton1.vue";
import SButton3 from "./components/Button/SButton3.vue";
import SButton2 from "./components/Button/SButton2.vue";
import SButton from "./components/Button/SButton.vue";

export default {
  name: "App",
  components: {
    SButton1,
    SButton2,
    SButton3,
    SButton,
  },
};
</script>

<style>
.hla {
  background-color: aqua;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
