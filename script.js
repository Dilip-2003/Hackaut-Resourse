

    const resources = [
        // { title:"Topic","" }
        {title1:"HTML",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/",link2:"https://www.w3schools.com/js/js_array_iteration.asp",link:"./ViewGeneratedDocOnFly.pdf"},

        {title1:"CSS",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/",link2:"https://www.w3schools.com/js/js_array_iteration.asp",link:"./ViewGeneratedDocOnFly.pdf"},

        {title1:"JavaScript",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/",link2:"https://www.w3schools.com/js/js_array_iteration.asp",link:"./ViewGeneratedDocOnFly.pdf"},

        {title1:"NodeJs",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/",link2:"https://www.w3schools.com/js/js_array_iteration.asp",link:"./ViewGeneratedDocOnFly.pdf"},

        {title1:"ExpressJs",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/",link2:"https://www.w3schools.com/js/js_array_iteration.asp",link:"./ViewGeneratedDocOnFly.pdf"},

        {title1:"ReactJs",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/",link2:"https://www.w3schools.com/js/js_array_iteration.asp",link:"./ViewGeneratedDocOnFly.pdf"},

        {title1:"AngularJs",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/",link2:"https://www.w3schools.com/js/js_array_iteration.asp",link:"./ViewGeneratedDocOnFly.pdf"},

        {title1:"HTML",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/",link2:"https://www.w3schools.com/js/js_array_iteration.asp",link:"./ViewGeneratedDocOnFly.pdf"},

        {title1:"HTML",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/",link2:"https://www.w3schools.com/js/js_array_iteration.asp",link:"./ViewGeneratedDocOnFly.pdf"},

        {title1:"HTML",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/",link2:"https://www.w3schools.com/js/js_array_iteration.asp",link:"./ViewGeneratedDocOnFly.pdf"},

        {title1:"HTML",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/",link2:"https://www.w3schools.com/js/js_array_iteration.asp",link:"./ViewGeneratedDocOnFly.pdf"},

        {title1:"HTML",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/",link2:"https://www.w3schools.com/js/js_array_iteration.asp",link:"./ViewGeneratedDocOnFly.pdf"},

        {title1:"HTML",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/",link2:"https://www.w3schools.com/js/js_array_iteration.asp",link:"./ViewGeneratedDocOnFly.pdf"},

        {title1:"HTML",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/",link2:"https://www.w3schools.com/js/js_array_iteration.asp",link:"./ViewGeneratedDocOnFly.pdf"}
       
       
        
        
    ];

    const resourceList = $("#resource-list");

    $.each(resources, function(index, resource) {
        const listItem = $("<li>").append(
            $("<a>").text(resource.title1),
            $("<a>").attr("href",resource.link1).text(resource.title2),
            $("<a>").attr("href", resource.link2).text(resource.title3),
            $("<a>").attr("href", resource.link2).text(resource.title4),
            $("<button>").addClass("download-btn").text("Download Pdf")
           
        );

        listItem.find(".download-btn").on("click", function(event) {
            event.preventDefault();
            downloadResource(resource.link);
        });

        resourceList.append(listItem);
    });

    function downloadResource(url) {
        const link = document.createElement("a");
        link.href = url;
        link.target = "_blank"; // Open in a new tab/window
        link.download = url.split("/").pop(); // Extract the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


$("#web").click(function(){

     $("#web-development").slideToggle(200);
     $(".web-development").css({
        "display":"flex"
     });
});