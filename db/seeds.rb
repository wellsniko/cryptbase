# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Coin.destroy_all
User.destroy_all

# bitcoin = Coin.create({
#     symbol: 'BTC',
#     name: 'Bitcoin',
#     description: 'The world’s first cryptocurrency, Bitcoin is stored and exchanged securely on the internet through a digital ledger known as a blockchain. Bitcoins are divisible into smaller units known as satoshis — each satoshi is worth 0.00000001 bitcoin.'
# })

# ethereum = Coin.create({
#     symbol: 'ETH',
#     name: 'Ethereum',
#     description: 'Ethereum is both a cryptocurrency and a decentralized computing platform. Developers can use the platform to create decentralized applications and issue new crypto assets, known as Ethereum tokens.'
# })

# bitcoin_cash = Coin.create({
# 	symbol: 'BCH',
# 	name: 'Bitcoin Cash',
# 	description: 'Bitcoin Cash is a fork of Bitcoin that seeks to add more transaction capacity to the network in order to be useful for everyday transactions.'
# })

# xrp = Coin.create({
# 	symbol: 'XRP',
# 	name: 'XRP',
# 	description: 'XRP is the cryptocurrency used by the Ripple payment network. Built for enterprise use, XRP aims to be a fast, cost-efficient cryptocurrency for cross-border payments.'
# })
# litecoin = Coin.create({
# 	symbol: 'LTC',
# 	name: 'Litecoin',
# 	description: 'Litecoin is a cryptocurrency that uses a faster payment confirmation schedule and a different cryptographic algorithm than Bitcoin.'
# })

# chainlink = Coin.create({
# 	symbol: 'LINK',
# 	name: 'Chainlink',
# 	description: 'Chainlink (LINK) is an Ethereum token that powers the Chainlink decentralized oracle network. This network allows smart contracts on Ethereum to securely connect to external data sources, APIs, and payment systems.'
# })

# stellar = Coin.create({
# 	symbol: 'XLM',
# 	name: 'Stellar Lumens',
# 	description: 'Stellar’s cryptocurrency, the Stellar Lumen (XLM), powers the Stellar payment network. Stellar aims to connect banks, payment systems, and individuals quickly and reliably.'
# })

# usd_coin = Coin.create({
# 	symbol: 'USDC',
# 	name: 'USD Coin',
# 	description: "USD Coin (USDC) is a stablecoin fully backed by the US dollar and developed by the CENTRE consortium. Coinbase customers with US dollar accounts may exchange 1 USDC for US$1.00 (and vice versa) on Coinbase in jurisdictions where USDC support is available. The graph above reflects USDC’s current and historical redemption value of US$1.00, which may not match the price of USDC on other exchanges. USDC is an Ethereum token and is the only fiat-backed stablecoin currently supported by Coinbase."
# })

# eos = Coin.create({
# 	symbol: 'EOS',
# 	name: 'EOS',
# 	description: 'EOS is a cryptocurrency designed to support large-scale applications. There are no fees to send or receive EOS. Instead, the protocol rewards the entities that run the network periodically with new EOS, effectively substituting inflation for transaction fees.'
# })

# wrapped_bitcoin = Coin.create({
# 	symbol: 'WBTC',
# 	name: 'Wrapped Bitcoin',
# 	description: 'Wrapped Bitcoin (WBTC) is an Ethereum token that is intended to represent Bitcoin (BTC) on the Ethereum blockchain. It is not Bitcoin, but rather a separate ERC-20 token that’s designed to track Bitcoin’s value. WBTC was created to allow Bitcoin holders to participate in decentralized finance (“DeFi”) apps that are popular on Ethereum. Through a WBTC partner, 1 Bitcoin can be exchanged for 1 Wrapped Bitcoin, and vice-versa. The BTC that backs WBTC is verifiable through a “proof of reserve” system that verifies the 1:1 backing between minted WBTC tokens and Bitcoin stored by custodians. WBTC is maintained by a group called the WBTC DAO that consists of over 30 members. It was originally started by BitGo, Ren, and Kyber.'
# })

# tezos = Coin.create({
# 	symbol: 'XTZ',
# 	name: 'Tezos',
# 	description: "Tezos is a cryptocurrency and decentralized computing platform. Its features include proof of stake consensus, formal verification (which lets developers verify the correctness of their code), and the ability to let stakeholders vote on changes to the protocol. Tezos's block creation process is called \"baking\" — Tezos holders who stake their tokens can receive Tezos tokens as a reward for creating and verifying blocks."
# })

# filecoin = Coin.create({
# 	symbol: 'FIL',
# 	name: 'Filecoin',
# 	description: "Filecoin (FIL) is a cryptocurrency that powers the Filecoin network, a decentralized peer-to-peer file storage network that aims to let anyone store, retrieve, and host digital information. FIL tokens are used as payment for these services and as an economic incentive to ensure files are stored reliably over time."
# })

# cosmos = Coin.create({
# 	symbol: 'ATOM',
# 	name: 'Cosmos',
# 	description: "When you hold Cosmos in your Coinbase account, you can earn a staking reward. 5.00% is the estimated annual rewards rate, which may change over time. It’s based on the Cosmos staking rewards generated.

# To get started, add Cosmos to your account with a purchase or transfer. Your first Cosmos reward should then appear in your account after 35–40 days. After that, you’ll earn rewards every 3 days until you sell or withdraw your Cosmos from Coinbase."
# })



# dash = Coin.create({
# 	symbol: 'DASH',
# 	name: 'Dash',
# 	description: 'Dash is a cryptocurrency with optional speed and privacy features. Its unique network architecture consists of both regular miners and privileged machines called Masternodes.',
# })

# uniswap = Coin.create({
#     symbol: "UNI",
#     name: "Uniswap",
#     description: "Uniswap (UNI) is an Ethereum token that powers Uniswap, an automated liquidity provider that’s designed to make it easy to exchange Ethereum (ERC-20) tokens. There is no orderbook or central facilitator on Uniswap. Instead, tokens are exchanged through liquidity pools that are defined by smart contracts."
# })

# yearn = Coin.create({
#     symbol: 'YFI',
#     name: 'yearn.finance',
#     description: 'Yearn.finance (YFI) is an Ethereum token that governs the Yearn.finance platform. The platform is a yield optimizer that moves funds around the decentralized finance (“defi”) ecosystem in an effort to generate a high return.'
# })

# zcash = Coin.create({
# 	symbol: 'ZEC',
# 	name: 'Zcash',
# 	description: "Zcash is a cryptocurrency that offers two types of addresses: transparent addresses that are publicly visible on the Zcash blockchain and shielded addresses that are more private. Coinbase customers can receive Zcash from both transparent and shielded addresses and send Zcash to transparent addresses. Sending to shielded addresses is not supported at this time.",
# })

# ethereum_classic = Coin.create({
# 	symbol: 'ETC',
# 	name: 'Ethereum Classic',
# 	description: "Ethereum Classic is a cryptocurrency with a special focus on immutability, popularly expressed as \"code is law.\""
# })

# compound = Coin.create({ 
#     symbol: 'COMP',
#     name: 'Compound',
#     description: "Compound (COMP) is an Ethereum token that enables community governance of the Compound protocol. The protocol is a series of decentralized interest rate markets that allow users to supply and borrow Ethereum tokens at variable interest rates. COMP token holders and their delegates can also debate, propose, and vote on changes to the protocol."
#  })

