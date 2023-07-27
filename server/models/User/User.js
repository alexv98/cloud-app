const {Schema, model} = require ("mongoose");
const {ObjectId} = require ("mongodb");

const User = new Schema({
	name: { type: String, required: true },
	lastname: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	diskSpace: { type: Number, default: 1024 ** 3 * 10 },
	usedSpace: { type: Number, default: 0 },
	avatar: { type: String },
	files: [{ type: ObjectId, ref: 'File' }],
})

module.exports = model('User', User)
