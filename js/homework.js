
// * #1
// const title = document.createElement('h1');
// title.classList.add('title');
// title.innerText = 'Title';

// const text = document.createElement('p');
// text.classList.add('text');
// text.innerHTML = 'With some <b>HTML</b> <i>contents</i>';

// const btn = document.createElement('button');
// btn.classList.add('btn');
// btn.innerText = 'OK';

// const myAlert = (title, text, button) => {
// 	const body = document.body;
// 	const container = document.createElement('div');
// 	container. classList.add('container');
// 	body.append(container);
	
// 	const divAlert = document.createElement('div');
// 	divAlert.classList.add('wrap');
// 	container.append(divAlert);

// 	divAlert.append(title);
// 	divAlert.append(text);
// 	divAlert.append(button);

// 	button.addEventListener('click', (e) => {
// 		const target = e.currentTarget;
// 		target.closest('.wrap').classList.toggle('active');
// 	})

// 	container.addEventListener('click', (e) => {
// 		const target = e.currentTarget;
// 		target.classList.toggle('active');
// 	})

// }
// myAlert(title, text, btn);

// * #2
const tabs = document.querySelectorAll('.item');
const contents = document.querySelectorAll('.content-item');

tabs.forEach(tab => {
	tab.addEventListener('click', e => {
		const target = e.target;
		let dataId = target.getAttribute('data-id');
		let contentID = document.querySelector(dataId);

		contents.forEach(element => {
			element.classList.remove('activ');
		});
		contentID.classList.add('activ');

	})
});


