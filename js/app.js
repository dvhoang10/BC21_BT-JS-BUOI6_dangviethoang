// var array = [10, -2, 0, -12, 14, 5, -24, -1, 0];
var array = [];
var number = document.getElementById("txt-number");

// thêm phần tử vào mảng
document
  .getElementById("btn-push-array")
  .addEventListener("click", function () {
    var showError = document.querySelector("#show-error");
    var numberValue = number.value * 1;

    if (number.value !== "" && Number.isInteger(numberValue)) {
      array.push(numberValue);
      showError.classList.remove("active");
    } else {
      showError.classList.add("active");
      showError.innerText = "Vui lòng nhập vào 1 số nguyên";
    }
  });

// Hiển thị các phần tử trong mảng
function showArray(array, selector) {
  var showArray = document.querySelector(`${selector}`);

  var htmls = array.map(function (number, index) {
    return `<div>Vị trí ${index} : ${number} </div>`;
  });

  showArray.classList.toggle("active");

  if (array.length) {
    showArray.innerHTML = htmls.join("");
  } else {
    showArray.innerText = "Không có phần tử nào trong mảng";
  }
}

document
  .getElementById("btn-show-array")
  .addEventListener("click", function () {
    showArray(array, "#show-array");
  });

// lọc ra các phần tử dương
var array1 = array.filter(function (number) {
  return number > 0;
});

// ---------------------BT1---------------------

// Tổng các số dương trong mảng
function tongCacSoDuong(array) {
  var sum = array.reduce(function (acc, item) {
    return item > 0 ? acc + item : acc;
  }, 0);

  return sum;
}

document.getElementById("btn-b1").addEventListener("click", function () {
  var showB1 = document.querySelector("#show-b1");

  var sum = tongCacSoDuong(array1);

  showB1.classList.add("active");
  showB1.innerText = `Tổng: ${sum}`;
});

// ---------------------BT2---------------------

// Đếm số dương
function demSoDuong(array) {
  var count = array.reduce(function (acc, item) {
    return item > 0 ? ++acc : acc;
  }, 0);

  return count;
}

document.getElementById("btn-b2").addEventListener("click", function () {
  var showB2 = document.querySelector("#show-b2");

  var count = demSoDuong(array1);

  showB2.classList.add("active");
  showB2.innerText = `Có: ${count}`;
});

// ---------------------BT3---------------------

// Tìm min
function timSoNhoNhat(array) {
  var min = array.reduce(function (acc, item) {
    return acc > item ? item : acc;
  });

  return min;
}

document.getElementById("btn-b3").addEventListener("click", function () {
  var showB3 = document.querySelector("#show-b3");

  var min = timSoNhoNhat(array);

  showB3.classList.add("active");
  showB3.innerText = `${min}`;
});

// ---------------------BT4---------------------

document.getElementById("btn-b4").addEventListener("click", function () {
  var showB4 = document.querySelector("#show-b4");

  var min = timSoNhoNhat(array1);

  showB4.classList.add("active");
  showB4.innerText = `${min}`;
});

// ---------------------BT5---------------------

function timSoChanCuoiCung(array) {
  var n = array.length;
  while (n > 0) {
    if (array[n] % 2 == 0) return array[n];
    n--;
  }
  return -1;
}

document.getElementById("btn-b5").addEventListener("click", function () {
  var showb5 = document.querySelector("#show-b5");

  var number = timSoChanCuoiCung(array);

  showb5.classList.add("active");
  showb5.innerText = `${number}`;
});

// ---------------------BT6---------------------

function doiViTri(array, index1, index2) {
  var tmp = array[index1];
  array[index1] = array[index2];
  array[index2] = tmp;
  return array;
}

document.getElementById("btn-b6").addEventListener("click", function () {
  var position1 = document.getElementById("txt-position1").value * 1;
  var position2 = document.getElementById("txt-position2").value * 1;

  array = doiViTri(array, position1, position2);

  showArray(array, "#show-b6");
});

// ---------------------BT7---------------------

document.getElementById("btn-b7").addEventListener("click", function () {
  array.sort(function (a, b) {
    return a - b;
  });

  showArray(array, "#show-b7");
});

// ---------------------BT8---------------------

function kiemTraSnt(n) {
  if (n < 2) return 0;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return 0;
  }
  return 1;
}

function sntDauTien(array) {
  for (var i = 0; i < array.length; i++) {
    if (kiemTraSnt(array[i]) == 1) return array[i];
  }
  return -1;
}

document.getElementById("btn-b8").addEventListener("click", function () {
  var showb8 = document.querySelector("#show-b8");

  var number = sntDauTien(array);

  showb8.classList.add("active");
  showb8.innerText = `${number}`;
});

// ---------------------BT9---------------------
// var floatArray = [2.3, 1.3, 1, 9.2];
var floatArray = [];
var floatNumber = document.getElementById("txt-float-number");

function kiemtraSoNguyen(n) {
  return Number.isInteger(n);
}

function demSoNguyen(array) {
  var count = array.reduce(function (acc, item) {
    return kiemtraSoNguyen(item) == true ? ++acc : acc;
  }, 0);
  return count;
}

document.getElementById("btn-b9-push").addEventListener("click", function () {
  floatArray.push(floatNumber.value * 1);
});

document.getElementById("btn-b9-show").addEventListener("click", function () {
  showArray(floatArray, "#show-b9");
});

document.getElementById("btn-b9-concat").addEventListener("click", function () {
  floatArray = floatArray.concat(array);
  console.log(floatArray);
});

document.getElementById("btn-b9-find").addEventListener("click", function () {
  var showb9 = document.querySelector("#show-b9");

  var count = demSoNguyen(floatArray);

  showb9.classList.add("active");
  showb9.innerText = `Có ${count} số nguyên`;
});

// ---------------------BT10---------------------

// Đếm số âm
function demSoAm(array) {
  var count = array.reduce(function (acc, item) {
    return item < 0 ? ++acc : acc;
  }, 0);

  return count;
}

document.getElementById("btn-b10").addEventListener("click", function () {
  var showb10 = document.querySelector("#show-b10");

  var count1 = demSoDuong(array);
  var count2 = demSoAm(array);
  var compare;

  if (count1 > count2) {
    compare = ">";
  } else if (count1 < count2) {
    compare = "<";
  } else compare = "=";

  showb10.classList.add("active");
  showb10.innerHTML = `
        <div>Số dương: ${count1}</div> 
        <div>Số âm: ${count2}</div>
        <div>Số dương ${compare} Số âm</div>
    `;
});
