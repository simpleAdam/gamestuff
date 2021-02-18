function loop1() {
	console.log(Math.random())
}

setInterval(loop,30)



function loop2() {
	console.log(Math.random())

	setTimeout(loop2,80)
}
loop2()


function loop3(dt) {
	let totalTime=dt

	function loop4(dt) {
		
		let timepast=dt-totalTime
		console.log(dt,timepast)

		totalTime=dt;

		requestAnimationFrame(loop4)
	}

	requestAnimationFrame(loop4)
}

requestAnimationFrame(loop3)



class Timer
{
	constructor(deltaTime = 1 / 60)
	{
		let lastTime = 0;
		let accumulatedTime = 0;

		this.updateProxy = (time) =>
		{

			accumulatedTime += (time - lastTime) / 1000;

			while (accumulatedTime > deltaTime)
			{
				this.update(deltaTime);
				accumulatedTime -= deltaTime;
			}

			lastTime = time;

			this.render()
			this.enqueue();
		}
	}

	enqueue()
	{
		requestAnimationFrame(this.updateProxy)
	}

	start()
	{
		this.enqueue();
	}
	update(dt)
	{
		console.log('game update', dt)
	}
	render()
	{
		console.log('game render')
	}
}
