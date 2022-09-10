import { contractorActions } from "./contractor-slice";
import { agentActions } from "./agent-slice";
import { propertyActions } from "./property-Slice";
// import { useDispatch } from "react-redux";
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://propal-64c72-default-rtdb.firebaseio.com/propaldata.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const propalData = await fetchData();
      dispatch(
        propertyActions.replaceProperties({
          properties: propalData.properties || [],
        })
      );
      dispatch(
        agentActions.replaceAgents({
          agents: propalData.agents || [],
        })
      );
      dispatch(
        contractorActions.replaceContractors({
          contractors: propalData.contractors || [],
        })
      );
    } catch (error) {
      // dispatch(
      //   uiActions.showNotification({
      //     status: "error",
      //     title: "Error!",
      //     message: "Fetching cart data failed!",
      //   })
      // );
      console.log("Fetching Propaldata failed");
      console.log(error);
    }
  };
};

export const sendCartData = (propaldata) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://propal-64c72-default-rtdb.firebaseio.com/propaldata.json",
        {
          method: "PUT",
          body: JSON.stringify({
            properties: propaldata.properties,
            agents: propaldata.agents,
            contractors: propaldata.contractors,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending Propal data failed.");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log("Sending Propaldata failed");
    }
  };
};
