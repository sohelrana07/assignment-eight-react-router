import axios from "axios";
import { useEffect, useState } from "react";

const useApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("../applicationData.json")
      .then((data) => setApplications(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { applications, loading, error };
};

export default useApplications;
