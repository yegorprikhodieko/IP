import multer from 'multer'

const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, 'images/')
	},
	filename(req, file, cb) {
		cb(null, new Date().toDateString() + '-' + file.originalname)
	}

})

const fileType = ['image/png', 'image/jpeg', 'image/jpg']

const fileFilter = (req, file, cb) => {
	if (fileType.includes(file.mimetype)){
		cb(null, true)
	} else {
		cb(null, false)
	}
}

const uploadPhoto = multer({
	storage, fileFilter
}).single('photo')

export default {
	uploadPhoto
}