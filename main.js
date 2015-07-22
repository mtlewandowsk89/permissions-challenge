$(function () {

	var usersURL = "http://localhost:3000/users"
	var permissionsURL = "http://localhost:3000/permissions"

	function getUsers(user) {
		var tmpl = $('#first-template').html()
		var firstTmpl = Handlebars.compile(tmpl)
		var info = {
			user: user
		}
		return firstTmpl(info)
	}

	function getPermissions (permissions) {
		var tmpl = $('#second-template').html()
		var secondTmpl = Handlebars.compile(tmpl)
		var info = {
			permissions: permissions
		}
		return secondTmpl(info)
	}

	$('button').on('click', function() {
		event.preventDefault()
		$('.info').show().html('')
		$('.permissions').hide()
		$.get(usersURL)
			.done(function (users) {
				users.forEach(function (user) {
					$('.info').append(getUsers(user))
				})
			})
	})

