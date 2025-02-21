export const getMovie = async (url) => {
  try {
    const reponse = await fetch(url);
    if (!reponse.ok) {
      throw new Error("network response was not ok");
    }
    // console.log(reponse)
    const resp = await reponse.json();
    return resp.results;
  } catch (error) {
    console.error("error to fetch api", error);
  }
};
