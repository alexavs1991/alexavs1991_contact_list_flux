const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            apiUrl: "https://playground.4geeks.com/apis/fake/contact/agenda/alexa_agenda",
            contacts: [],
        },
        actions: {
            getContacts: async () => {
                const store = getStore();
                const response = await fetch(store.apiUrl);
                const data = await response.json();
                setStore({ contacts: data });
                console.log(data);
            },
            addContact: async (contact) => {
                const store = getStore();
                const actions = getActions();
                const response = await fetch(store.apiUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        full_name: contact.name,
                        email: contact.email,
                        agenda_slug: "alexa_agenda",
                        address: contact.address,
                        phone: contact.phone,
                    }),
                });
                console.log(contact);
                actions.getContacts();
            },
            editContact: async (contact, id) => {
                const store = getStore();
                const response = await fetch(`${store.apiUrl}${id}`, {
                    method: "PUT",
                    body: JSON.stringify({
                        full_name: contact.name,
                        email: contact.email,
                        agenda_slug: "alexa_agenda",
                        address: contact.address,
                        phone: contact.phone,
                    }),
                    headers: { "Content-Type": "application/json" },
                });
            },
            handleDeleteContact: async (id) => {
                try {
                    const actions = getActions();
                    await actions.deleteContact(id)
                } catch (error) {
                    console.error("Error deleting contact:", error);
                }
            },
        },
    };
};

export default getState;

