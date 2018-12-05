const urls = [
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg72cUusCsmJKF4STm6pGVXvhai6MXYFBKpZNtNY6jMRwvQZ5O',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQex3UAPmhfxC5zPGyGP9WYe05fo5q2CTwPKgWI4aE81_ZuNB5z',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtFa2oOtjn2-CBesU7VHqFwsV91Pzk4g6R5n7fJR1MNV4daXB',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZBiqEJjk4pg51xNEc1VtRvyxgcR98URoLRkQbUa3R5w1t6-bY',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn8MAsyUJjyHFo5fMkNF2_kJvqCr7oqztPiOPO2HiAmbqxUO86'
];

var pictures = document.querySelectorAll('.picture');
var mainPicture = document.querySelector('.main-picture');

var promise = new Promise(function (resolve, reject) {
	var image = new Image();
	image.src = urls[0];
	image.addEventListener('load', function () {
		resolve();
	});
});

promise
	.then(function () {
		if (localStorage.getItem('mainPicture')) {
			mainPicture.src = localStorage.getItem('mainPicture');
		} else {
			mainPicture.src = urls[0];
		}
	})
	.then(function () {
		pictures[0].src = urls[0];
	})
	.then(function () {
		pictures[1].src = urls[1];
	})
	.then(function () {
		pictures[2].src = urls[2];
	})
	.then(function () {
		pictures[3].src = urls[3];
	})
	.then(function () {
		pictures[4].src = urls[4];
	})

for (var i = 0; i < pictures.length; i++) {
	function clickPicture(i) {
		mainPicture.src = urls[i];
		localStorage.setItem('mainPicture', urls[i]);
	}
	pictures[i].addEventListener('click', clickPicture.bind(null, i));
}


'use strict'

window.onload = btnClick();

var countTask = 0;

function btnClick() {

    function addListItem() {
        return new Promise(function (resolve) {
            var btnAdd = document.querySelector('.btnAdd');
            if (btnAdd) {
                btnAdd.addEventListener('click', function () {
                    resolve();
                })
            }
        });
    }

    addListItem()
        .then(function () {
            var taskList = document.querySelector('.taskList');
            var newTask = document.querySelector('.newTask');
            var taskName = newTask.value;
            if (!taskName) {
                return;
            }
            var taskItem = document.createElement('li');
            taskItem.textContent = taskName;
            taskList.append(taskItem);
            newTask.value = '';
            return addListItem();
        })

}
