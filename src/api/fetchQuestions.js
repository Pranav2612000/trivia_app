import axios from "axios";
export default async function fetchQuestions() {
  try {
    const options = {
      method: "GET",
      url: "https://opentdb.com/api.php",
      params: { amount: "10", difficulty: "hard", type: "boolean" },
    };

    const resp = await axios.request(options);
    if (resp.data.response_code != 0) {
      /* response_code other than 0 denotes the api did not return
         an appropriate respone */
      return [];
    }
    return resp.data.results;
  } catch (err) {
    console.log("Error fetching questions", err);
    return [];
  }
}
