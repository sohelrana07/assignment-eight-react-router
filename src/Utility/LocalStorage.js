const getStoredApp = () => {
  const storedAppString = localStorage.getItem("app");

  if (storedAppString) {
    const storedAppData = JSON.parse(storedAppString);
    return storedAppData;
  }

  return [];
};

const setToLocalStorage = (data) => {
  const StoreApp = JSON.stringify(data);
  localStorage.setItem("app", StoreApp);
};

const addToStoredApp = (id) => {
  const appData = getStoredApp();
  if (appData.includes(id)) {
    return alert("data already exist");
  } else {
    appData.push(id);
    alert("data added");
    setToLocalStorage(appData);
  }
};

export { getStoredApp, addToStoredApp, setToLocalStorage };
