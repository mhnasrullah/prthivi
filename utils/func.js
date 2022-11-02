export const getDataLandingByNumber = (data = [],num) => {
    return data.filter((e)=>(e.number === num))[0];
}

export const getBase64 = file => {

    return new Promise( resolve => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };