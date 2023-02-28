<h1 align="center">
	Easy Discord Components
</h1>

<h3 align="center">
	🌠 Just Start Making Your Bot ☄
</h3>

## About
I made this package to make it easier to work with the message components in `discord.js`. Without getting worry about the `ActionRow` and types issues that might come along with it.

## Map

 - [Installation](#installation)
 - [Usage](#usage)
	 - [Buttons](#buttons)
	 - [Buttons Box](#buttons-box)
	 -  [Select Menus](#select-menus)
	 -  [Modals](#modals)
- [Usage of Containers](#usage-of-containers)
	- [Basic Container](#discord-basic-container)
	- [Container class](#or-using-container-class)

## Installation

<div align="center">
<img src="https://img.shields.io/badge/Node js- >= 18.5-yellowgreen?style=flat&logo=node.js" alt="nodejs Badge" height="25"> 
  <img src="https://img.shields.io/badge/Npm - >= 8.12.1-yellowgreen?style=flat&logo=npm" alt="npm Badge" height="25"> 
<img src="https://img.shields.io/badge/Discord.js - >= 14.7.1-blueviolet?style=flat&logo=discord" alt="Discord Badge" height="25">
</div>

```bash
$ npm install easy-discord-components
```
	
## Usage

### Buttons
```js
const { ButtonStyle } = require('discord.js');
const { Button, Row } = require('easy-discord-components');

client.on('interactionCreate', async interaction  => {
	if (!interaction.isChatInputCommand() || interaction.isAutocomplete()) return;

	let  button = Button({
		customId:  'btn1',
		label:  "Click me!",
		style:  ButtonStyle.Primary
	});
	let row = Row([
		button	
	]);
	await interaction.reply({
		components: [row]
	});
});
```
![result button](https://github.com/albatranomar/easy-discord-components/blob/main/screenshots/button_result.png?raw=true)

### Buttons Box

> Maximum **25** buttons per message/buttonsBox

```js
const { ButtonsBox } = require('easy-discord-components');

client.on('interactionCreate', async  interaction  => {
	if (!interaction.isChatInputCommand() || interaction.isAutocomplete()) return;

	let buttonsBox = new ButtonsBox();

	for (let  i = 1; i <= 25; i++) {
		buttonsBox.addButton({
            customId:  `btn-${i}`,
            label:  `${i}`,
            style:  Math.floor(Math.random() * 4) + 1
		})
	}
	await interaction.reply({
		components: buttonsBox.fetch
	});
});
```
![button box result](https://github.com/albatranomar/easy-discord-components/blob/main/screenshots/button_box_result.png?raw=true)

### Select-Menus
```js
const { SelectMenu } = require('easy-discord-components');

client.on('interactionCreate', async interaction  => {
	if (!interaction.isChatInputCommand() || interaction.isAutocomplete()) return;

	let selectMenu = new SelectMenu()
		.setCustomId('my_menu')
		.setPlaceholder('Click here!');

	for (let i = 0; i < 5; i++) {
		selectMenu.addOption({
            label: `Option (${i + 1})`,
            value: i.toString(),
		})
	}
	
	await interaction.reply({
		components: [selectMenu.fetch]
	});
});
```
![select menu result](https://github.com/albatranomar/easy-discord-components/blob/main/screenshots/select_menu_result.png?raw=true)

### Modals

> You can add up to **5** text inputs in one modal.

```js
const { TextInputStyle } = require('discord.js');
const { Modal } = require('easy-discord-components');

client.on('interactionCreate', async interaction  => {
	if (!interaction.isChatInputCommand() || interaction.isAutocomplete()) return;

	let modal = new Modal()
	.setCustomId('my_modal')
	.setTitle('Cool Modal')
	.addTextInput({
		customId: 'favoriteColor',
		label: "What's your favorite color?",
		style: TextInputStyle.Short
	})
	.addTextInput({
		customId: 'hobbies',
		label: "What's some of your favorite hobbies?",
		style: TextInputStyle.Paragraph
	});
	
	await interaction.showModal(modal);
});
```
![modal result](https://github.com/albatranomar/easy-discord-components/blob/main/screenshots/modals_result.png?raw=true)

## Usage of Containers

### Discord Basic Container
```js
const { ButtonStyle } = require('discord.js');
const { Row, Button, SelectMenu } = require('easy-discord-components');

client.on('interactionCreate', async  interaction  => {
	if (!interaction.isChatInputCommand() || interaction.isAutocomplete()) return;

	let  buttons = Row([
		Button({ customId: "a_btn", label: "Button A", style: ButtonStyle.Success }),
		Button({ customId: "b_btn", label: "Button B", style: ButtonStyle.Danger }),
		Button({ customId: "c_btn", label: "Button C", style: ButtonStyle.Primary })
	]);

	let  selectMenu = new  SelectMenu()
	.setCustomId('my_menu')
	.setPlaceholder('Click here!');

	for (let  i = 0; i < 5; i++) {
		selectMenu.addOption({
			label: `Option (${i + 1})`,
			value: i.toString(),
		})
	}

	await interaction.reply({
		components: [
			buttons,
			selectMenu.fetch
		]
	});
});
```

###  Or Using Container class
```js
const { ButtonStyle } = require('discord.js');
const { Container, Row, Button, SelectMenu } = require('easy-discord-components');

client.on('interactionCreate', async interaction  => {
	if (!interaction.isChatInputCommand() || interaction.isAutocomplete()) return;

	let container = new Container();
	
	let  buttons = Row([
		Button({ customId:  "a_btn", label:  "Button A", style:  ButtonStyle.Success }),
		Button({ customId:  "b_btn", label:  "Button B", style:  ButtonStyle.Danger }),
		Button({ customId:  "c_btn", label:  "Button C", style:  ButtonStyle.Primary })
	]);

	container.addButtonRow(buttons);

	let  selectMenu = new  SelectMenu()
		.setCustomId('my_menu')
		.setPlaceholder('Click here!');

	for (let  i = 0; i < 5; i++) {
		selectMenu.addOption({
			label:  `Option (${i + 1})`,
			value:  i.toString(),
		})
	}
	
	container.addSelectMenu(selectMenu.fetch);

	await  interaction.reply({
		components:  container.data
	});
});
```
![container result](https://github.com/albatranomar/easy-discord-components/blob/main/screenshots/container%20result.png?raw=true)

## All examples above can be made using typescript 😉.
