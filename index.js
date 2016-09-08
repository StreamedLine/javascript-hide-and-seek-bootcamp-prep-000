function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')[0];
}

function increaseRankBy(n) {
  var lists = document.getElementsByClassName('ranked-list');
  for (var i = 0; i < lists.length; i++) {
    let list = lists[i].getElementsByTagName('li');
    for (var j = 0; j < list.length; j++) {
      list[j].innerHTML = parseInt(list[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  var outer = document.getElementById('grand-node');

  while (outer.querySelector('div')) {
    outer = outer.querySelector('div');
  }

  return outer;
}
