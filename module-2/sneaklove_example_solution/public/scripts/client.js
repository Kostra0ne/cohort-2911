const createTagBtn = document.getElementById("btn_new_tag");

function createTag() {
  const tagInput = document.getElementById("new_tag_name");
  const tagName = tagInput.value;
  axios
    .post("/api/tags", { label: tagName })
    .then((result) => {
      const tagsContainer = document.getElementById("tags");
      const tagOption = createTagNode(result.data);
      tagsContainer.appendChild(tagOption);
      tagInput.value = "";
    })
    .catch((err) => {
      console.log(err);
    });
}

function createTagNode(tag) {
  const option = document.createElement("option");
  option.value = tag._id;
  option.textContent = tag.label;
  return option;
}
createTagBtn.onclick = createTag;
