

    const resources = [
        // { title:"Topic","" }
        {title:"HTML", link1:"https://www.w3schools.com/",link2:"https://www.w3schools.com/js/js_array_iteration.asp",link:"./ViewGeneratedDocOnFly.pdf"},
        {title:"CSS"},
        {title:"JavaScript"},
        {title:"Node.js"},
        {title:"Express.js"},
        {title:"React.js"},
        {title:"MongoDB"}
        
        
    ];

    const resourceList = $("#resource-list");

    $.each(resources, function(index, resource) {
        const listItem = $("<li>").append(
            $("<span>").text(resource.title),
            $("<a>").attr("href",resource.link1).text("W3School "+resource.title),
            $("<a>").attr("href", resource.link2).text(resource.title),
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