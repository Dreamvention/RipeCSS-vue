<template>
  <div class="ve-autocomplete">
    <RDropdown v-model="dropdownOpen" :items="items" @click-input="handleSelect">
      <template slot="activator">
        <RTextField
          :type="type"
          :size="size"
          :errorMessages="errorMessages"
          :value="searchInput"
          :label="label"
          :placeholder="placeholder"
          @input="handleSearch"
        />
      </template>
    </RDropdown>
    <span v-if="loading">loading</span>
  </div>
</template>
<script>
import { find } from "lodash";
import RTextField from "./RTextField";
import RDropdown from "./RDropdown";
export default {
  components: { RTextField, RDropdown },
  props: {
    type: {
      type: String,
      default: "text"
    },
    size: {
      type: String,
      default: "md"
    },
    errorMessages: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: []
    },
    label: String,
    placeholder: String,
    loading: Boolean
  },
  data() {
    return {
      search: "",
      dropdownOpen: false
    };
  },
  computed: {
    searchInput() {
      let result = this.search;
      if (this.value) {
        const item = find(this.items, { value: this.value });
        if (item) {
          result = item.title;
        }
      }
      return result;
    }
  },
  methods: {
    handleSearch(value) {
      this.search = value;
      this.$emit("update:searchInput", value);
    },
    handleSelect({ value, title }) {
      this.$emit("input", value);
      this.search = title;
      this.$emit("update:searchInput", title);
    }
  }
};
</script>
<style lang="scss" scoped>
.ve-autocomplete {
  margin-bottom: 10px;
}
</style>
