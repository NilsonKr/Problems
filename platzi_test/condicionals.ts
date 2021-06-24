export {};

/**
 * Problem : With only 1 Conditional and  using arrays, validate the type of suscription and
 * print the corresponding message for this suscription
 */

//Example--->
//  switch (tipoDeSuscripcion) {
//   case "Free":
//       console.log("Solo puedes tomar los cursos gratis");
//       break;
//   case "Basic":
//       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//       break;
//   case "Expert":
//       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//       break;
//   case "Free":
//       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//       break;
// }

const suscription = 'Expert+';

function validateSuscription(type: string) {
	const available: string[] = ['free', 'basic', 'expert', 'expert+'];
	const messages: string[] = [
		'Solo puedes tomar los cursos gratis',
		'Puedes tomar casi todos los cursos de Platzi durante un mes',
		'Puedes tomar casi todos los cursos de Platzi durante un año',
		'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
	];

	if (available.includes(type.toLowerCase())) {
		const messageIndex = available.indexOf(type.toLowerCase());

		console.log(messages[messageIndex]);

		return;
	}

	console.log('No tienes una suscripcion valida :c');
}

validateSuscription(suscription);
