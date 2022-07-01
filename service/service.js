
import supabase from "../configs/configDB.js"



const addItem = async valves => {
	try {
			const {data, error} = await supabase
					.from('Valves')
					.insert(valves)
					


			if (error) throw error
			return data
	} catch (e) {
			throw e
	}
}

const addPhoto = async photo => {
	try {
			const {data, error} = await supabase
					.from('Photo')
					.insert(photo)
					console.log('Photo:',photo);
					console.log('DPdata: ',data);

			if (error) throw error
			return data
	} catch (e) {
			throw e
	}
}

const getItem = async (id) => {
	try {
			const {data, error} = await supabase
					.from('Valves')
					.select('id, name,Photo(Src,name_photo),Type,Descryption,Exp,Tehnical')
					.match({id})

				
			if (error) throw error
			return data
	} catch (e) {
			throw e
	}
}

const getSearchN = async (name) => {
	try {
			const {data, error} = await supabase
			.from('Valves')
			.select('id, name ,Type, Photo(Src,name_photo)')
			.match({name})
     
				
			if (error) throw error
			return data
	} catch (e) {
			throw e
	}
}
const getSearchT = async (Type) => {
	try {
			const {data, error} = await supabase
			.from('Valves')
			.select('id, name, Type,Photo(Src,name_photo)')
			.match({Type})
			
			if (error) throw error
			return data
	} catch (e) {
			throw e
	}
}
const getSearchNT = async (info) => {
	try {
			const name = info.name
			const Type = info.type
			
			const {data, error} = await supabase
			.from('Valves')
			.select('id, name, Type,Photo(name_photo)')
			.match({name})
			.match({Type})
      

			if (error) throw error
			return data
	} catch (e) {
			throw e
	}
}
const getSearchM = async(Material) =>{
	try{
		
		const {data, error} = await supabase
			.from('Valves')
			.select('id, name, Type,Photo(Src,name_photo),Material')
			.match({Material})
			
			if (error) throw error
			return data
	} catch (e) {
			throw e
	}

}
const getSearchMN = async(info)=>{
	try {
		const name = info.name
		const Material = info.mat
		
		const {data, error} = await supabase
		.from('Valves')
		.select('id, name, Type,Photo(name_photo),Material')
		.match({name})
		.match({Material})
  

		if (error) throw error
		return data
} catch (e) {
		throw e
}
}

const getSearchMT = async(info)=>{
	try {
		const Type = info.type
		const Material = info.mat
		
		const {data, error} = await supabase
		.from('Valves')
		.select('id, name, Type,Photo(name_photo),Material')
		.match({Type})
		.match({Material})
  

		if (error) throw error
		return data
} catch (e) {
		throw e
}
}

const getSearchMNT = async(info)=>{
	try {
		const name = info.name
		const Type = info.type
		const Material = info.mat
		
		const {data, error} = await supabase
		.from('Valves')
		.select('id, name, Type,Photo(name_photo),Material')
		.match({name})
		.match({Type})
		.match({Material})
  

		if (error) throw error
		return data
} catch (e) {
		throw e
}
}

export default {
	getSearchMN,
	getItem,
  getSearchN,
  getSearchT,
  getSearchNT,
  addItem,
  addPhoto,
  getSearchM,
  getSearchMT,
  getSearchMNT
}