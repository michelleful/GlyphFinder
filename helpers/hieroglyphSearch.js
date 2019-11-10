import hieroglyphs from "~/data/hieroglyphs.json";
import * as JsSearch from "js-search";

var search = new JsSearch.Search("id");
search.indexStrategy = new JsSearch.PrefixIndexStrategy();

search.addIndex("description");
search.addIndex("pronunciations");
search.addIndex("keywords");

search.addDocuments(hieroglyphs);

export default search;
