"use strict"

let data = {}
fetch('test_content_full.json')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    data = json
  })