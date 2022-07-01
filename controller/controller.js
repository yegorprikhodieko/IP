import Service from '../service/service.js';

let id_i=5;
const addItem = async (req, res, next) => {
	console.log('Req: ',req.body);
	
	const Valves = {
		id:id_i,
		name: req.body.name,
		Type: req.body.Type
		
	};
	const Photo = {
		id:id_i,
		name_photo: req.body.photo,
		Src: req.body.photo
	}
	
	try {
			const dataItem = await Service.addItem(Valves)
			const dataPhoto = await Service.addPhoto(Photo);
			res.send(`<h1>Данные успешно отправлены</h1><a href='/products.html'>Вернуться на страницу с продуктами</a>`);
			id_i++;
			next();
	} catch(e) {
			console.error(e);
			res.sendStatus(500);
	}
}

const getEx = async (req, res, next) => {
	try {
		const data = await Service.getItem(req.body.id)
		res.send(data)
	} catch(e) {
			console.error(e);
			res.sendStatus(500);
	}
}

const getSearch = async (req, res, next) => {
	const information = req.body
    
	 
	if (('mat' in information) && ('type' in information) && ('name' in information)) {
		try {
			const data = await Service.getSearchMNT(req.body)
			console.log(data);
			res.send(data)
		} catch(e) {
				console.error(e);
				res.sendStatus(550);
		}
	}else if (('type' in information) && ('name' in information)) {
		try {
			const data = await Service.getSearchNT(req.body)
			console.log(data);
			res.send(data)
		} catch(e) {
				console.error(e);
				res.sendStatus(550);
		}
	}else if(('mat' in information) && ('name' in information))
	try{
		const data = await Service.getSearchMN(req.body);
		res.send(data);
	}catch(e) {
		console.error(e);
		res.sendStatus(500);
	}else if(('mat' in information) && ('type' in information))
	try{
		const data = await Service.getSearchMT(req.body);
		res.send(data);
	}catch(e) {
		console.error(e);
		res.sendStatus(500);
	}else if ('type' in information) {
		try {
			const data = await Service.getSearchT(req.body.type)
            console.log('DataD',data);
			res.send(data)
		} catch(e) {
				console.error(e);
				res.sendStatus(500);
		}
	} else if ('name' in information) {
		try {
			const data = await Service.getSearchN(req.body.name)
			res.send(data)
		} catch(e) {
				console.error(e);
				res.sendStatus(500);
		}
	}else if('mat' in information){
		try{
			const data = await Service.getSearchM(req.body.mat);
			res.send(data);
		}catch(e) {
			console.error(e);
			res.sendStatus(500);
		}
	}
}


export default {
	addItem,	
	getSearch,
	getEx
}
