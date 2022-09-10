import { createSlice } from "@reduxjs/toolkit";
const agentSlice = createSlice({
  name: "agent",
  initialState: {
    agents: [
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
    totalagents: 0,
  },
  reducers: {
    replaceAgents(state, action) {
      state.totalagents = action.payload.totalagents;
      state.agents = action.payload.agents;
    },
    addagent(state, action) {
      const newagent = action.payload;
      state.changed = true;
      state.agents.push({
        userid: newagent.id,
        firstname: newagent.firstname,
        lastname: newagent.lastname,
        biotext: newagent.biotext,
        about: newagent.about,
        email: newagent.email,
        phone: newagent.phone,
        usertype: newagent.usertype,
        address: newagent.address,
        chat: newagent.chat,
        totaldeals: newagent.totaldeals,
        profilephoto: newagent.profilephoto,
        coverphoto: newagent.coverphoto,
      });
      state.totalagents++;
    },
    removeagent(state, action) {
      state.changed = true;
      state.agents.filter((agent) => agent.id !== action.payload.id);
      state.changed = true;
      state.totalagents--;
    },
    editagent(state, action) {
      state.changed = true;
      const updatedData = action.payload;
      const agentToEdit = state.agents.find(
        (agent) => agent.id === updatedData.id
      );
      Object.keys(agentToEdit).forEach(
        (i) =>
          (agentToEdit.agentToEdit[i] = updatedData.agentToEdit[i]
            ? updatedData.agentToEdit[i]
            : agentToEdit.agentToEdit[i])
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
    getagent(state, action) {
      const requiredagent = state.agents.find(
        (agent) => agent.id === action.payload.id
      );
      return requiredagent;
    },
    searchagent(state, action) {
      const searchedagent = action.payload;
      const searchedagents = state.agents.filter(
        (agent) =>
          Object.values(agent)[1].some(searchedagent.firstname) &&
          Object.values(agent)[2].some(searchedagent.lastname)
      );
      return searchedagents;
    },
  },
});
export const agentActions = agentSlice.actions;
export default agentSlice;
