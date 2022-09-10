import { createSlice } from "@reduxjs/toolkit";
const contractorSlice = createSlice({
  name: "contractor",
  initialState: {
    contractors: [
      {
        userid: "",
        firstname: "",
        lastname: "",
        biotext: "",
        about: "",
        email: "",
        phone: "",
        usertype: "",
        address: "",
        chat: "",
        totaldeals: "",
        profilephoto: "",
        coverphoto: "",
      },
    ],
    changed: false,
    totalContractors: 0,
  },
  reducers: {
    replaceContractors(state, action) {
      state.totalContractors = action.payload.totalContractors;
      state.contractors = action.payload.contractors;
    },
    addcontractor(state, action) {
      const newcontractor = action.payload;
      state.changed = true;
      state.contractors.push({
        userid: newcontractor.id,
        firstname: newcontractor.firstname,
        lastname: newcontractor.lastname,
        biotext: newcontractor.biotext,
        about: newcontractor.about,
        email: newcontractor.email,
        phone: newcontractor.phone,
        usertype: newcontractor.usertype,
        address: newcontractor.address,
        chat: newcontractor.chat,
        totaldeals: newcontractor.totaldeals,
        profilephoto: newcontractor.profilephoto,
        coverphoto: newcontractor.coverphoto,
      });
      state.totalagents++;
    },
    removecontractor(state, action) {
      state.changed = true;
      state.contractors.filter(
        (contractor) => contractor.id !== action.payload.id
      );
      state.totalContractors--;
    },
    editagent(state, action) {
      state.changed = true;
      const updatedData = action.payload;
      const contractorToEdit = state.contractors.find(
        (contractor) => contractor.id === updatedData.id
      );
      Object.keys(contractorToEdit).forEach(
        (i) =>
          (contractorToEdit.contractorToEdit[i] = updatedData.contractorToEdit[
            i
          ]
            ? updatedData.contractorToEdit[i]
            : contractorToEdit.contractorToEdit[i])
      );
      // userid = agentToEdit.id;
      // agentToEdit.firstname = updatedData.firstname
      //   ? updatedData.firstname
      //   : agentToEdit.firstname;
      // agentToEdit.lastname = updatedData.lastname
      //   ? updatedData.lastname
      //   : agentToEdit.lastname;
      // agentToEdit.biotext = updatedData.biotext
      //   ? updatedData.biotext
      //   : agentToEdit.biotext;
      // agentToEdit.about = updatedData.about
      //   ? updatedData.about
      //   : agentToEdit.about;
      // agentToEdit.email = updatedData.email
      //   ? updatedData.email
      //   : agentToEdit.email;
      // agentToEdit.phone = updatedData.phone
      //   ? updatedData.phone
      //   : agentToEdit.phone;
      // agentToEdit.usertype = updatedData.usertype
      //   ? updatedData.usertype
      //   : agentToEdit.usertype;
      // agentToEdit.address = updatedData.address
      //   ? updatedData.address
      //   : agentToEdit.address;
      // agentToEdit.chat = updatedData.chat ? updatedData.chat : agentToEdit.chat;
      // agentToEdit.totaldeals = updatedData.totaldeals
      //   ? updatedData.totaldeals
      //   : agentToEdit.totaldeals;
      // agentToEdit.profilephoto = updatedData.profilephoto
      //   ? updatedData.profilephoto
      //   : agentToEdit.profilephoto;
      // agentToEdit.coverphoto = updatedData.coverphoto
      //   ? updatedData.coverphoto
      //   : agentToEdit.coverphoto;
    },
    getcontractor(state, action) {
      const requiredcontractor = state.contractors.find(
        (contractor) => contractor.id === action.payload.id
      );
      return requiredcontractor;
    },
    searchcontractor(state, action) {
      const searchedcontractor = action.payload;
      const searchedcontractors = state.contractors.filter(
        (contractor) =>
          Object.values(contractor)[1].some(searchedcontractor.firstname) &&
          Object.values(contractor)[2].some(searchedcontractor.lastname)
      );
      return searchedcontractors;
    },
  },
});
export const contractorActions = contractorSlice.actions;
export default contractorSlice;
