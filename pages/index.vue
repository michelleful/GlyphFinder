<template>
  <div class="container">
    <h1>Egyptian Hieroglyph Finder</h1>
    <div>
      <div>
        <span class="find">Find:</span>
        <input class="search" v-model="searchString" />
      </div>
      <InfoBox title="Help">
        <p>
          Quickly locate
          the Gardiner number or Unicode representation of an Egyptian hieroglyph,
          by searching for either:
        </p>
        <ul>
          <li>&nbsp;a pictorial element in the hieroglyph (e.g. "vulture")</li>
          <li>&nbsp;the pronunciation of the hieroglyph itself ("nrt")</li>
          <li>
            the meaning or pronunciation of a prominent word that
            contains the hieroglyph ("mother" or "mwt").
          </li>
        </ul>
        <p>
          For example, the suggested searches above all retrieve
          G14
          <span
            class="egyptian"
          >𓅐</span>.
        </p>
        <p>To make a suggestion, open an issue at TODO.</p>
      </InfoBox>
      <GardinerCategory
        v-for="(hieroglyphs, category) in matched"
        :key="category"
        :category="category"
        :hieroglyphs="hieroglyphs"
      ></GardinerCategory>
      <div
        class="no-results"
        v-if="Object.keys(matched).length === 0"
      >No matching hieroglyphs found!</div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import hieroglyphs from "~/data/hieroglyphs.json";
import InfoBox from "~/components/InfoBox.vue";
import GardinerCategory from "~/components/GardinerCategory.vue";
import hieroglyphSearch from "~/helpers/hieroglyphSearch.js";

export default {
  data() {
    return {
      searchString: ""
    };
  },
  components: {
    GardinerCategory,
    InfoBox
  },
  computed: {
    matched() {
      if (this.searchString.trim()) {
        return _.groupBy(
          hieroglyphSearch.search(this.searchString),
          "category"
        );
      } else {
        return this.all;
      }
    },
    all() {
      return _.groupBy(hieroglyphs, "category");
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  width: 80%;
  font-family: "Noto Sans", "Ubuntu", "sans-serif";
}

.egyptian {
  font-size: 200%;
  font-family: "Aegyptus", "Segoe UI Historic", "Noto Sans Egyptian Hieroglyphs",
    "sans-serif";
}

.no-results {
  margin-top: 1em;
}
</style>
