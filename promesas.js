const getStatus = new Promise((resolve, reject) => {
	let indicator = Math.random()
	setTimeout(() => {
		if (indicator > .5) {
			console.log(indicator)
			resolve('Todo va Bien')
		}else {
			console.log(indicator)
			reject('Todo va Mal')
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
	let random = Math.random()	
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
	.catch((data) => console.log(data))


const proyecto = new Promise((completado, incompleto) => {
	let random = Math.random()
	setTimeout(() => {
		if (random > .5) {
			console.log(random)
			completado('El proyecto se entrego completo y a Tiempo')
		}else{
			console.log(random)
			incompleto('Eres un bastardo y no cumpliste tu deber')
		}
	}, 3000)
})
proyecto
	.then((message) => console.log(message))
	.catch((message) => console.log(message))


const vacaciones = new Promise((aprobado, denegado) => {
	let random = Math.random()
	setTimeout(() => {
		if (random > .5) {
			console.log(random)
			aprobado('Anda a descansar que te lo has ganado')
		}else{
			console.log(random)
			denegado('No podrás salir de vacaciones en las fechas solicitadas')
		}
	}, 4000)
})
vacaciones
	.then((msj) => console.log(msj))
	.catch((msj) => console.log(msj))


/*
//Promise.all ejecutará todas las promesas y mostrará el resultado hasta que todas terminen, si alguna falla ahí muestra el error y el resto no se ejecutará.
Promise.all([
	getStatus, 
	diasSemana, 
	proyecto, 
	vacaciones
])
.then((message) => console.log(message))
.catch((message) => console.log(message))
*/


/*
//Promise.race ejecutará solamente la Promesa que primero se resuelva sea exitosa o fallida
Promise.race([
	getStatus,
	diasSemana,
	proyecto,
	vacaciones
	])
.then((message) => console.log(message))
.catch((message) => console.log(message))
*/