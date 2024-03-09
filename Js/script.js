const input = document.getElementById("input");
const container = document.getElementById("container");

const print = (filterValue) => {
  console.log(filterValue);
  container.innerHTML = "";
  filterValue = filterValue.toLowerCase();

  emojiList.forEach((val) => {
    let emoji = val.emoji;
    let description = val.description;
    let category = val.category;

    if (
      emoji.toLowerCase().includes(filterValue) ||
      description.toLowerCase().includes(filterValue) ||
      category.toLowerCase().includes(filterValue)
    ) {
      let tableRow = document.createElement("tr");
      let tableData = `
        <td>${emoji}</td>
        <td>${description}</td>
        <td>${category}</td>
      `;
      tableRow.innerHTML = tableData;
      container.append(tableRow);
    }
  });
};

input.addEventListener("input", (event) => {
  let value = event.target.value;
  print(value);
});

window.onload = () => {
  print("");
};
