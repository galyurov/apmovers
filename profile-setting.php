<?php
  		session_start();
		if($_COOKIE['apuser']){

		} else {
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
	<link rel="stylesheet" href="css/input.css">
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
						<a href="profile-admin.php" class="nav__link">
							<i class='bx bx-grid-alt nav__icon'></i>
							<span class="nav__text">Home</span>
						</a>
						<a href="#" class="nav__link">
							<i class='bx bx-user nav__icon'></i>
							<span class="nav__text">User</span>
						</a>
						<a href="#" class="nav__link">
							<i class='bx bx-bell nav__icon'></i>
							<span class="nav__text">Notification</span>
						</a>
						<a href="#" class="nav__link">
							<i class='bx bx-heart nav__icon'></i>
							<span class="nav__text">Favorites</span>
						</a>
						<a href="#" class="nav__link">
							<i class='bx bx-message-rounded nav__icon'></i>
							<span class="nav__text">Chat</span>
						</a>
					</ul>
				</div>
				<div>
					<a href="profile-setting.php" class="nav__link  active">
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
		<div class="setting">
			<form autocomplete="on" name="changeSetting" class="auth-sign setting-form" method="POST"
				action="changePassword.php">
				<h1 class="setting-title">Edit Account Setting</h1>
				<div class="inputs-wrap">
					<input class="auth-input setting-input" id="set-email" required type="email" name="email">
					<label class="label" for="set-email">Email</label>
				</div>
				<div class="inputs-wrap">
					<input class="auth-input setting-input" id="set-pass" required type="password" minlength="4" name="pass">
					<label class="label" for="set-pass">Current password</label>
				</div>
				<div class="inputs-wrap">
					<input class="auth-input setting-input" id="set-new-pass" required type="password" minlength="4"
						name="new-pass">
					<label class="label" for="set-new-pass">New password</label>
				</div>
				<div class="inputs-wrap">
					<input class="auth-input setting-input" id="conf-pass" required type="password" minlength="4"
						name="conf-pass">
					<label class="label" for="conf-pass">Confirm new password</label>
				</div>
				<button class="auth-button setting-button" type="submit">Update</button>
			</form>
			<?php if($_SESSION['change']){?>
			<h2><?=$_SESSION['change']?></h2>
			<?php }?>
			<?php unset( $_SESSION['change']);?>
		</div>
	</main>
	<script src="js/auth.js"></script>
	<script src="js/profile.js"></script>
</body>

</html>