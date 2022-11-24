const fs = require('fs');
let itemStorage = JSON.parse(fs.readFileSync('data.json', 'utf8'));

exports.viewItems = () => {
  try {
    const values = itemStorage;
    console.log(values);
    return values;
  } catch (err) {
    console.log(err);
  }
}

// Add Item Method
exports.addItem = (req) => {
  let itemId;
  if (itemStorage.length == 0 || itemStorage.length == "undefined") {
    itemId = 1;
  } else {
    itemId = itemStorage.length + 1;
  }
  req.body.id = itemId;
  const details = req.body;
  console.log(itemId);
  console.log(details);
  try {
    itemStorage.push(details);
    return `Item Added under Item ID ${itemId - 1}`;
  } catch (err) {
    console.log(err);
  }
}

// Delete Item
exports.deleteItem = (itemId) => {
try {
  let check = false;
  let num;
  itemStorage.forEach((v) => {
    if (v.id == itemId) {
      num = itemId;
    }
  });
  if (num == itemId) {
    itemStorage = itemStorage.filter((obj) => obj.id != itemId);
    check = true;
  }
  if (check) {
    return "Item Removed!";
  } else {
    return "No Data";
  }
} catch (err) {
console.log(err);
}
}