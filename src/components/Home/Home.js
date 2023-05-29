import React, { useState } from 'react';
import Tickets from '../Tickets';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
	const [ticketData, setTicketData] = useState(Tickets);
	const [showModal, setShowModal] = useState(false);
	const [modalTitle, setModalTitle] = useState('');
	const [modalContent, setModalContent] = useState('');
	const [selectedTicket, setSelectedTicket] = useState(null);
	const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);

	const handleModalToggle = () => {
		setShowModal(!showModal);
	};

	const handleEdit = (ticket) => {
		setSelectedTicket(ticket);
		setModalTitle('Edit Ticket');
		setModalContent(
			<>
				<div className="modal-body text-left">
					<div className="mb-3 d-flex align-items-center">
						<label htmlFor="editType" className="form-label" style={{ marginRight: '0.5rem', width: '120px' }}>Ticket Type:</label>
						<input type="text" className="form-control" id="editType" defaultValue={ticket.type} style={{ flex: '1' }}  />
					</div>
					
					<div className="mb-3 d-flex align-items-center">
						<label htmlFor="editDescription" className="form-label" style={{ marginRight: '0.5rem', width: '120px' }}>Description:</label>
						<textarea className="form-control" id="editDescription" defaultValue={ticket.description} rows={3} style={{ flex: '1' }}></textarea>
					</div>
				</div>


			</>
		);
		setShowModal(true);
	};

	const handleAddTicket = () => {
		setModalTitle('Add New Ticket');
		setModalContent(
			<>
				<div className="modal-body text-left">
					<div className="mb-3 d-flex align-items-center">
						<label htmlFor="addType" className="form-label" style={{ marginRight: '0.5rem', width: '120px' }}>Ticket Type:</label>
						<input type="text" className="form-control" id="addType" defaultValue="" style={{ flex: '1' }}  />
					</div>
					<div className="mb-3 d-flex align-items-center">
						<label htmlFor="addDescription" className="form-label" style={{ marginRight: '0.5rem', width: '120px' }}>Description:</label>
						<textarea className="form-control" id="addDescription" defaultValue="" rows={3} style={{ flex: '1' }}></textarea>
					</div>
				</div>

			</>
		);
		setShowModal(true);
	};



	const handleDelete = (ticket) => {
		setSelectedTicket(ticket);
		setDeleteConfirmationModal(true);
	};

	const handleConfirmDelete = () => {
		setTicketData((prevData) => prevData.filter((ticket) => ticket.id !== selectedTicket.id));
		setDeleteConfirmationModal(false);
	};

	const handleSaveChanges = () => {
		// Get the updated values from the form fields and update the ticket data
		const updatedType = document.getElementById('editType').value;
		const updatedDescription = document.getElementById('editDescription').value;
		setTicketData((prevData) =>
			prevData.map((ticket) => {
				if (ticket.id === selectedTicket.id) {
					return {
						...ticket,
						type: updatedType,
						description: updatedDescription,
					};
				}
				return ticket;
			})
		);
		handleModalToggle();
	};

	const handleAddNewTicket = () => {
		// Get the values from the form fields and create a new ticket
		const type = document.getElementById('addType').value;
		const description = document.getElementById('addDescription').value;
		const id = ticketData.length > 0 ? ticketData[ticketData.length - 1].id + 1 : 1;
		const newTicket = {
			id,
			type,
			description,
		};
		setTicketData((prevData) => [...prevData, newTicket]);
		handleModalToggle();
	};

	const handleCancelDelete = () => {
		setDeleteConfirmationModal(false);
	};

	return (
		<div>
			<h1>Tickets</h1>
			<div className='row'>
				<div className='col-md-8'>
				</div>
				<div className='col-md-3'  >
					<button style={{ width: "200px" }} className="btn btn-primary" onClick={handleAddTicket}>
						Add New Ticket
					</button>
				</div>
			</div>


			<table className="table table-bordered mt-3">
				<thead>
					<tr>
						<th>Ticket Type</th>
						<th>Description</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{ticketData && ticketData.length > 0 ? (
						ticketData.map((ticket) => (
							<tr key={ticket.id}>
								<td>{ticket.type}</td>
								<td>{ticket.description}</td>
								<td>
									<button className="btn btn_border" onClick={() => handleEdit(ticket)}>
										<img width="20" height="20" src="https://img.icons8.com/sf-regular/24/create-new.png" alt="create-new" />
									</button>
									<button className="btn btn_border" onClick={() => handleDelete(ticket)}>
										<img width="20" height="20" src="https://img.icons8.com/sf-regular/20/filled-trash.png" alt="filled-trash" />
									</button>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan="3">No tickets found.</td>
						</tr>
					)}
				</tbody>
			</table>

			{showModal && (
				<div className="modal show" tabIndex="-1" style={{ display: 'block' }}>
					<div className="modal-dialog modal-dialog-centered modal-lg">
						<div className="modal-content">
							<div className="modal-header border-0">
								<h5 className="modal-title" style={{ textAlign: 'left' }}>{modalTitle}</h5>
								<button type="button" className="btn-close" onClick={handleModalToggle}></button>
							</div>
							<div className="modal-body text-left">
								{modalContent}
							</div>
							<div className="modal-footer border-0">
								{selectedTicket && (
									<>
										<button type="button" className="btn btn-secondary" onClick={handleModalToggle}>
											Cancel
										</button>
										<button type="button" className="btn btn-primary" onClick={handleSaveChanges}>
											Save changes
										</button>
									</>
								)}
								{!selectedTicket && (
									<button type="button" className="btn btn-primary" onClick={handleAddNewTicket}>
										Add Ticket Type
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			)}


			{deleteConfirmationModal && (
				<div className="modal show" tabIndex="-1" style={{ display: 'block' }}>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Confirm Delete</h5>
								<button type="button" className="btn-close" onClick={handleCancelDelete}></button>
							</div>
							<div className="modal-body" style={{ textAlign: 'left' }}>
								<p>Are you sure you want to delete the ticket ?</p>
								<p>Type: {selectedTicket?.type}</p>
								<p>Description: {selectedTicket?.description}</p>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>
									Delete
								</button>
								<button type="button" className="btn btn-secondary" onClick={handleCancelDelete}>
									Cancel
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Home;
