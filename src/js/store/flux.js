const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: [],
			userName: "",
		},
		actions: {
			// Use getActions to call a function within a fuction
			setUserInput: (newUserName) => {
				const store = getStore();
				setStore({ ...store, userName: newUserName });
				console.log("User saved");
			},
			createUser: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/rubpercas", {
						method: "POST",
						headers: {
							"Accept": "application/json"
						},
					})
					const result = await response.json();
					console.log(result);
				} catch (error) {
					console.log(error);
				}
			},
			getAgenda: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/rubpercas/contacts");
					if (response.status == 404) {
						getActions().createUser();
						getActions().createAgenda();
					}
					if (response.ok) {
						console.log("peticion ok")
						const result = await response.json();
						if (result) {
							setStore({ contactList: result.contacts })
						}
					}
				} catch (error) {
					console.log(error);
				}

			},
			addContact: (newContact) => {
				const store = getStore();
				setStore({ ...store, contactList: [...store.contactList, newContact] })
			},
			createContact: async (payload) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/rubpercas/contacts", {
						method: "POST",
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(
							payload
						),
					})
					const result = await response.json();
					console.log(result);
					const actions = getActions();
					actions.addContact(result);
					console.log("Contact added:", result);
				} catch (error) {
					console.log(error);
				}
			},
			createAgenda: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/rubpercas", {
						method: "POST",
						headers: {
							'Accept': 'application/json'
						},
					})
					const result = await response.json();
					console.log(result);
					console.log("Agenda created.");
				} catch (error) {
					console.log(error);
				}
			},
			deleteContact: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/rubpercas/contacts/${id}`, {
						method: "DELETE",
						headers: {
							"Accept": "application/json"
						},
					})
					console.log(response);
					if (response.ok) {
						const store = getStore();
						const updatedContacts = store.contactList.filter(contact => contact.id !== id);
						setStore({ contactList: updatedContacts });
						console.log(`Contact with ID ${id} deleted`);
					} else {
						console.log("Error deleting contact");
					}
				} catch (error) {
					console.log(error);
				}
			},
			editContact: async (id, contact) => {
				const store = getStore();
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/rubpercas/contacts/${id}`, {
						method: "PUT",
						headers: {
							'Content-Type': 'application/json',
							"Accept": "application/json"
						},
						body: JSON.stringify(contact)
					})
					const result = await response.json();
					if (result) {
						const updateList = store.contactList.map(contact => {
							if (contact.id == id) {
								contact = result
							}
							return contact;
						})
						setStore({ contactList: updateList })
					}
				} catch (error) {
					console.log(error);
				}
			}
		}
	}
};

export default getState;
