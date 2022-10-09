import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://127.0.0.1:3000/api/v1",
  //   timeout: 1000,
});
apiClient.interceptors.request.use(
  (config) => {
    // const userDetails = localStorage.getItem("user");
    // if (userDetails) {
    //   const token = JSON.parse(userDetails).token;
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDY3YmM2ODI1ZjVlNzA2NDk5M2RiMyIsImlhdCI6MTY2MTk1MjQ3NCwiZXhwIjoxNjY5NzI4NDc0fQ.rmo9cXP0H3okcV9IOYZiNSFVsqG9tPaKHAOQkc-PNs8`;
    // } else {
    //   return;
    // }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export const getAllProperties = async () => {
  try {
    return await apiClient.get(`/properties`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const getMyAllProperties = async () => {
  try {
    return await axios.get(
      `http://127.0.0.1:3000/api/v1/properties/getMyProperties`
    );
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const getPropertiesOfAUser = async (userId) => {
  try {
    return await apiClient.get(`/users/${userId}/properties`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const getUnapprovedProperties = async () => {
  try {
    return await axios.get(
      `http://127.0.0.1:3000/api/v1/users/properties/getunapprovedproperties`
    );
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const getApprovedProperties = async () => {
  try {
    return await axios.get(
      `http://127.0.0.1:3000/api/v1/users/properties/getapprovedproperties`
    );
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const getAUserProperty = async (id) => {
  try {
    return await axios.get(
      `http://127.0.0.1:3000/api/v1/properties/${id}/getthisproperty`
    );
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const createProperty = async (data) => {
  try {
    return await apiClient.post(`/properties`, data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const updateProperty = async (propertyId, data) => {
  try {
    return await apiClient.patch(`/properties/${propertyId}`, data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const getAProperty = async (propertyId) => {
  try {
    return await apiClient.get(`/properties/${propertyId}`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const deleteAProperty = async (propertyId) => {
  try {
    return await apiClient.delete(`/properties/${propertyId}`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const unapproveAProperty = async (propertyId) => {
  try {
    return await apiClient.patch(
      `/properties/${propertyId}/disapproveProperty`
    );
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const approveAProperty = async (propertyId) => {
  try {
    return await apiClient.patch(`/properties/${propertyId}/approveProperty`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const searchProperties = async (data) => {
  try {
    return await apiClient.get(`/properties/searchproperties`, {
      params: { data },
    });
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const signup = async (data) => {
  try {
    console.log(data);
    return await axios.post(`http://127.0.0.1:3000/api/v1/users/signup`, data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const forgotPassword = async (email) => {
  try {
    return await axios.post(
      `http://127.0.0.1:3000/api/v1/users/forgotPassword`,
      { email }
    );
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const resetPassword = async (data) => {
  try {
    return await axios.patch(
      `http://127.0.0.1:3000/api/v1/users/resetPassword/${data.token}`,
      data.data
    );
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const validateToken = async (data) => {
  try {
    return await axios.post(
      `http://127.0.0.1:3000/api/v1/users/validateToken`,
      data
    );
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const updatePassword = async (data) => {
  try {
    return await apiClient.patch(`/users/updateMyPassword`, data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const logout = async () => {
  try {
    return await apiClient.get(`/users/logout`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const getAllUsers = async () => {
  try {
    return await apiClient.get(`/users`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const getAllUsers_ = async () => {
  try {
    return await apiClient.get(`/users/getAllUsers`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const updateMe = async (data) => {
  try {
    return await apiClient.patch(`/users/updateMe`, data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const getAUser = async (id) => {
  try {
    return await apiClient.get(`/users/${id}`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const deleteMe = async () => {
  try {
    return await apiClient.delete(`/users/deleteMe`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const deleteAUser = async (id) => {
  try {
    return await apiClient.delete(`/users/${id}`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const getMe = async () => {
  try {
    return await apiClient.delete(`/users/me`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
