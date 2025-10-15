import { toast } from "react-toastify";

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
  appData.push(id);
  setToLocalStorage(appData);
  toast.success("App installed successfully");
};

const removeAppFromStored = (id) => {
  const appId = String(id);
  const storedAppData = getStoredApp();
  const remainingApp = storedAppData.filter((app) => app !== appId);
  setToLocalStorage(remainingApp);
  toast.success("App uninstalled successfully");
};

export {
  getStoredApp,
  addToStoredApp,
  setToLocalStorage,
  removeAppFromStored as removeToLocal,
};
