const customInputConfig = {
    Education:
      [{label:"Name of institution", type:"text", start:"NULL", stop:"NULL"},
      {label:"Year of passing", type:"date", include:"true", stop:"false"},
      {label:"Score", type:"number", include:"true", stop:"true"}],
     Project:[
      {label:"Name", type:"text", start:"NULL", stop:"NULL"},
      {label:"Tools", type:"text", start:"NULL", stop:"NULL"},
      {label:"Description", type:"textArea", start:"NULL", stop:"NULL"},
     ],
     Experience:[
      {label:"Name of Organisation", type:"text", start:"NULL", stop:"NULL"},
      {label:"Role", type:"text", start:"NULL", stop:"NULL"},
      {label:"Start Date", type:"Date", start:"NULL", stop:"NULL"},
      {label:"End Date", type:"Date", start:"NULL", stop:"NULL"},
     ],  
  };

export default customInputConfig;

