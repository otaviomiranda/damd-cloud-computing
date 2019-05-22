var request
var response
var context_global

const units = [
	{
		message: 'Bem vindo à PUC Minas Praça da Liberdade',
		coordinateal: { lat: -19.932683, lng: -43.936024 }
	},
	{
		message: 'Bem vindo à PUC Minas Coração Eucarístico',
		coordinateal: { lat: -19.924213, lng: -43.991770 }
	},
	{
		message: 'Bem vindo à PUC Minas São Gabriel',
		coordinateal: { lat: -19.856918, lng: -43.919555 }
	},
	{
		message: 'Bem vindo à PUC Minas São Gabriel',
		coordinateal: { lat: -19.977379, lng: -44.026095 }
	}
]

function getDistance(position1, position2) {
	var deg2rad = function (deg) { return deg * (Math.PI / 180); },
		R = 6371,
		dLat = deg2rad(position2.lat - position1.lat),
		dLng = deg2rad(position2.lng - position1.lng),
		a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
			+ Math.cos((position1.lat))
			* Math.cos(deg2rad(position1.lat))
			* Math.sin(dLng / 2) * Math.sin(dLng / 2),
		c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
	return parseInt(((R * c * 1000).toFixed()))
}

function findNearestUnit() {

	var result = units.every((unit) => {
		let distance = getDistance(request, unit.coordinateal)

		if (distance <= 100) {
			endExecute({ found: true, message: unit.message })
			return false
		}

		return true

	})

	if (result)
		endExecute({ found: false, message: 'Não há unidades próximas' })

}

function endExecute(message) {

	response(null, message)
	context_global.done();
}

exports.handler = (event, context, callback) => {

	request = event
	response = callback
	context_global = context

	try {

		findNearestUnit()

	} catch (err) {

		console.log(err)

		endExecute({ err }, true)

	}
}