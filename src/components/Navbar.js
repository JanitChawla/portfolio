import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@iconify/react"
import menuIcon from "@iconify-icons/mdi/menu"
import menuCloseIcon from "@iconify-icons/mdi/menu-close"
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import AssignmentInd from "@material-ui/icons/AssignmentInd";

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <AssignmentInd />, listText: "Resume", listPath: "https://drive.google.com/file/d/1ZGS3qhi1D9J1Lfco3W43Gin3X8Evzuhs/view" },
  { listIcon: <Apps />, listText: "Projects", listPath: "/project" },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
  { listIcon: <ContactMail />, listText: 'Skills', listPath: '/skills'}
];


export default function NavBar(props) {
	const [menuOpen, setMenuOpen] = useState(false)
	const [windowSize, updateWindowSize] = useState({
		height: window.innerHeight,
		width: window.innerWidth,
	})

	useEffect(() => {
		window.addEventListener("resize", () => {
			updateWindowSize({
				height: window.innerHeight,
				width: window.innerWidth,
			})
		})
	}, [])

	function onMenuClick() {
		setMenuOpen(!menuOpen)
	}

	useEffect(() => {
		document.body.classList.toggle("no-scroll", menuOpen)
	}, [menuOpen])

	return (
		<nav className='navbar bg-dark fixed-top h-auto navbar-dark'>
			<div
				className='navbar-brand text-uppercase font-weight-bolder ml-4'
				href='/'>
				{"<NAV />"}
			</div>
			<ul className='navbar-links d-none d-md-flex ml-auto text-white list-unstyled my-1'>
				{menuItems.map((item, index) => {
					return (
						<li key={index} className='mr-4'>
							<a
								className='text-white text-uppercase text-decoration-none'
								href={item.listPath}
								target={item.listIcon}>
								{item.listText}
							</a>
						</li>
					)
				})}
			</ul>
			<Icon
				icon={menuOpen ? menuCloseIcon : menuIcon}
				className='d-block d-md-none'
				// passing these properties through class is not having any effect
				color='white'
				height='100%'
				width='auto'
				onClick={onMenuClick}
			/>
			<AnimatePresence exitBeforeEnter>
				{menuOpen && (
					<motion.div
						className='bg-dark position-absolute d-flex d-md-none align-items-center'
						style={{
							...windowSize,
							top: 0,
							left: 0,
							zIndex: -1,
						}}
						initial={{ x: "-100vw", opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: "100vw", opacity: 0 }}
						transition={{
							duration: 0.6,
							when: "beforeChildren",
							ease: "easeInOut",
						}}>
						<ul className='navbar-links d-flex d-md-none flex-column text-white list-unstyled pl-4'>
							{menuItems.map((item, index) => {
								return (
									<motion.li
										initial={{ x: -100, opacity: 0 }}
										animate={{
											x: 0,
											opacity: 1,
											transition: {
												duration: 0.5,
												delay: index / 1.3,
												ease: "easeInOut",
											},
										}}
										exit={{
											x: 100,
											opacity: 0,
											transition: {
												duration: 0.3,
												delay: 0,
											},
										}}
										key={index}
										className='mb-4'>
										<a
											className='text-white text-uppercase h1 text-decoration-none'
											href={item.listPath}
								      target={item.listIcon}>
							      	{item.listText}
										</a>
									</motion.li>
								)
							})}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}
