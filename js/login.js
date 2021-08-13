var userArray = [];
$('#login-btn').click(function(){
	let username = $("#userInput").val();
	let password = $("#passInput").val();
	if($("#userInput").val() == '' || $("#passInput").val() == ''){
		alert('Falta ingresar algún dato');
	} else {
		for (const user of userArray) {
			if (user.username == username && user.password == password) {
				//alert('Login exitoso');
				localStorage.setItem("username", user.username);
				window.location.href='movies.html';
				break;
			} else {
				//alert('Usuario y contraseña incorrectos');
			}
		}
	}
});

$( document ).ready(function() {
    let user1 = new User('cami','azul1234');
	let user2 = new User('juan','rojo1234');
	let user3 = new User('david', 'verde1234');

	userArray.push(user1);
	userArray.push(user2);
	userArray.push(user3);

});


