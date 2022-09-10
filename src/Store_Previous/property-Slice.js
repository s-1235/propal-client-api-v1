import { createSlice } from "@reduxjs/toolkit";
const propertySlice = createSlice({
  name: "ui",
  initialState: {
    properties: [
      {
        id: "",
        name: "",
        province: "",
        city: "",
        description: "",
        type: "",
        category: "",
        subcategory: "",
        postedby: "",
        price: "",
        area: "",
        noofbedrooms: "",
        noofgarages: "",
        noofwashrooms: "",
        images: [],
      },
    ],
    changed: false,
    totalproperties: 0,
  },
  reducers: {
    replaceProperties(state, action) {
      state.totalproperties = action.payload.totalproperties;
      state.properties = action.payload.properties;
    },
    addproperty(state, action) {
      const newproperty = action.payload;
      state.changed = true;
      state.properties.push({
        id: newproperty.id,
        name: newproperty.name,
        province: newproperty.province,
        city: newproperty.city,
        description: newproperty.description,
        type: newproperty.type,
        category: newproperty.category,
        subcategory: newproperty.subcategory,
        postedby: newproperty.postedby,
        price: newproperty.price,
        area: newproperty.area,
        noofbedrooms: newproperty.noofbedrooms,
        noofgarages: newproperty.noofgarages,
        noofwashrooms: newproperty.noofwashrooms,
        images: newproperty.images,
      });
      state.changed = true;
    },
    removeproperty(state, id) {
      state.properties.filter((property) => property.id !== id);
      state.totalproperties--;
      state.changed = true;
    },
    getproperty(state, id) {
      const requiredproperty = state.properties.find(
        (property) => property.id === id
      );
      return requiredproperty;
    },
    searchproperties(state, action) {
      const searchedproperty = action.payload;
      const searchedproperties = state.properties.filter(
        (property) =>
          property.province === searchedproperty.province &&
          property.city === searchedproperty.city &&
          property.type === searchedproperty.type &&
          property.area === searchedproperty.area
      );
      return searchedproperties;
    },
    editproperty(state, action) {
      const updatedData = action.payload;
      state.changed = true;
      const propertyToEdit = state.properties.find(
        (property) => property.id === updatedData.id
      );
      Object.keys(propertyToEdit).forEach(
        (i) =>
          (propertyToEdit.propertyToEdit[i] = updatedData.propertyToEdit[i]
            ? updatedData.propertyToEdit[i]
            : propertyToEdit.propertyToEdit[i])
      );
      // propertyToEdit.id = propertyToEdit.id;
      // propertyToEdit.name = updatedData.name
      //   ? updatedData.name
      //   : propertyToEdit.name;
      // propertyToEdit.province = updatedData.province
      //   ? updatedData.province
      //   : propertyToEdit.province;
      // propertyToEdit.city = updatedData.city
      //   ? updatedData.city
      //   : propertyToEdit.city;
      // propertyToEdit.description = updatedData.description
      //   ? updatedData.description
      //   : propertyToEdit.description;
      // propertyToEdit.type = updatedData.type
      //   ? updatedData.type
      //   : propertyToEdit.type;
      // propertyToEdit.category = updatedData.category
      //   ? updatedData.category
      //   : propertyToEdit.category;
      // propertyToEdit.subcategory = updatedData.subcategory
      //   ? updatedData.subcategory
      //   : propertyToEdit.subcategory;
      // propertyToEdit.postedby = updatedData.postedby
      //   ? updatedData.postedby
      //   : propertyToEdit.postedby;
      // propertyToEdit.price = updatedData.price
      //   ? updatedData.price
      //   : propertyToEdit.price;
      // propertyToEdit.area = updatedData.area
      //   ? updatedData.area
      //   : propertyToEdit.area;
      // propertyToEdit.noofbedrooms = updatedData.noofbedrooms
      //   ? updatedData.noofbedrooms
      //   : propertyToEdit.noofbedrooms;
      // propertyToEdit.noofgarages = updatedData.noofgarages
      //   ? updatedData.noofgarages
      //   : propertyToEdit.noofgarages;
      // propertyToEdit.noofwashrooms = updatedData.noofwashrooms
      //   ? updatedData.noofwashrooms
      //   : propertyToEdit.noofwashrooms;
      // propertyToEdit.images = updatedData.images
      //   ? updatedData.images
      //   : propertyToEdit.images;
    },
  },
});
export const propertyActions = propertySlice.actions;
export default propertySlice;
