/**
 * CSE154 Ajax Example
 *
 * This example uses the AjaxGetPromise object to fetch data from a url that waits for a couple seconds before
 * responding.
 */
(function() {
    window.onload = function() {
        document.getElementById("fetch").onclick = fetch;
    };

    function fetch() {
        // To simulate a delay in the response, you need some control over what's
        // running on the server. Requesting a PHP script gives us that control.
        // That script also takes a query paramter so that you can change how long
        // the delay is:
        var ajaxPromise = new AjaxGetPromise("long-wait.php");

        // This line will just fetch the data.txt file:
        //   var ajaxPromise = new AjaxGetPromise("data.txt");

        ajaxPromise
            // call then() to do something when the promise resolves:
            .then(function(response) {
                alert("Promise must have been executed by now.");
                document.getElementById("content-container").innerHTML = response;
            })
            // call catch() to do something if the promise rejects:
            .catch(function(errorMessage, responseCode) {
                if (typeof(responseCode) != undefined) {
                    errorMessage = "Server Responded with Status " + responseCode + "\n" + errorMessage;
                }
                document.getElementById("content-container").innerHTML = errorMessage;
            });
    }
})();