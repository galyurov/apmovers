<?php
		  session_start();
		  if(!$_COOKIE['aphash']){
			header('Location: /');
		  }
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>My profile</title>
	<link rel="stylesheet" href="css/reset.css">
	<link rel="stylesheet" href="css/profile.css">
	<link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
</head>

<body id="body">
	<main>
		<div class="l-navbar" id="navbar">
			<nav class="nav">
				<div>
					<a href="/" class="nav__logo">
						<i style="color:#ffffff" class='bx bx-home-alt nav__icon nav__logo-icon'></i>
						<span class="nav__logo-text">Apmovers</span>
					</a>
					<div class="nav__toggle" id="nav-toggle">
						<i class='bx bxs-chevron-right'></i>
					</div>
					<ul class="nav__list">
						<a href="profile.php" class="nav__link active">
							<i class='bx bx-grid-alt nav__icon'></i>
							<span class="nav__text">My moves</span>
						</a>
						<a href="#" class="nav__link">
							<i class='bx bx-user nav__icon'></i>
							<span class="nav__text">Start new move</span>
						</a>
					</ul>
				</div>
				<div>
					<a href="profile-setting.php" class="nav__link">
						<i class='bx bx-cog nav__icon'></i>
						<span class="nav__text">Setting</span>
					</a>
					<a href="signout.php" class="nav__link ">
						<i class='bx bx-log-out-circle nav__icon'></i>
						<span class="nav__text">Log Out</span>
					</a>
				</div>
			</nav>
		</div>
	</main>
	<script src="js/auth.js"></script>
	<script src="js/profile.js"></script>
</body>

</html>