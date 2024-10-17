import React, { useState } from 'react'
import { Button } from 'antd'
import { ethers } from 'ethers'
import { MetaMaskInpageProvider } from '@metamask/providers'

type Props = {}

declare global {
	interface Window {
		ethereum?: MetaMaskInpageProvider
	}
}
const ConnectWallet = (props: Props) => {
	const [connected, setConnected] = useState<boolean>(false)
	const [id, setId] = useState<string | null>(null)

	const connectWallet = async () => {
		try {
			if (window.ethereum && !connected) {
				const provider = new ethers.BrowserProvider(window.ethereum)
				const signer = await provider.getSigner()
				const address = await signer.getAddress()
				const formattedAddress = `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
				setId(formattedAddress)
				setConnected(true)
			}
		} catch (error) {
			const message = error instanceof Error ? error.message : String(error)
			console.log(message)
		}
	}

	return (
		<div>
			<Button
				type='primary'
				className='connect-metamask'
				onClick={connectWallet}
			>
				{id ? id : 'Connect Wallet'}
			</Button>
		</div>
	)
}

export default ConnectWallet
