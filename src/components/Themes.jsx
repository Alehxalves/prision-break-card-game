import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import collection from "../assets/themes/themes.json";

import '../assets/styles/Themes.scss';

function Themes({ show, handleClose }) {

	const selectTheme = (theme) => {
		localStorage.setItem('theme', theme.name);
		handleClose();
	}
	
	return (
		<>
			<Modal show={show} onHide={handleClose} size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered >
				<Modal.Header closeButton>
					<Modal.Title>Temas</Modal.Title>
				</Modal.Header>
				<Modal.Body className="show-grid">
					<Container>
						<Row>
							{collection.themes.map((theme, index) => (
								<Col xs={6} md={3} key={index}>
									<Card style={{ width: '8rem', margin: '1rem' }} onClick={() => selectTheme(theme)}>
										<Card.Img variant="top" src={theme.cards.find(card => card.tag === 'back').url} />
									</Card>
								</Col>
							))}
						</Row>
					</Container>
					<div className="cards-container">
					</div>

				</Modal.Body>
			</Modal>
		</>
	);
}

export default Themes;