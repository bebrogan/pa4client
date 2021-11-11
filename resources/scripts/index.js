function getPost(){
    const alPostsApi= "https://localhost:5001/api/post";

    fetch(alPostsApi).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        let html = "<ul>";
        json.forEach((post) => {
            html += "<li>" + post.text + "posted by Big Al </li>"
        })
        html += "</ul>";
        document.getElementById("Post").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    });
}