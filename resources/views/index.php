<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Z E N</title>

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.min.css">
	<style media="screen">
		body {
			background: url('bg.jpeg') 0 0 scroll no-repeat transparent;
			background-size: cover;
			font-family: "Avenir Next", "Helvetica Neue", Helvetica, Arial, Roboto, "Droid Sans", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif
			color: #fff;
		}

		.zen--container {
			display: flex;
			align-items: center;
			justify-content: center;

			height: 100vh;
		}

		.zen {
			padding: 30px;
			background-color: rgba(0, 0, 0, 0.2);
			border-radius: 2px;

			opacity: 0;
		}
		.zen.show {
			opacity: 1;
			transition: all 1.5s;
		}

		.zen__jp,
		.zen__en {
			text-align: center;
			margin: 0;
			color: #fff;
		}
		.zen__jp {
			margin-bottom: 5%;
		}
	</style>
</head>
<body>
	<div class="zen--container">
		<div class="zen">
			<h1 class="zen__jp"></h1>
			<h1 class="zen__en"></h1>
		</div>
	</div>

	<script type="text/javascript">
		const request = new XMLHttpRequest();
		request.open('GET', 'https://zen.pagu.co/api', true);

		request.onload = () => {
		if (request.status >= 200 && request.status < 400) {
			// Success!
			const data = JSON.parse(request.responseText);

			const area = document.getElementsByClassName('zen')[0];
			const jp = document.getElementsByClassName('zen__jp')[0];
			const en = document.getElementsByClassName('zen__en')[0];

			jp.innerHTML = data.thought_jp.replace('|', '<br>');
			en.innerHTML = data.thought_en.replace('|', '<br>');

			setTimeout(() => {
				area.classList.add('show');
			}, 500);
		} else {
			// We reached our target server, but it returned an error
			console.log(request);
		}
		};

		request.onerror = () => {
		// There was a connection error of some sort
		};

		request.send();
	</script>
</body>
</html>
