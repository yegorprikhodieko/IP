document.addEventListener('DOMContentLoaded', async () => {
	
	let index = document.URL.substring(document.URL.lastIndexOf('/') + 1)
	const body={id: index};
	let data = await request(`/item/${index}`, 'POST', body)
	let info = await data.json()
	
	
	console.log(info);
	console.log('New: ',info[0].Photo[0].name_photo)
	createItem(info[0])
})

function createItem(info){
	const section = document.querySelector('.information')
	section.innerHTML = `
				<div class="item">
					<div class="item__information">
						<div>
							<h2>${info.Type} ${info.name}</h2>
							<p id="visible">${info.Descryption}
							</p>
						</div>
						<div class="item__information_description">
							
							<p>Условия эксплуатации <br>
							${info.Exp}</p>
							


						</div>
					</div>
					<div class="information__full">
					<p>Технические характеристики <br>
					${info.Tehnical}</p>
					</div>
				</div>
				<div class="item__logo">
					<img src="/img/${info.Photo[0].name_photo}" alt="${info.Photo[0].name_photo}">
				</div> 
	`
}




async function request(url , method='GET', data=null) {
		try {
			const headers={};
			let body;
			
			if (data){
				headers['Content-Type'] = 'application/json';
				body = JSON.stringify(data);
			}
			console.log('req:', body);
			const response = await fetch(url, {
				method,
				headers,
				body
			})
			return await response;
		} catch(e) {
			console.warn(`Erorr: ${e.message}`);
		}
	}