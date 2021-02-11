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
