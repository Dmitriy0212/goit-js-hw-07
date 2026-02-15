let target = document.querySelector("#categories");
console.log(`Number of categories: ${target.children.length}`);
for (let i = 0; i < target.children.length; i++) {
  console.log(`Category: ${target.children[i].firstElementChild.textContent}`);
  console.log(
    `Elements: ${target.children[i].lastElementChild.children.length}`
  );
}
