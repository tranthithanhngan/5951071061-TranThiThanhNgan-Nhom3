axios.get('https://graph.facebook.com/profile.php?id=100067408643376feed?fields=comments.summary(true),likes.summary(true)&access_token=EAAEai6YqZCXYBAImzpObKOyUGDZB3Ew8fIDFpzn4KIE74G2UUrBnlRAl1sCEO2NJSzNgYZCkD4MpfeZBx7cNYVnZCvAZBhFGAAuk5e1z1sSq0J4luV7nHNtsrfjo7tzObvKAYLRoidhitEXZCtC8RzuMXUrctyjJNkxfxQsZCbrY0EXrh8LULHJMU2CtAMW2l6XMZAwy0wAHo6knqCyBazBa6CDubXBIbWEozZCEWF1Vp0UWVN9RHYtqxw')
    .then(response => {
        var outPut = "";
        var likesCount = "";

        for (var i = 0; i < 3; i++) {
            outPut += "Post " + (i + 1) + ": ";
            likesCount += "Likes count post " + (i + 1) + ": " + "";
            for (var j = 0; j < response.data.data[i].comments.summary.total_count; j++) {
                if (response.data.data[i].comments.data[j].message != null) {
                    outPut += response.data.data[i].comments.data[j].message + " ";
                } else {
                    outPut += " ";
                }
            }
            likesCount += response.data.data[i].likes.summary.total_count + "<br>";
        }
        document.getElementById('output').innerHTML = outPut;
        document.getElementById('count').innerHTML = likesCount;
    })
    .catch(error => console.error(error))