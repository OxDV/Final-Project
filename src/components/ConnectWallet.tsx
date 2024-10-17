import React, { useState } from 'react'
import { Button, Modal } from 'antd'
import { ethers } from 'ethers'
import { MetaMaskInpageProvider } from '@metamask/providers'
import '../styles/components/connectWallet.scss'

type Props = {}

declare global {
	interface Window {
		ethereum?: MetaMaskInpageProvider
	}
}
const ConnectWallet = (props: Props) => {
	const [connected, setConnected] = useState<boolean>(false)
	const [id, setId] = useState<string | null>(null)
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	const connectWallet = async () => {
		if (connected) setIsModalOpen(true)
		try {
			if (window.ethereum && !connected) {
				const provider = new ethers.BrowserProvider(window.ethereum)
				const signer = await provider.getSigner()
				const address = await signer.getAddress()
				const formattedAddress = `${address.substring(
					0,
					6
				)}...${address.substring(address.length - 4)}`
				setId(formattedAddress)
				setConnected(true)
			}
		} catch (error) {
			const message = error instanceof Error ? error.message : String(error)
			console.log(message)
		}
	}

	const handleCancel = () => {
		setIsModalOpen(false)
	}

	const disconnectWallet = () => {
		setId(null) 
		setConnected(false) 
		setIsModalOpen(false)
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
			<Modal
				title='Account'
				open={isModalOpen}
				footer={
					<Button type='primary' onClick={disconnectWallet}>
						Disconnect
					</Button>
				}
				onCancel={handleCancel}
			></Modal>
		</div>
	)
}

export default ConnectWallet
