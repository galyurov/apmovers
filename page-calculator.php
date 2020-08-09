<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
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
	<link rel="stylesheet" href="<?php echo get_template_directory_uri (); ?>/css/calculator.css">
	<link type="text/css" rel="stylesheet" href="<?php echo get_template_directory_uri (); ?>/css/jquery-ui.css">
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
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
							<li class="nav-item"><a href="main" class="nav-link">Home</a></li>
							<li class="nav-item"><a href="blog" class="nav-link">Blog</a></li>
							<li class="nav-item"><a href="longdistance" class="nav-link">Long Distance</a></li>
							<li class="nav-item"><a href="local" class="nav-link">Local</a></li>
							<li class="nav-item"><a href="commercial" class="nav-link">Commercial Move</a></li>
							<li class="nav-item"><a href="pack-unpack" class="nav-link">Packing & Unpacking</a></li>
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
							<span class="number"><a href="tel:<?php the_field('phone-number');?>"
									class="number-link"><?php the_field('phone-number');?></a></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
	<main>
		<nav class="progress">
			<div class="container-desktop">
				<div class="row steps">
					<div class="step first">
						<div class="content">
							<div class="text">MY MOVE PLAN
							</div>
						</div>
					</div>
					<div class="step my-items not-active">
						<div class="content">
							<div class="icon">1</div>
							<div class="text">MY ITEMS</div>
						</div>
					</div>
					<div class="step not-active">
						<div class="content">
							<div class="icon">2</div>
							<div class="text">MY LOCATIONS</div>
						</div>
					</div>
					<div class="step not-active">
						<div class="content">
							<div class="icon">3</div>
							<div class="text">BOOK</div>
						</div>
					</div>


				</div>
			</div>
		</nav>
		<div>

			<div class="calculator">
				<div class="wrap">
					<h2 class="wrap-title">No Phone Calls. Get Real Prices Now.</h2>
					<div class="input-address">
						<svg class="location-icon" width="35" height="35" viewBox="0 0 354 512" version="1.1"
							xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<title>Slice 1</title>
							<defs>
								<polygon id="path-1"
									points="220.833333 121.458333 86.45625 121.458333 148.179167 59.7354167 132.5 44.1666667 44.1666667 132.5 132.5 220.833333 148.06875 205.264583 86.45625 143.541667 220.833333 143.541667">
								</polygon>
								<rect id="path-3" x="0" y="0" width="552.083333" height="552.083333"></rect>
							</defs>
							<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<g id="location-(1)" fill="#000000" fill-rule="nonzero">
									<path
										d="M177.001,512 C165.825,512 155.817,506.204 150.231,496.495 C150.172,496.393 150.115,496.29 150.058,496.187 L23.096,263.801 C-7.21,208.33 -6.341,142.489 25.421,87.677 C56.494,34.053 111.686,1.292 173.06,0.04 C175.682,-0.014 178.318,-0.014 180.938,0.04 C242.313,1.292 297.505,34.053 328.579,87.677 C360.341,142.489 361.21,208.329 330.904,263.801 L203.942,496.187 C203.885,496.29 203.828,496.393 203.769,496.495 C198.184,506.203 188.177,512 177.001,512 Z M177,32 C175.901,32 174.805,32.011 173.711,32.033 C123.612,33.055 78.526,59.854 53.107,103.721 C27,148.776 26.278,202.883 51.177,248.457 L177,478.757 L302.822,248.458 C327.721,202.883 327,148.776 300.891,103.721 C275.472,59.855 230.386,33.055 180.287,32.033 C179.196,32.011 178.099,32 177,32 Z"
										id="Shape"></path>
								</g>
								<rect id="Rectangle" fill="#FFFFFF" x="144" y="141" width="19" height="38"></rect>
								<rect id="Rectangle" fill="#FFFFFF" x="194" y="141" width="19" height="38"></rect>
								<g id="ic-arrow-back" transform="translate(48.000000, 54.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<g id="Mask"></g>
									<g id="Colors/Black" mask="url(#mask-2)">
										<g transform="translate(-143.541667, -143.541667)">
											<mask id="mask-4" fill="white">
												<use xlink:href="#path-3"></use>
											</mask>
											<use id="Black" stroke="none" fill="#000000" fill-rule="evenodd" xlink:href="#path-3">
											</use>
										</g>
									</g>
								</g>
							</g>
						</svg>
						<input class="input" id="origin" onFocus="geolocate()" type="text"
							placeholder="Moving From: address, city, or zip">
					</div>
					<div id="dropOff" class="input-address">
						<svg class="location-icon" width="35" viewBox="0 0 354 512" version="1.1"
							xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<title>Slice 1</title>
							<defs>
								<polygon id="path-1"
									points="220.833333 121.458333 86.45625 121.458333 148.179167 59.7354167 132.5 44.1666667 44.1666667 132.5 132.5 220.833333 148.06875 205.264583 86.45625 143.541667 220.833333 143.541667">
								</polygon>
								<rect id="path-3" x="0" y="0" width="552.083333" height="552.083333"></rect>
							</defs>
							<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<g id="location-(1)" fill="#000000" fill-rule="nonzero">
									<path
										d="M177.001,512 C165.825,512 155.817,506.204 150.231,496.495 C150.172,496.393 150.115,496.29 150.058,496.187 L23.096,263.801 C-7.21,208.33 -6.341,142.489 25.421,87.677 C56.494,34.053 111.686,1.292 173.06,0.04 C175.682,-0.014 178.318,-0.014 180.938,0.04 C242.313,1.292 297.505,34.053 328.579,87.677 C360.341,142.489 361.21,208.329 330.904,263.801 L203.942,496.187 C203.885,496.29 203.828,496.393 203.769,496.495 C198.184,506.203 188.177,512 177.001,512 Z M177,32 C175.901,32 174.805,32.011 173.711,32.033 C123.612,33.055 78.526,59.854 53.107,103.721 C27,148.776 26.278,202.883 51.177,248.457 L177,478.757 L302.822,248.458 C327.721,202.883 327,148.776 300.891,103.721 C275.472,59.855 230.386,33.055 180.287,32.033 C179.196,32.011 178.099,32 177,32 Z"
										id="Shape"></path>
								</g>
								<rect id="Rectangle" fill="#FFFFFF" x="144" y="141" width="19" height="38"></rect>
								<rect id="Rectangle" fill="#FFFFFF" x="194" y="141" width="19" height="38"></rect>
								<g id="ic-arrow-back"
									transform="translate(180.500000, 186.500000) rotate(180.000000) translate(-180.500000, -186.500000) translate(48.000000, 54.000000)">
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<g id="Mask"></g>
									<g id="Colors/Black" mask="url(#mask-2)">
										<g transform="translate(-143.541667, -143.541667)">
											<mask id="mask-4" fill="white">
												<use xlink:href="#path-3"></use>
											</mask>
											<use id="Black" stroke="none" fill="#000000" fill-rule="evenodd" xlink:href="#path-3">
											</use>
										</g>
									</g>
								</g>
							</g>
						</svg>
						<input class="input" id="destination" onFocus="geolocate()" type="text"
							placeholder="Moving To: address, city, or zip">
					</div>
					<div class="bottom-container">
						<div class="input-size">
							<p class="size-text">Move Size:</p>
							<svg class="location-icon house-icon" width="35" viewBox="0 0 488 480" version="1.1"
								xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<title>Slice 1</title>
								<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g id="insurance" fill="#000000" fill-rule="nonzero">
										<path
											d="M468.08,184.4 C474.534336,182.572481 479.912143,178.095821 482.88,172.08 L484.56,168.8 C490.057808,157.58302 486.104723,144.024631 475.44,137.52 L452,123.44 L452,46.56 C462.919755,42.5977484 469.434306,31.3837437 467.467189,19.9351222 C465.500072,8.48650066 455.616039,0.0901220299 444,0 L380,0 C366.761578,0.0395376133 356.039538,10.7615776 356,24 C356.000133,34.1119362 362.381586,43.1229322 371.92,46.48 L371.92,75.44 L256.32,6.08 C248.739367,1.52079931 239.260633,1.52079931 231.68,6.08 L12.56,137.52 C1.89527733,144.024631 -2.05780794,157.58302 3.44,168.8 L5.12,172.08 C8.08785737,178.095821 13.4656639,182.572481 19.92,184.4 C22.0756838,185.037498 24.3120286,185.360825 26.56,185.36 C29.819839,185.281624 33.0304382,184.546995 36,183.2 L36,432 L28,432 C14.745166,432 4,442.745166 4,456 C4,469.254834 14.745166,480 28,480 L460,480 C473.254834,480 484,469.254834 484,456 C484,442.745166 473.254834,432 460,432 L452,432 L452,183.28 C457.063773,185.523587 462.754091,185.919928 468.08,184.4 Z M380,16 L444,16 C448.418278,16 452,19.581722 452,24 C452,28.418278 448.418278,32 444,32 L380,32 C375.581722,32 372,28.418278 372,24 C372,19.581722 375.581722,16 380,16 Z M436,48 L436,113.84 L387.92,85.04 L387.92,48 L436,48 Z M460,448 C464.418278,448 468,451.581722 468,456 C468,460.418278 464.418278,464 460,464 L28,464 C23.581722,464 20,460.418278 20,456 C20,451.581722 23.581722,448 28,448 L460,448 Z M52,432 L52,174.08 L239.84,60.96 C242.405054,59.439962 245.594946,59.439962 248.16,60.96 L436,174.08 L436,432 L52,432 Z M256.4,47.28 C248.784427,42.6400105 239.215573,42.6400105 231.6,47.28 L30.72,168.24 C28.7876707,169.37607 26.472521,169.665463 24.32,169.04 C22.1860386,168.437946 20.410582,166.953547 19.44,164.96 L17.76,161.68 C15.9490161,157.922868 17.259595,153.40482 20.8,151.2 L239.92,19.76 C242.435543,18.2685269 245.564457,18.2685269 248.08,19.76 L467.2,151.2 C470.740405,153.40482 472.050984,157.922868 470.24,161.68 L468.56,164.96 C467.589418,166.953547 465.813961,168.437946 463.68,169.04 C461.527479,169.665463 459.212329,169.37607 457.28,168.24 L256.4,47.28 Z"
											id="Shape"></path>
									</g>
									<g id="sofa" transform="translate(119.000000, 208.000000)" fill="#000000"
										fill-rule="nonzero">
										<path
											d="M239.013672,56.6486428 L235.14209,56.6486428 L235.14209,31.6508389 C235.14209,29.6295031 233.502441,27.9907669 231.47998,27.9907669 C229.45752,27.9907669 227.817871,29.6295031 227.817871,31.6508389 L227.817871,56.6486428 L223.946289,56.6486428 C217.888184,56.6486428 212.959961,61.5741238 212.959961,67.6288589 L212.959961,85.1547478 C125.782715,85.1547478 129.852539,85.0825224 128.661621,85.2982227 L128.661621,16.8363313 C128.661621,11.5892521 132.933105,7.32014406 138.183105,7.32014406 L218.296387,7.32014406 C222.945312,7.32014406 226.891113,10.6351933 227.678711,15.2039392 C228.022461,17.1959944 229.916016,18.5316767 231.909668,18.189094 C233.902832,17.8455352 235.240234,15.9525459 234.896484,13.9604907 C233.501465,5.87075554 226.52002,0 218.295898,0 L138.183594,0 C132.848633,0 128.088867,2.49421709 125,6.37389344 C121.911133,2.49421709 117.151367,0 111.816406,0 L31.7036133,0 C22.4150391,0 14.8579102,7.55292464 14.8579102,16.8363313 L14.8579102,56.6486428 L10.9863281,56.6486428 C4.92822266,56.6486428 0,61.5741238 0,67.6288589 L0,135.526611 C0,145.617674 8.21386719,153.826971 18.3105469,153.826971 L29.715332,153.826971 L29.715332,189.718126 C29.715332,195.387821 34.3305664,200 40.0029297,200 C45.3759766,200 49.8837891,195.803605 50.2646484,190.446724 L52.8696289,153.826483 L73.7348633,153.826483 C75.7573242,153.826483 77.3969727,152.187747 77.3969727,150.166411 C77.3969727,148.145075 75.7573242,146.506339 73.7348633,146.506339 C68.1943359,146.506339 23.8510742,146.506339 18.3105469,146.506339 C12.2524414,146.506339 7.32421875,141.580858 7.32421875,135.526123 L7.32421875,67.6288589 C7.32421875,65.6104512 8.96679688,63.9687869 10.9863281,63.9687869 L26.0532227,63.9687869 C27.8198242,63.9687869 29.2988281,65.2258996 29.640625,66.8919644 C29.6894531,67.1301131 29.715332,67.376558 29.715332,67.6288589 L29.715332,85.1547478 L23.8178711,85.1547478 C18.8964844,85.1547478 14.8925781,89.1564266 14.8925781,94.0750754 L14.8925781,115.208331 C14.8925781,120.12698 18.8964844,124.128171 23.8178711,124.128171 L226.182129,124.128171 C231.103516,124.128171 235.107422,120.126492 235.107422,115.207843 L235.107422,94.0745874 C235.107422,89.1559386 231.103516,85.1542598 226.182129,85.1542598 L220.28418,85.1542598 L220.28418,67.6283709 C220.28418,67.37607 220.310059,67.1296251 220.358887,66.8914764 C220.701172,65.2249236 222.179687,63.9682989 223.946289,63.9682989 L239.013184,63.9682989 C241.032715,63.9682989 242.675293,65.6099632 242.675293,67.6283709 L242.675293,135.526123 C242.675293,141.580858 237.74707,146.506339 231.688965,146.506339 C225.858398,146.506339 95.7333984,146.506339 90.8242187,146.506339 C88.8017578,146.506339 87.1621094,148.145075 87.1621094,150.166411 C87.1621094,152.187747 88.8017578,153.826483 90.8242187,153.826483 L197.129395,153.826483 L199.734375,190.446724 C200.115234,195.803605 204.623047,200 209.996094,200 C215.668945,200 220.28418,195.387333 220.28418,189.718126 L220.28418,153.826971 L231.689453,153.826971 C241.786133,153.826971 250,145.617674 250,135.526611 L250,67.6288589 C250,61.5741238 245.071777,56.6486428 239.013672,56.6486428 Z M45.5273437,153.826971 L42.9594727,189.92797 C42.8496094,191.471056 41.5512695,192.679856 40.003418,192.679856 C38.3691406,192.679856 37.0400391,191.351006 37.0400391,189.718126 L37.0400391,153.826971 L45.5273437,153.826971 Z M227.783203,115.207843 C227.783203,116.090165 227.064941,116.807539 226.182129,116.807539 C222.959473,116.807539 133.07666,116.807539 128.662109,116.807539 L128.662109,107.118108 L128.662109,94.0745874 C128.662109,93.192266 129.380371,92.4748919 130.263184,92.4748919 L226.182129,92.4748919 C227.064941,92.4748919 227.783203,93.192754 227.783203,94.0745874 L227.783203,115.207843 Z M26.0532227,56.6486428 L22.1816406,56.6486428 L22.1816406,16.8363313 C22.1816406,11.5892521 26.453125,7.32014406 31.703125,7.32014406 L111.816406,7.32014406 C117.066406,7.32014406 121.337891,11.5892521 121.337891,16.8363313 L121.337891,85.2982227 C120.161621,85.0844745 125.439453,85.1547478 37.0395508,85.1547478 L37.0395508,67.6288589 C37.0395508,61.5741238 32.1113281,56.6486428 26.0532227,56.6486428 Z M22.2167969,115.207843 L22.2167969,94.0745874 C22.2167969,93.192266 22.9350586,92.4744039 23.8178711,92.4744039 L119.736816,92.4744039 C120.619629,92.4744039 121.337891,93.192266 121.337891,94.0745874 L121.337891,107.118108 L121.337891,116.807539 L23.8178711,116.807539 C22.9350586,116.807539 22.2167969,116.090165 22.2167969,115.207843 Z M212.960449,189.718126 C212.960449,191.351494 211.630859,192.679856 209.996582,192.679856 C208.44873,192.679856 207.150391,191.471056 207.040527,189.92797 L204.472656,153.826971 L212.960449,153.826971 L212.960449,189.718126 Z"
											id="Shape"></path>
									</g>
								</g>
							</svg>
							<div class="size-choice dropdown-item-first">
								<span class="dropdown-title">1 Bedroom, Small</span>
								<span class="dropdown-subitem">(600-800 sq ft)</span></div>
							<div class="dropdown-size">
								<div class="dropdown-item small-line"><span class="small-line">One Item</span></div>
								<div class="dropdown-item small-line"><span class="small-line">Just a few item</span></div>
								<div class="dropdown-item">
									<span class="dropdown-title">Studio</span>
									<span class="dropdown-subitem">(400-600 sq ft)</span>
								</div>
								<div class="dropdown-item">
									<span class="dropdown-title">Studio Alcove</span>
									<span class="dropdown-subitem">(600-700 sq ft)</span>
								</div>
								<div class="dropdown-item">
									<span class="dropdown-title">1 Bedroom, Small</span>
									<span class="dropdown-subitem">(600-800 sq ft)</span>
								</div>
								<div class="dropdown-item">
									<span class="dropdown-title">1 Bedroom, Large</span>
									<span class="dropdown-subitem">(800-1000 sq ft)</span>
								</div>
								<div class="dropdown-item">
									<span class="dropdown-title">2 Bedroom</span>
									<span class="dropdown-subitem">(1000 to 1500 sq ft)</span>
								</div>
								<div class="dropdown-item">
									<span class="dropdown-title">3 Bedroom</span>
									<span class="dropdown-subitem">(1500 to 2000 sq ft)</span>
								</div>
								<div class="dropdown-item">
									<span class="dropdown-title">4+ Bedroom</span>
									<span class="dropdown-subitem">(over 2000 sq ft)</span>
								</div>
							</div>
						</div>
						<div class="input-date">
							<p class="date-text">Move Date:</p>
							<svg version="1.1" class=" location-icon date-icon" id="calendar"
								xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
								viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
								<g>
									<g>
										<path d="M452,40h-24V0h-40v40H124V0H84v40H60C26.916,40,0,66.916,0,100v352c0,33.084,26.916,60,60,60h392
			c33.084,0,60-26.916,60-60V100C512,66.916,485.084,40,452,40z M472,452c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20V188
			h432V452z M472,148H40v-48c0-11.028,8.972-20,20-20h24v40h40V80h264v40h40V80h24c11.028,0,20,8.972,20,20V148z" />
									</g>
								</g>
								<g>
									<g>
										<rect x="76" y="230" width="40" height="40" />
									</g>
								</g>
								<g>
									<g>
										<rect x="156" y="230" width="40" height="40" />
									</g>
								</g>
								<g>
									<g>
										<rect x="236" y="230" width="40" height="40" />
									</g>
								</g>
								<g>
									<g>
										<rect x="316" y="230" width="40" height="40" />
									</g>
								</g>
								<g>
									<g>
										<rect x="396" y="230" width="40" height="40" />
									</g>
								</g>
								<g>
									<g>
										<rect x="76" y="310" width="40" height="40" />
									</g>
								</g>
								<g>
									<g>
										<rect x="156" y="310" width="40" height="40" />
									</g>
								</g>
								<g>
									<g>
										<rect x="236" y="310" width="40" height="40" />
									</g>
								</g>
								<g>
									<g>
										<rect x="316" y="310" width="40" height="40" />
									</g>
								</g>
								<g>
									<g>
										<rect x="76" y="390" width="40" height="40" />
									</g>
								</g>
								<g>
									<g>
										<rect x="156" y="390" width="40" height="40" />
									</g>
								</g>
								<g>
									<g>
										<rect x="236" y="390" width="40" height="40" />
									</g>
								</g>
								<g>
									<g>
										<rect x="316" y="390" width="40" height="40" />
									</g>
								</g>
								<g>
									<g>
										<rect x="396" y="310" width="40" height="40" />
									</g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
								<g>
								</g>
							</svg>
							<input class="date-input" type="text" id="datepicker">
						</div>
					</div>
					<div class="toggle-wrap">
						<div class="toggle add" onclick="changeToggleStatus(objWithToggleParam.pickUpToggle)">
							<span class="add-checkbox"><span class="checkbox-toggle"></span><input id="add-checkbox"
									value="false" type="checkbox"></span>
							<span class="checkbox-label add">Additional pick up stop</span>
						</div>
					</div>
					<div class="input-address add-pick-up hide">
						<svg class="location-icon add" viewBox="0 0 354 512" version="1.1" xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink">
							<title>Slice 1</title>
							<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<g id="location-(1)" fill="#000000" fill-rule="nonzero">
									<path
										d="M177.001,512 C165.825,512 155.817,506.204 150.231,496.495 C150.172,496.393 150.115,496.29 150.058,496.187 L23.096,263.801 C-7.21,208.33 -6.341,142.489 25.421,87.677 C56.494,34.053 111.686,1.292 173.06,0.04 C175.682,-0.014 178.318,-0.014 180.938,0.04 C242.313,1.292 297.505,34.053 328.579,87.677 C360.341,142.489 361.21,208.329 330.904,263.801 L203.942,496.187 C203.885,496.29 203.828,496.393 203.769,496.495 C198.184,506.203 188.177,512 177.001,512 Z M177,32 C175.901,32 174.805,32.011 173.711,32.033 C123.612,33.055 78.526,59.854 53.107,103.721 C27,148.776 26.278,202.883 51.177,248.457 L177,478.757 L302.822,248.458 C327.721,202.883 327,148.776 300.891,103.721 C275.472,59.855 230.386,33.055 180.287,32.033 C179.196,32.011 178.099,32 177,32 Z"
										id="Shape"></path>
									<path
										d="M204,88 C206.761424,88 209,90.2385763 209,93 L209,127.999 L244,128 C246.761424,128 249,130.238576 249,133 L249,187 C249,189.761424 246.761424,192 244,192 L209,192 L209,227 C209,229.761424 206.761424,232 204,232 L150,232 C147.238576,232 145,229.761424 145,227 L145,192 L110,192 C107.238576,192 105,189.761424 105,187 L105,133 C105,130.238576 107.238576,128 110,128 L145,128 L145,93 C145,90.2385763 147.238576,88 150,88 L204,88 Z M191.5,101.5 L163.5,101.5 C160.738576,101.5 158.5,103.738576 158.5,106.5 L158.5,106.5 L158.5,213.5 C158.5,216.261424 160.738576,218.5 163.5,218.5 L163.5,218.5 L191.5,218.5 C194.261424,218.5 196.5,216.261424 196.5,213.5 L196.5,213.5 L196.5,106.5 C196.5,103.738576 194.261424,101.5 191.5,101.5 L191.5,101.5 Z M145,141 L124,141 C121.238576,141 119,143.238576 119,146 L119,146 L119,174 C119,176.761424 121.238576,179 124,179 L124,179 L145,179 L145,141 Z M231,141 L209,141 L209,179 L231,179 C233.688755,179 235.881818,176.877693 235.99538,174.21689 L236,174 L236,146 C236,143.238576 233.761424,141 231,141 L231,141 Z"
										id="Shape"></path>
								</g>
								<rect id="Rectangle" fill="#FFFFFF" x="144" y="141" width="19" height="38"></rect>
								<rect id="Rectangle" fill="#FFFFFF" x="194" y="141" width="19" height="38"></rect>
							</g>
						</svg>
						<input class="input" id="add-pick" onFocus="geolocate()" type="text"
							placeholder="Address, city, or zip">
					</div>
					<div id="toggleDropOff">
						<div class="toggle-wrap">
							<div class="toggle addDropOff" onclick="changeToggleStatus(objWithToggleParam.dropOffToggle)">
								<span class="add-checkbox-drop-off"><span class="checkbox-toggle-add-drop-off"></span><input
										id="addDropOff-checkbox" value="false" type="checkbox"></span>
								<span class="checkbox-label addDrop">Additional drop off stop</span>
							</div>
						</div>
						<div id="addDrop" class="input-address add-drop-off hide">
							<svg class="location-icon add" viewBox="0 0 354 512" version="1.1"
								xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<title>Slice 1</title>
								<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g id="location-(1)" fill="#000000" fill-rule="nonzero">
										<path
											d="M177.001,512 C165.825,512 155.817,506.204 150.231,496.495 C150.172,496.393 150.115,496.29 150.058,496.187 L23.096,263.801 C-7.21,208.33 -6.341,142.489 25.421,87.677 C56.494,34.053 111.686,1.292 173.06,0.04 C175.682,-0.014 178.318,-0.014 180.938,0.04 C242.313,1.292 297.505,34.053 328.579,87.677 C360.341,142.489 361.21,208.329 330.904,263.801 L203.942,496.187 C203.885,496.29 203.828,496.393 203.769,496.495 C198.184,506.203 188.177,512 177.001,512 Z M177,32 C175.901,32 174.805,32.011 173.711,32.033 C123.612,33.055 78.526,59.854 53.107,103.721 C27,148.776 26.278,202.883 51.177,248.457 L177,478.757 L302.822,248.458 C327.721,202.883 327,148.776 300.891,103.721 C275.472,59.855 230.386,33.055 180.287,32.033 C179.196,32.011 178.099,32 177,32 Z"
											id="Shape"></path>
										<path
											d="M204,88 C206.761424,88 209,90.2385763 209,93 L209,127.999 L244,128 C246.761424,128 249,130.238576 249,133 L249,187 C249,189.761424 246.761424,192 244,192 L209,192 L209,227 C209,229.761424 206.761424,232 204,232 L150,232 C147.238576,232 145,229.761424 145,227 L145,192 L110,192 C107.238576,192 105,189.761424 105,187 L105,133 C105,130.238576 107.238576,128 110,128 L145,128 L145,93 C145,90.2385763 147.238576,88 150,88 L204,88 Z M191.5,101.5 L163.5,101.5 C160.738576,101.5 158.5,103.738576 158.5,106.5 L158.5,106.5 L158.5,213.5 C158.5,216.261424 160.738576,218.5 163.5,218.5 L163.5,218.5 L191.5,218.5 C194.261424,218.5 196.5,216.261424 196.5,213.5 L196.5,213.5 L196.5,106.5 C196.5,103.738576 194.261424,101.5 191.5,101.5 L191.5,101.5 Z M145,141 L124,141 C121.238576,141 119,143.238576 119,146 L119,146 L119,174 C119,176.761424 121.238576,179 124,179 L124,179 L145,179 L145,141 Z M231,141 L209,141 L209,179 L231,179 C233.688755,179 235.881818,176.877693 235.99538,174.21689 L236,174 L236,146 C236,143.238576 233.761424,141 231,141 L231,141 Z"
											id="Shape"></path>
									</g>
									<rect id="Rectangle" fill="#FFFFFF" x="144" y="141" width="19" height="38"></rect>
									<rect id="Rectangle" fill="#FFFFFF" x="194" y="141" width="19" height="38"></rect>
								</g>
							</svg>
							<input class="input" id="add-drop-off" onFocus="geolocate()" type="text"
								placeholder="Address, city, or zip">
						</div>
					</div>
					<div class="toggle-wrap">
						<div class="toggle storage" onclick="changeToggleStatus(objWithToggleParam.storageToggle)">
							<span class="add-checkbox-storage"><span class="checkbox-toggle-storage"></span><input
									id="storage-checkbox" value="false" type="checkbox"></span>
							<span class="checkbox-label storage">Would You like to add storage?</span>
						</div>
					</div>
					<div class="storage-wrap hide">
						<div class="storage-control">
							<label class="move-to-storage" onclick="choiceStorageType('long')">
								<input id="radioLong" value="long" class="storage-input" type="radio" name="choice-storage">
								<span>Move to storage</span><br>
								<span class="storage-label">Includes moving in and first month storage</span>
							</label>
						</div>
						<div class="storage-control">
							<label class="move-to-storage" onclick="choiceStorageType('short')">
								<input id="radioShort" value="short" class="storage-input" type="radio" name="choice-storage"
									checked>
								<span>Move to storage for a short time (up to 45 days)</span><br>
								<span class="storage-label">Includes moving in, storage and moving out</span>
							</label>
						</div>
						<div class="storage-date">
							<span class="storage-date-text">Out of storage delivery date</span>
							<div class="input-date">
								<svg version="1.1" class=" location-icon date-icon storage-date-icon" id="calendar"
									xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
									<g>
										<g>
											<path d="M452,40h-24V0h-40v40H124V0H84v40H60C26.916,40,0,66.916,0,100v352c0,33.084,26.916,60,60,60h392
			c33.084,0,60-26.916,60-60V100C512,66.916,485.084,40,452,40z M472,452c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20V188
			h432V452z M472,148H40v-48c0-11.028,8.972-20,20-20h24v40h40V80h264v40h40V80h24c11.028,0,20,8.972,20,20V148z" />
										</g>
									</g>
									<g>
										<g>
											<rect x="76" y="230" width="40" height="40" />
										</g>
									</g>
									<g>
										<g>
											<rect x="156" y="230" width="40" height="40" />
										</g>
									</g>
									<g>
										<g>
											<rect x="236" y="230" width="40" height="40" />
										</g>
									</g>
									<g>
										<g>
											<rect x="316" y="230" width="40" height="40" />
										</g>
									</g>
									<g>
										<g>
											<rect x="396" y="230" width="40" height="40" />
										</g>
									</g>
									<g>
										<g>
											<rect x="76" y="310" width="40" height="40" />
										</g>
									</g>
									<g>
										<g>
											<rect x="156" y="310" width="40" height="40" />
										</g>
									</g>
									<g>
										<g>
											<rect x="236" y="310" width="40" height="40" />
										</g>
									</g>
									<g>
										<g>
											<rect x="316" y="310" width="40" height="40" />
										</g>
									</g>
									<g>
										<g>
											<rect x="76" y="390" width="40" height="40" />
										</g>
									</g>
									<g>
										<g>
											<rect x="156" y="390" width="40" height="40" />
										</g>
									</g>
									<g>
										<g>
											<rect x="236" y="390" width="40" height="40" />
										</g>
									</g>
									<g>
										<g>
											<rect x="316" y="390" width="40" height="40" />
										</g>
									</g>
									<g>
										<g>
											<rect x="396" y="310" width="40" height="40" />
										</g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
									<g>
									</g>
								</svg>
								<input class="date-input" type="text" id="storage-datepicker">
							</div>
						</div>
					</div>
					<button class="button" onclick="searchDistance()">Get Prices</button>
				</div>
			</div>

		</div>
	</main>
	<script>
	$(function() {
		$("#datepicker").datepicker({
			dateFormat: "M dd"
		});
		$("#storage-datepicker").datepicker({
			dateFormat: "M dd"
		});
	});
	</script>
	<script src="<?php echo get_template_directory_uri (); ?>/js/calculator.js"></script>
	<script
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwWXleWh8d8A2lS2TbRAqqGp5-HLKyTh4&libraries=places&callback=initAutocomplete"
		async defer></script>
</body>

</html>