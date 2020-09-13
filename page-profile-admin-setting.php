<?php
  		session_start();
        		  if($_COOKIE['aphash']==='333d76478fdcea1aea6faae6ee0cdd56'){

        		} else {
        			header('Location: /profile/');
        		}
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>My Setting</title>
	<link rel="stylesheet" href="<?php echo get_template_directory_uri (); ?>/css/reset.css">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri (); ?>/css/profile.css">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri (); ?>/css/input.css">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri (); ?>/css/header.css">
	<link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
</head>

<body id="body">
	<main>
		<div class="header">
			<div class="menu__icon icon-menu">
				<span></span>
				<span></span>
				<span></span>
			</div>
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
                            <a href="/profile-admin" class="nav__link">
                                <i class='bx bx-grid-alt nav__icon'></i>
                                <span class="nav__text">Orders</span>
                            </a>
                            <a href="/profile-calendar" class="nav__link">
                                <i class='bx bx-calendar nav__icon'></i>
                                <span class="nav__text">Calendar</span>
                            </a>
                            <a href="/profile-price" class="nav__link">
                                <i class='bx bx-dollar nav__icon'></i>
                                <span class="nav__text">Pricing</span>
                            </a>
						</ul>
					</div>
					<div>
						<a href="/profile-admin-setting" class="nav__link active">
							<i class='bx bx-cog nav__icon'></i>
							<span class="nav__text">Setting</span>
						</a>
						<a href="/signout" class="nav__link ">
							<i class='bx bx-log-out-circle nav__icon'></i>
							<span class="nav__text">Log Out</span>
						</a>
					</div>
				</nav>
			</div>
		</div>
		<div class="setting">
			<form autocomplete="on" name="changeSetting" class="auth-sign setting-form" method="POST"
				action="<?php echo get_template_directory_uri (); ?>/changePassword.php">
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
		</div>
	</main>
	<script src="<?php echo get_template_directory_uri (); ?>/js/profile.js"></script>
	<script src="<?php echo get_template_directory_uri (); ?>/js/header__menu.js"></script>
</body>

</html>