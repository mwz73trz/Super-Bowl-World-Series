const BASE_URL = "http://localhost:8000/api/";

const tryCatchFetch = async (url, init = null) => {
  try {
    const response = await fetch(url, init);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(
        `Bad response: ${response.status} ${response.statusText}`
      );
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};

const fetchSuperBowls = async () => {
  const url = `${BASE_URL}superbowls/`;
  return await tryCatchFetch(url);
};

const fetchSuperBowlById = async (superbowlId) => {
  const url = `${BASE_URL}superbowls/${superbowlId}/`;
  return await tryCatchFetch(url);
};

const myExports = {
  fetchSuperBowls,
  fetchSuperBowlById,
};

export default myExports;
