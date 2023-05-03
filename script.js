var feet = document.getElementById("feet");
var inch = document.getElementById("inch");

feet.addEventListener("input", function () {
  let fData = this.value;
  let iData = fData * 12;
  inch.value = iData;
});

inch.addEventListener("input", function () {
  let iData = this.value;
  let fData = iData / 12;
  if (!Number.isInteger(fData)) {
    fData = fData.toFixed(2);
  }
  feet.value = fData;
});
