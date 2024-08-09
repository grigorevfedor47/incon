function processData(method, data) {
  if (!method) {
    // Early exit if method is falsy
    console.log("No valid method provided");
    return; // Exit the function
  }

  // Code to process data using the given method
  console.log("Processing data with method:", method);
  // ...
}

processData(null, "some data");  // Output: "No valid method provided"
processData("methodA", "some data");  // Output: "Processing data with method: methodA"
