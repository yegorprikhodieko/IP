const searchBtn = document.querySelector('#search')


searchBtn.addEventListener('click', search)

	async function search(e) {
		e.preventDefault()
		const inputName = document.querySelector('#Nam')
		const inputType = document.querySelector('#type')
		const inputMat = document.querySelector('#Mat')

		const jsonReq = {}
		if (inputName.value) jsonReq.name = inputName.value
		if (inputType.value != 'null') jsonReq.type = `Клапан ${inputType.value}`
		if(inputMat.value) jsonReq.mat = inputMat.value;

		
		if (("name" in jsonReq) || ("type" in jsonReq) || ("mat" in jsonReq)) {
			const response = await request('/products', 'POST', jsonReq)
			let newInfo = await response.json()
			console.log(newInfo);
			getItems(newInfo)
		}
	}

    function getItems(items) {
		const itemArray = document.querySelector('.collection')

		itemArray.innerHTML = ''

		if (items[0] == undefined) {
			console.log('пусто')
			itemArray.innerHTML += `<h3 style='margin-left: .3vw;'>Ничего не найдено 404</h3>`
		}
		
		items.forEach((item) => {
			const itemBlock = document.createElement('div');

			itemBlock.classList.add('item');
			itemBlock.innerHTML = `
			<a href="/item/${item.id}">
				<div>
				
					<img src="./img/${item.Photo[0].name_photo}" alt="" style="--i:$100ms">
				</div>
				<div><p class="item_name" style="--ip:700ms;">${item.name} ${item.Type}</p></div>
			</a>

			`;

			itemArray.append(itemBlock);
			// console.log(item);
		})
	}

    async function request(url, method = 'GET', data = null) {
		try {
			const headers = {};
			let body;

			if (data) {
				headers['Content-Type'] = 'application/json';
				body = JSON.stringify(data);
			}
			console.log('req:', body);
            console.log(data);
			const response = await fetch(url, {
				method,
				headers,
				body
			})
			return await response;
		} catch (e) {
			console.warn(`Erorr: ${e.message}`);
		}
	}