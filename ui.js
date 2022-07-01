"use strict";
const React = require("react");
const { Text } = require("ink");
const importJsx = require("import-jsx");

const Table = importJsx("./components/Table.js");

const App = ({ name = "Stranger" }) => (
	<Text>
		Hello, <Text color="green">{name}</Text>
		<Table />
	</Text>
);

module.exports = App;
