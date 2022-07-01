const React = require("react");
const axios = require("axios");
const { useState, useEffect } = React;

const { Text, Box, Newline } = require("ink");

const url =
	"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Clitecoin%2Cmatic-network%2Cethereum%2Ctether%2Cbinancecoin%2Csolana%2Caave%2Ccardano%2Ctron&order=market_cap_desc&per_page=100&page=1&sparkline=false";

const Table = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await axios.get(url);
			setData(response.data);
		})();
	}, []);

	return (
		<Box borderStyle="single" padding={2} flexDirection="column">
			<Box>
				<Box width="25%">
					<Text>COIN</Text>
				</Box>
				<Box width="25%">
					<Text>PRICE (USD)</Text>
				</Box>
				<Box width="25%">
					<Text>24 HOUR CHANGE</Text>
				</Box>
				<Box width="25%">
					<Text>ALL TIME HIGH</Text>
				</Box>
			</Box>
			<Newline />
			{data &&
				data.map(
					({ id, name, current_price, price_change_percentage_24h, ath }) => (
						<Box key={id}>
							<Box width="25%">
								<Text>{name}</Text>
							</Box>
							<Box width="25%">
								<Text>{current_price}</Text>
							</Box>
							<Box width="25%">
								<Text>{price_change_percentage_24h}</Text>
							</Box>
							<Box width="25%">
								<Text>{ath}</Text>
							</Box>
						</Box>
					)
				)}
		</Box>
	);
};

module.exports = Table;
