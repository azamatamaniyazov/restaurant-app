const setContent = (process, Component) => {
  switch (process) {
    case "loading":
      return "Loading";
    case "confirmed":
      return <Component />;
    case "error":
      return "Error";
  }
};

export default setContent;
