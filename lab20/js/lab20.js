//Ashlyn Einhell (copied from Kayla Lee)
//November 29th 2020
URL = "https://xkcd.com/info.0.json"
// URL = "http://xkcd.com/614/info.0.json"

// api

    $.ajax({
        url: URL,
        //data: {},
        type: "GET",
        // dataType : "json"
    })
    .done(function(data) {
        console.log(data);
        var title = data.title;
        var img = data.img;
        var alt = data.alt;
        var html = `
          <div id="api">
            <h2>${title}</h2>
            <img src="${img}" title="${alt}"><br>
            <button id="prev">Previous</button><button id="next">Next</button>
          </div>
          `
          $("#output").append(html);

    });
