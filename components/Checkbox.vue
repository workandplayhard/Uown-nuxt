<template>
  <div class="mb-0 pl-0">
    <input
      :id="idProp"
      type="checkbox"
      :value="value"
      v-model="proxyChecked"
      class="hidden px-8"
    />
    <label class="flex items-center cursor-pointer" :for="idProp">{{
      label
    }}</label>
  </div>
</template>

<script>
import checkbox from "../mixins/checkbox";

export default {
  mixins: [checkbox],
};
</script>

<style lang='scss' scoped>
@import "../assets/css/variables";

input[type="checkbox"] {
  + label::before {
    content: "";
    background: transparent;
    border: 1px solid #1d1d1b;
    border-radius: 100px;
    display: inline-block;
    height: 20px;
    width: 20px;
    margin-right: 10px;
    vertical-align: -6px;
  }

  &:checked + label::before {
    border-color: $aquamarine;
    background: #fff url(../assets/images/success.svg) no-repeat center center;
    background-size: cover;
  }
}
</style>