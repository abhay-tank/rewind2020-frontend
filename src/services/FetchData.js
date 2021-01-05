export const ProfileUrl =
  "https://rewind-2020.herokuapp.com/profiles/getAllProfiles";

export const ProfileUrlId = "https://rewind-2020.herokuapp.com/profiles";

export const fetchData = async (url) => {
  try {
    return await fetch(url).then((response) => {
      return response.json();
    });
  } catch (err) {
    console.log(err);
    return err;
  }
};
