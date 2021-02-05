import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import blogPost from "./blogPost";
import postTag from "./postTag";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([blogPost, postTag]),
});
