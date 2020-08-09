<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package apmovers
 */

?>
<!doctype html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport"
		content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
	<link rel="stylesheet" href="<?php echo get_template_directory_uri (); ?>/css/reset.css">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri (); ?>/css/header.css">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri (); ?>/css/footer.css">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri (); ?>/css/style.css">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri (); ?>/css/modal.css">
	<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<link
		href="https://fonts.googleapis.com/css2?family=Nunito+Sans&family=Stylish&family=Ubuntu:wght@400;700&display=swap"
		rel="stylesheet">
</head>

<body>
	<header class="site-header">
		<div class="header-wrap">
			<div class="container">
				<div class="header">
					<div class="header-logo">
						<a href="#"><img src="<?php the_field('logo')?>" alt=""></a>
					</div>
					<nav class="nav-menu">
						<ul class="nav-list">
							<li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
							<li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>
							<li class="nav-item"><a href="long-distance.html" class="nav-link">Long Distance</a></li>
							<li class="nav-item"><a href="local-move.html" class="nav-link">Local</a></li>
							<li class="nav-item"><a href="comercial.html" class="nav-link">Commercial Move</a></li>
							<li class="nav-item"><a href="pack-unpack.html" class="nav-link">Packing & Unpacking</a></li>
						</ul>
					</nav>
					<div class="header-call">
						<a href="tel:1-908-409-8555" class="number-link">
							<div class="call-circle">
								<svg class="call-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<path fill="currentColor"
										d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
									</path>
								</svg>
							</div>
						</a>
						<div class="call-number">
							<span class="number-text">Call Us Now</span>
							<span class="number"><a href="tel:1-908-409-8555"
									class="number-link"><?php the_field('phone-number');?></a></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>