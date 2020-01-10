const getStatus = new Promise((resolve, reject) => {
	setTimeout(() => {
		var indicator = Math.random()
		if (indicator > .5) {
			resolve('Todo va Bien')
			console.log(indicator)
		}else {
			reject('Todo va Mal')
			console.log(indicator)
		}
	}, 1000)
})
getStatus
	.then((message) => {
		console.log(message)
	})
	.catch((message) => {
		console.log(message)
	})


const diasSemana = new Promise((ok, fail) => {
	const semanaCompleta = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
	var random = Math.random()
	
	setTimeout(() => {
		if (random > .5) {
			console.log(random)
			ok(semanaCompleta)
		}else{
			console.log(random)
			fail('No se pudieron obtener los días')
		}
	}, 2000)	
})
diasSemana
	.then((data) => {
		console.log('Los dias de la semana son:')
		console.log(data)
	})
	.catch((data) => {
		console.log(data)
	})


//const carrera =