function a () {
	console.log(`function a`)
	return new Promise((resolve, reject) => {
		resolve(10)
})
}

console.log(a().then(res => {
	console.log(`promise resolved value = ${res}`)
}))
