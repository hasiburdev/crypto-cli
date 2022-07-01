"use strict";
const React = require("react");
const { Text, Box, Newline } = require("ink");
const importJsx = require("import-jsx");
const Gradient = require("ink-gradient");
const BigText = require("ink-big-text");

const Table = importJsx("./components/Table.js");

const App = ({ name = "Stranger" }) => (
	<>
		<Gradient name="summer">
			<BigText text="crypto cli" align="center" font="chrome" />
		</Gradient>
		<Table />
		<Newline />
	</>
);

module.exports = App;
