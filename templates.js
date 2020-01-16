const URL_POKEMON = `https://pokeapi.co/api/v2/pokemon/id`
var lista = document.getElementById('lista')
var availablePokemonList = []

async function loadPokemon() {
	var nId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	var n = 0
	var m = n+1
	async function getPokemon(id) {
		const pokemon = await fetch(URL_POKEMON.replace('id', id))
		const poke 	  = await pokemon.json()
		//console.log('Pokemon Elegido: ', poke.name)
		//availablePokemon.innerHTML = `${n}. ${poke.name}<br />`
		availablePokemonList.push(poke)
		lista.innerHTML += await m+'. '+availablePokemonList[n].name + '<br/>'
		console.log(n)
		console.log(m)
		console.log(m+'. '+poke.name)
		n++
		m++
	}
	//const listPokemon = await getPokemon(n)
	nId.forEach((nId)=>{
		getPokemon(nId)
	})
}
loadPokemon()