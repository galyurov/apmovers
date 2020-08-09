let formElem = document.forms.signup;
if (formElem) {
	formElem.onsubmit = async (e) => {
		e.preventDefault();

		await fetch('signup.php', {
			method: 'POST',
			body: new FormData(formElem)
		})
			.then((promise) => {
				if (promise.status >= 200 && promise.status < 400) {
					let form = document.querySelector('.auth-sign');
					form.innerHTML = `<div class="registr-ok">
			<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			viewBox="0 0 367.805 367.805" style="enable-background:new 0 0 367.805 367.805;" xml:space="preserve">
		<g>
			<path style="fill:#3BB54A;" d="M183.903,0.001c101.566,0,183.902,82.336,183.902,183.902s-82.336,183.902-183.902,183.902
				S0.001,285.469,0.001,183.903l0,0C-0.288,82.625,81.579,0.29,182.856,0.001C183.205,0,183.554,0,183.903,0.001z"/>
			<polygon style="fill:#D4E1F4;" points="285.78,133.225 155.168,263.837 82.025,191.217 111.805,161.96 155.168,204.801 
				256.001,103.968 	"/>
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
		<p class="registr-text">Registration successful</p>
			</div>`
					setTimeout(() => {
						form.parentElement.classList.add('hide');
					}, 1000)
				}
			})
			.catch((error) => {
				console.log(error);
			})
	};
}

let cookies = getCookie('apuser');
function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}
let navMenu = document.querySelector('.nav-menu')

if (cookies) {
	navMenu.insertAdjacentHTML('afterend', `<div class="profile-menu">
<strong class="auth-profile">Hi, ${cookies}
<div class="list-wrap hide">
<ul class="profile-items">
<li class="profile-list"><a class="profile-link" href="profile-admin.php">My Profile</a></li>
<li class="profile-list sign-out"><a class="profile-link" href="signout.php">Sign Out</a></li>
</ul>
</div>
</div>`)
} else {
	navMenu.insertAdjacentHTML('afterend', `
<div class="auth">
<div class="auth-block">
<a href="#" id="signUpButton" class="auth-link">Sign Up</a>
<div class="form hide">
<form autocomplete="on" name="signup" class="auth-sign">
<div class="inputs-wrap">
<input class="auth-input" id='reg-login' required type="text" minlength="4" name="login">
<label class="label" for="reg-login">Login</label>
</div>
<div class="inputs-wrap">
<input class="auth-input" id="reg-name" required type="text" minlength="2" name="name">
<label class="label" for="reg-name">Name</label>
</div>
<div class="inputs-wrap">
<input class="auth-input" id="reg-email" required type="email" name="email">
<label class="label" for="reg-email">Email</label>
</div>
<div class="inputs-wrap">
<input class="auth-input" id="reg-pass" required type="password" minlength="4"
name="pass">
<label class="label" for="reg-pass">Password</label>
</div>
<button class="auth-button" type="submit">Register</button>
</form>
</div>
</div>
<div class="auth-block">
<a href="#" id="sign-inButton" class="auth-link">Sign In</a>
<div class="sign-in form hide">
<form autocomplete="on" method="POST" action="signin.php" name="signin" class="auth-sign">
<div class="inputs-wrap">
<input class="auth-input" id='auth-login' required type="text" minlength="4" name="login">
<label class="label" for="auth-login">Login</label>
</div>
<div class="inputs-wrap">
<input class="auth-input" required id="auth-pass" type="password" minlength="4"
name="pass">
<label class="label" for="auth-pass">Password</label>
</div>

<button class="auth-button" type="submit">Sign In</button>
</form>
</div>
</div>
</div>`)
}
function dropDownMenu(button, options) {
	if (button) {
		button.addEventListener('click', (event) => {
			event.target.nextElementSibling.classList.toggle('hide');
			if (options) {
				options.nextElementSibling.classList.add('hide');
			}
		})
	}
}
dropDownMenu(document.querySelector('.profile-menu'));
dropDownMenu(document.querySelector('#signUpButton'), document.querySelector('#sign-inButton'));
dropDownMenu(document.querySelector('#sign-inButton'), document.querySelector('#signUpButton'));





