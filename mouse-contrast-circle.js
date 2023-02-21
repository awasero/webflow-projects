var circle = document.getElementById('circle');
		document.addEventListener('mousemove', function(event) {
			var x = event.clientX;
			var y = event.clientY;
			circle.style.left = x + 'px';
			circle.style.top = y + 'px';
		});


document.write('<p>Webflow Project by <a href="https://awasero.com/" rel="nofollow" target="_blank">Awasero</a></p>');
