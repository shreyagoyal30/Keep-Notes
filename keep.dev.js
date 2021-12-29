"use strict";

var addButton = document.querySelector("#add");

var updation = function updation() {
  var tAreaData = document.querySelectorAll('textarea');
  var notes = [];
  tAreaData.forEach(function (note) {
    return notes.push(note.value);
  });
  localStorage.setItem('notes', JSON.stringify(notes));
};

var addNew = function addNew() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var note = document.createElement("div");
  note.classList.add("note");
  var htmlData = "\n<span class=\"but\">\n<button id=\"edit\"><i class=\"fa fa-edit fa-lg\"></i></button><button id=\"delete\"><i class=\"fa fa-trash fa-lg\"></i></button>\n</span>\n<div class=\"texti ".concat(text ? "" : "hidden", " \"></div>\n<textarea class=\"").concat(text ? "hidden" : "", "\"></textarea>");
  note.insertAdjacentHTML("afterbegin", htmlData);
  var edit = note.querySelector("#edit");
  var deletor = note.querySelector("#delete");
  var textor = note.querySelector(".texti");
  var tArea = note.querySelector("textarea");
  tArea.value = text;
  textor.innerHTML = text;
  deletor.addEventListener('click', function () {
    note.remove();
  });
  edit.addEventListener('click', function () {
    textor.classList.toggle('hidden');
    tArea.classList.toggle('hidden');
  });
  tArea.addEventListener('change', function (event) {
    var val = event.target.value;
    textor.innerHTML = val;
    updation();
  });
  document.body.appendChild(note);
};

var notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
  notes.forEach(function (note) {
    return addNew(note);
  });
}

;
addButton.addEventListener('click', function () {
  return addNew();
});