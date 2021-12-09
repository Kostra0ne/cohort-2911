const URL =
  "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json";

axios // axios always returns a Promise (the promise of a valid dataset)
  .get(URL)
  .then((response) => {
    // if everything goes fine, you'll get access to an object containing the data
    // console.log(response); // the full response
    // console.log(response.data);
    const states = Object.values(response.data);
    console.log(states);
  })
  .catch((error) => {
    // if the promise is not fullfilled, you'll get an error instead of the targetd data
    console.error(error);
  });
