import React from "react";

import "./JumiaCategory.css";

import JumiaCategoryItem from "./JumiaCategoryItem";

export default function JumiaCategory() {
  return (
    <div className="jumiaCategory">
      <JumiaCategoryItem
        image="https://ug.jumia.is/cms/2021/cs/Quicklinks/w16/UG_w16_AB_test_-_Quicklinks_1.png"
        name="Supermarket"
      />

<JumiaCategoryItem
        image="https://ug.jumia.is/cms/2021/cs/Quicklinks/phones.jpg"
        name="Phones & Tablets"
      />

<JumiaCategoryItem
        image="https://ug.jumia.is/cms/2021/cs/Quicklinks/electric.jpg"
        name="Electronics"
      />

<JumiaCategoryItem
        image="https://ug.jumia.is/cms/2021/cs/Quicklinks/computing.jpg"
        name="Computing"
      />
    </div>
  );
}
