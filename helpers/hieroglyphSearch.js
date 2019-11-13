import hieroglyphs from "~/data/hieroglyphs.json";
import * as JsSearch from "js-search";

var search = new JsSearch.Search("id");
search.indexStrategy = new JsSearch.PrefixIndexStrategy();

var REGEX = /[^a-zа-яё0-9\-:~']+/i;
search.tokenizer = {
  tokenize(text) {
    return text.split(REGEX).filter(
      text => text // Filter empty tokens
    );
  }
};

search.addIndex("description");
search.addIndex("pronunciations");
search.addIndex("keywords");
search.addIndex("meta");

search.addDocuments(hieroglyphs);

export default search;
