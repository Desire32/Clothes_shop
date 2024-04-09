document.addEventListener('DOMContentLoaded', function () {
	var passwordField = document.getElementById('password')
	var confirmPasswordField = document.getElementById('confirmPassword')
	var passwordCriteriaTable = document.querySelector('.passwordCriterias')
	var nameField = document.getElementById('name')
	var emailField = document.getElementById('email')
	var addressField = document.getElementById('address')
	var signUpSuccess = document.getElementById('SuccessIcon')
	var signUpForm = document.querySelector('.signUpPage')


	passwordField.addEventListener('focus', function () {
		passwordCriteriaTable.style.display = 'block'
	})

	passwordField.addEventListener('blur', function () {
		passwordCriteriaTable.style.display = 'none'
	})

	passwordField.addEventListener('input', function () {
		var password = this.value

		var lowercaseCriteria = document.getElementById('lowercase')
		var uppercaseCriteria = document.getElementById('uppercase')
		var numberCriteria = document.getElementById('number')
		var lengthCriteria = document.getElementById('length')

		var hasLowercase = /[a-z]/.test(password)
		var hasUppercase = /[A-Z]/.test(password)
		var hasNumber = /[0-9]/.test(password)
		var hasLength = password.length >= 8

		lowercaseCriteria.textContent = hasLowercase
			? '✓ A lowercase letter'
			: '✗ A lowercase letter'
		uppercaseCriteria.textContent = hasUppercase
			? '✓ A capital (uppercase) letter'
			: '✗ A capital (uppercase) letter'
		numberCriteria.textContent = hasNumber ? '✓ A number' : '✗ A number'
		lengthCriteria.textContent = hasLength
			? '✓ Minimum 8 characters'
			: '✗ Minimum 8 characters'
	})

	document.getElementById('button').addEventListener('submit', function (event) {
		var name = nameField.value
		var email = emailField.value
		var password = passwordField.value
		var confirmPassword = confirmPasswordField.value
		var address = addressField.value
		document.getElementById('SuccessIcon').style.display = 'block'

		if (password !== confirmPassword) {
			alert('Passwords do not match!')
			event.preventDefault()
			return false
		}

		if (
			name.trim() === '' ||
			email.trim() === '' ||
			password.trim() === '' ||
			confirmPassword.trim() === '' ||
			address.trim() === ''
		) {
			alert('Please fill in all the fields!')
			event.preventDefault()
			return false
		}
	})
})
