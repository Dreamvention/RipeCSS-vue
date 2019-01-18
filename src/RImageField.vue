<template>
  <RField>
    <RLabel v-if="label" :text="label"/>
    <RRow>
      <RCol sm="3">
        <RCard>
          <RCardSection>
            <img :src="thumb" class="image-field" :id="`thumb-${hashId}`">
            <input type="hidden" :value="value" :id="`input-${hashId}`" @change="handleChange">
          </RCardSection>
          <RCardFooter>
            <RBtn color="primary" block @click="handleOpenImageManager">
              <i class="fa fa-pencil"></i>
              {{ $t('common.button_edit') }}
            </RBtn>
            <span class="image-field-space"></span>
            <RBtn color="warning" block @click="handleClear">
              <i class="fa fa-trash-o"></i>
              {{ $t('common.button_clear') }}
            </RBtn>
          </RCardFooter>
        </RCard>
      </RCol>
    </RRow>
  </RField>
</template>
<script>
import RField from "./RField";
import RLabel from "./RLabel";
import RRow from "./RRow";
import RCol from "./RCol";
import RCard from "./RCard";
import RCardSection from "./RCardSection";
import RCardFooter from "./RCardFooter";
import RBtn from "./RBtn";

export default {
  components: {
    RField,
    RLabel,
    RRow,
    RCol,
    RCard,
    RCardSection,
    RCardFooter,
    RBtn
  },
  props: {
    label: String,
    placeholder: String,
    value: String,
    thumb: String
  },
  computed: {
    hashId() {
      return this.label.split("").reduce(function(a, b) {
        a = (a << 5) - a + b.charCodeAt(0);
        return a & a;
      }, 0);
    }
  },
  methods: {
    handleChange(e) {
      this.$emit("input", e.target.value);
    },
    handleOpenImageManager(e) {
      this.$store.dispatch("popup/imageManager/open", {
        elementId: `thumb-${this.hashId}`,
        inputId: `input-${this.hashId}`
      });
    },
    handleClear(e) {
      this.$emit("input", "");
      const imageEl = document.getElementById(`thumb-${this.hashId}`);
      imageEl.setAttribute("src", this.$o("builder.placeholder"));
    }
  }
};
</script>
<style lang="scss">
.image-field {
  display: block;
  width: 100%;
}
.image-field-space {
  display: block;
  height: 5px;
}
</style>
