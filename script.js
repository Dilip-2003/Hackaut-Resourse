

const resources = [
    {title1:"HTML",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/html/default.asp",link2:"https://developer.mozilla.org/en-US/docs/Web/HTML",link3:"https://youtu.be/BsDoLVMnmZs",link:"./resources/HTML5NotesForProfessionals.pdf"},
    

    {title1:"CSS",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/css/default.asp",link2:"https://developer.mozilla.org/en-US/docs/Web/CSS",link3:"https://youtu.be/Edsxf_NBFrw",link:"./resources/CSSNotesForProfessionals.pdf"},
    

    {title1:"JavaScript",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/js/default.asp",link2:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",link3:"https://www.youtube.com/watch?v=Lgxgm-T9cgA&list=PL0b6OzIxLPbx-BZTaWu_AF7hsKo_Fvsnf",link:"./resources/JavaScriptNotesForProfessionals (1).pdf"},
    

    {title1:"NodeJs ",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/nodejs/default.asp",link2:"https://nodejs.org/en/docs",link3:"https://www.youtube.com/watch?v=LAUi8pPlcUM&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY",link:"./resources/NodeJSNotesForProfessionals.pdf"},
    


    {title1:"ExpressJs",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction",link2:"https://expressjs.com/",link3:"https://www.youtube.com/watch?v=7H_QH9nipNs&pp=ygUTZXhwcmVzcyBqcyB0dXRvcmlhbA%3D%3D",link:"./resources/NodeJSNotesForProfessionals.pdf"},
    

    {title1:"ReactJs",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/react/default.asp",link2:"https://react.dev/learn",link3:"https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3",link:"./resources/ReactJSNotesForProfessionals.pdf"},
    

    {title1:"AngularJs(No Pdf)",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/angular/default.asp",link2:"https://angular.io/docs",link3:"https://www.youtube.com/watch?v=zKkUN-mJtPQ&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl"},
    

    {title1:"VueJs (No pdf)",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/vue/index.php",link2:"https://vuejs.org/guide/introduction.html",link3:"https://www.youtube.com/watch?v=ccsz9FRy-nk&list=PLC3y8-rFHvwgeQIfSDtEGVvvSEPDkL_1f"},
    

    {title1:"jQuery",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/jquery/default.asp",link2:"https://devdocs.io/jquery/",link3:"https://www.youtube.com/watch?v=QvaFeU0LWnc&list=PL0b6OzIxLPbzSyiC0PFaqeabe1aGhfrbW",link:"./resources/jQueryNotesForProfessionals.pdf"},
    

    {title1:"TypeScript",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/typescript/index.php",link2:"https://www.typescriptlang.org/docs/",link3:"https://www.youtube.com/watch?v=Xciunyug99U&list=PLwGdqUZWnOp0xfHQFmlL52b_6-QZ0mnk_",link:"./resources/TypeScriptNotesForProfessionals.pdf"},
    

    {title1:"MySQL",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/mysql/default.asp",link2:"https://dev.mysql.com/doc/",link3:"https://www.youtube.com/watch?v=iP1wOSsKjW8&list=PLS1QulWo1RIahlYDqHWZb81qsKgEvPiHn",link:"./resources/MySQLNotesForProfessionals.pdf"},
    

    {title1:"BootStrap (No Pdf)",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/bootstrap5/index.php",link2:"https://getbootstrap.com/docs/4.1/getting-started/introduction/",link3:"https://www.youtube.com/watch?v=wkSA9bfCmKU&list=PL0b6OzIxLPbz1cgxiH5KCBsyQij1HsPtG"},
    

    {title1:"Tailwind CSS(No Pdf)",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://tailwindui.com/documentation",link2:"https://tailwindui.com/documentation",link3:"https://www.youtube.com/watch?v=L4_jarMnB0c&list=PLu0W_9lII9ahwFDuExCpPFHAK829Wto2O"},
    

    {title1:"Django(No Pdf)",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/django/index.php",link2:"https://docs.djangoproject.com/en/4.2/",link3:"https://www.youtube.com/watch?v=C1NgOmoOszc&list=PLjVLYmrlmjGcyt3m6rt21nfjhYSWP_Ue_"},
    
    {title1:"PHP(No Pdf)",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/php/default.asp",link2:"https://www.php.net/docs.php",link3:"https://www.youtube.com/watch?v=at19OmH2Bg4&list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR"},
    
    {title1:"Git",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/git/default.asp",link2:"https://git-scm.com/doc",link3:"https://www.youtube.com/watch?v=gwWKnnCMQ5c&pp=ygUOZ2l0IGFuZCBnaXRodWI%3D",link:"./resources/GitNotesForProfessionals.pdf"},
    
    {title1:"AWS Cloud(No Pdf)",title2:"Online Resource1",title3:"Online Resource2", title4:"Video Reference", link1:"https://www.w3schools.com/aws/index.php",link2:"https://docs.aws.amazon.com/",link3:"https://www.youtube.com/watch?v=rKNSc8RrwxA&list=PL6XT0grm_TfgtwtwUit305qS-HhDvb4du"}  

];

const webResourceList = $("#resource-list");

$.each(resources, function(index, resource) {
    const listItem = $("<li>").append(
        $("<a>").text(resource.title1),
        $("<a>").attr("href",resource.link1).text(resource.title2),
        $("<a>").attr("href", resource.link2).text(resource.title3),
        $("<a>").attr("href", resource.link3).text(resource.title4),
        $("<button>").addClass("download-btn").text("Download PDF")
       
    );

    listItem.find(".download-btn").on("click", function(event) {
        event.preventDefault();
        downloadResource(resource.link);
    });

    webResourceList.append(listItem);
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
$("#resource-list a").css({
    "padding":"5px"
});


$("#web").click(function(){
$(".dsa").css(
    "display","none"
);      
 $("#web-development").slideToggle(200);
 $(".web-development").css(
    "display","block");
});



const dsaResources = [
{ title1:"Analysis of Algorithm",title2:"Articles",title3:"GFG Problems",title4:"Leetcode Practices",title5:"Video",link1:"https://www.geeksforgeeks.org/design-and-analysis-of-algorithms/?ref=ghm",link2:"https://www.geeksforgeeks.org/design-and-analysis-of-algorithms/?ref=ghm",link3:"https://www.geeksforgeeks.org/design-and-analysis-of-algorithms/?ref=ghm",link4:"https://www.youtube.com/watch?v=9mjGoOBy8vs&list=PLdo5W4Nhv31ZTn2P9vF02bkb3SC8uiUUn&pp=iAQB" },


{ title1:"Basic Math",title2:"Articles",title3:"GFG Problems",title4:"Leetcode Practices",title5:"Video",link1:"https://www.youtube.com/watch?v=1xNbjMdbjug&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&index=5&t=26s&pp=iAQB",link2:"https://www.youtube.com/watch?v=1xNbjMdbjug&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&index=5&t=26s&pp=iAQB",link3:"https://www.youtube.com/watch?v=1xNbjMdbjug&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&index=5&t=26s&pp=iAQB",link4:"https://www.youtube.com/watch?v=1xNbjMdbjug&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&index=5&t=26s&pp=iAQB" },


{ title1:"Basic Recursion",title2:"Articles",title3:"GFG Problems",title4:"Leetcode Practices",title5:"Video",link1:"https://www.geeksforgeeks.org/introduction-to-recursion-data-structure-and-algorithm-tutorials/?ref=ghm",link2:"https://practice.geeksforgeeks.org/explore?page=1&category[]=Recursion&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=main_header&utm_campaign=practice_header",link3:"https://leetcode.com/tag/recursion/",link4:"https://www.youtube.com/playlist?list=PL_z_8CaSLPWeT1ffjiImo0sYTcnLzo-wY" },


{ title1:"Arrays",title2:"Articles",title3:"GFG Problems",title4:"Leetcode Practices",title5:"Video",link1:"https://www.geeksforgeeks.org/complete-guide-to-arrays-data-structure/?ref=ghm",link2:"https://practice.geeksforgeeks.org/explore?page=1&category[]=Arrays&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=main_header&utm_campaign=practice_header",link3:"https://leetcode.com/tag/array/",link4:"https://www.youtube.com/watch?v=37E9ckMDdTk&list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB" },


{ title1:"Searching",title2:"Articles",title3:"GFG Problems",title4:"Leetcode Practices",title5:"Video",link1:"https://www.geeksforgeeks.org/searching-algorithms/?ref=lbp",link2:"https://practice.geeksforgeeks.org/explore?page=1&category[]=Searching&category[]=Binary%20Search&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=main_header&utm_campaign=practice_header",link3:"https://leetcode.com/tag/binary-search/",link4:"https://www.youtube.com/watch?v=_NT69eLpqks&list=PLgUwDviBIf0pMFMWuuvDNMAkoQFi-h0ZF&pp=iAQB" },


{ title1:"Sorting",title2:"Articles",title3:"GFG Problems",title4:"Leetcode Practices",title5:"Video",link1:"https://www.geeksforgeeks.org/sorting-algorithms/?ref=lbp",link2:"https://practice.geeksforgeeks.org/explore?page=1&category[]=Sorting&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=main_header&utm_campaign=practice_header",link3:"https://leetcode.com/tag/sorting/",link4:"https://www.youtube.com/watch?v=o4bAoo_gFBU&list=PLuZ_bd9XlByzTIP5j1aWXo7smCIxvzd2D" },


{ title1:"Matrix",title2:"Articles",title3:"GFG Problems",title4:"Leetcode Practices",title5:"Video",link1:"https://www.geeksforgeeks.org/introduction-to-matrix-or-grid-data-structure-and-algorithms-tutorial/?ref=ghm",link2:"https://practice.geeksforgeeks.org/explore?page=1&category[]=Matrix&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=main_header&utm_campaign=practice_header",link3:"https://leetcode.com/tag/matrix/",link4:"https://www.youtube.com/watch?v=TfE2c7SXaUo&list=PLzjZaW71kMwRff0CCcrB93srEiQhJoOzg" },


{ title1:"Hashing",title2:"Articles",title3:"GFG Problems",title4:"Leetcode Practices",title5:"Video",link1:"https://www.geeksforgeeks.org/introduction-to-hashing-data-structure-and-algorithm-tutorials/?ref=ghm",link2:"https://practice.geeksforgeeks.org/explore?page=1&category[]=Hash&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=main_header&utm_campaign=practice_header",link3:"https://leetcode.com/tag/hash-function/",link4:"https://www.youtube.com/watch?v=AV36hu5TFRQ&list=PLzjZaW71kMwQ-D3oxCEDHAvYu8VC1XOsS" },


{ title1:"Strings",title2:"Articles",title3:"GFG Problems",title4:"Leetcode Practices",title5:"Video",link1:"https://www.geeksforgeeks.org/complete-guide-to-string-data-structure/?ref=ghm",link2:"https://practice.geeksforgeeks.org/explore?page=1&category[]=Strings&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=main_header&utm_campaign=practice_header",link3:"https://leetcode.com/tag/string/",link4:"https://www.youtube.com/watch?v=kjU04wGSYzw&t=5s&pp=ygUOc3RyaW5ncyBpbiBkc2E%3D" },


{ title1:"Linked List",title2:"Articles",title3:"GFG Problems",title4:"Leetcode Practices",title5:"Video",link1:"https://www.geeksforgeeks.org/introduction-to-linked-list-data-structure-and-algorithm-tutorial/?ref=ghm",link2:"https://practice.geeksforgeeks.org/explore?page=1&category[]=Linked%20List&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=main_header&utm_campaign=practice_header",link3:"https://leetcode.com/tag/linked-list/",link4:"https://www.youtube.com/watch?v=q8gdBn9RPeI&list=PLDzeHZWIZsTr54_TH_NK4ibFojS4mmQA6" },


{ title1:"Stack",title2:"Articles",title3:"GFG Problems",title4:"Leetcode Practices",title5:"Video",link1:"https://www.geeksforgeeks.org/introduction-to-stack-data-structure-and-algorithm-tutorials/?ref=ghm",link2:"https://practice.geeksforgeeks.org/explore?page=1&category[]=Stack&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=main_header&utm_campaign=practice_header",link3:"https://leetcode.com/tag/stack/",link4:"https://www.youtube.com/watch?v=XJvmY6iahqo&pp=ygUUc3RhY2sgdGFrZSB1IGZvcndhcmQ%3D , https://www.youtube.com/watch?v=Fi7UFBkLAWA" },


{ title1:"Queue",title2:"Articles",title3:"GFG Problems",title4:"Leetcode Practices",title5:"Video",link1:"https://www.geeksforgeeks.org/introduction-to-queue-data-structure-and-algorithm-tutorials/?ref=ghm",link2:"https://practice.geeksforgeeks.org/explore?page=1&category[]=Queue&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=main_header&utm_campaign=practice_header",link3:"https://leetcode.com/tag/queue/",link4:"https://www.youtube.com/watch?v=zp6pBNbUB2U&list=PL5JuX5bt9io6NKdJE_TJ8zGQlpPDCF_aV" },


{ title1:"Tree",title2:"Articles",title3:"GFG Problems",title4:"Leetcode Practices",title5:"Video",link1:"https://www.geeksforgeeks.org/introduction-to-tree-data-structure-and-algorithm-tutorials/?ref=ghm",link2:"https://practice.geeksforgeeks.org/explore?page=1&category[]=Tree&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=main_header&utm_campaign=practice_header",link3:"https://leetcode.com/tag/tree/",link4:"https://www.youtube.com/watch?v=YAdLFsTG70w&list=PL5JuX5bt9io6etX8Ig-9WSh7pJ9Tjwi2r" },


{ title1:"Binary Search Tree",title2:"Articles",title3:"GFG Problems",title4:"Leetcode Practices",title5:"Video",link1:"https://www.geeksforgeeks.org/introduction-to-binary-search-tree-data-structure-and-algorithm-tutorials/?ref=ghm",link2:"https://practice.geeksforgeeks.org/explore?page=1&category[]=Binary%20Search%20Tree&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=main_header&utm_campaign=practice_header",link3:"https://leetcode.com/tag/binary-search-tree/",link4:"https://www.youtube.com/watch?v=OYqYEM1bMK8&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk" },


{ title1:"Heap",title2:"Articles",title3:"GFG Problems",title4:"Leetcode Practices",title5:"Video",link1:"https://www.geeksforgeeks.org/introduction-to-heap-data-structure-and-algorithm-tutorials/?ref=ghm",link2:"https://practice.geeksforgeeks.org/explore?page=1&category[]=Heap&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=main_header&utm_campaign=practice_header",link3:"https://practice.geeksforgeeks.org/explore?page=1&category[]=Heap&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=main_header&utm_campaign=practice_header",link4:"https://www.youtube.com/watch?v=hW8PrQrvMNc&list=PL_z_8CaSLPWdtY9W22VjnPxG30CXNZpI9" },


{ title1:"Graph",title2:"Articles",title3:"GFG Problems",title4:"Leetcode Practices",title5:"Video",link1:"https://www.geeksforgeeks.org/introduction-to-graphs-data-structure-and-algorithm-tutorials/?ref=ghm",link2:"https://practice.geeksforgeeks.org/explore?page=1&category[]=Graph&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=main_header&utm_campaign=practice_header",link3:"https://leetcode.com/tag/graph/",link4:"https://www.youtube.com/watch?v=M3_pLsDdeuU&list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn" },


{ title1:"Greedy",title2:"Articles",title3:"GFG Problems",title4:"Leetcode Practices",title5:"Video",link1:"https://www.geeksforgeeks.org/greedy-algorithms/?ref=gcse",link2:"https://practice.geeksforgeeks.org/explore?page=1&category[]=Greedy&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=main_header&utm_campaign=practice_header",link3:"https://leetcode.com/tag/greedy/",link4:"https://www.youtube.com/watch?v=HzeK7g8cD0Y&list=PLqM7alHXFySESatj68JKWHRVhoJ1BxtLW" },


{ title1:"Backtracking",title2:"Articles",title3:"GFG Problems",title4:"Leetcode Practices",title5:"Video",link1:"https://www.geeksforgeeks.org/introduction-to-backtracking-data-structure-and-algorithm-tutorials/?ref=ghm",link2:"https://practice.geeksforgeeks.org/explore?page=1&category[]=Backtracking&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=main_header&utm_campaign=practice_header",link3:"https://leetcode.com/tag/backtracking/",link4:"https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9" },


{ title1:"Dynamic Programming",title2:"Articles",title3:"GFG Problems",title4:"Leetcode Practices",title5:"Video",link1:"https://www.geeksforgeeks.org/introduction-to-dynamic-programming-data-structures-and-algorithm-tutorials/?ref=ghm",link2:"https://practice.geeksforgeeks.org/explore?page=1&category[]=Dynamic%20Programming&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=main_header&utm_campaign=practice_header",link3:"https://leetcode.com/tag/dynamic-programming/",link4:"https://www.youtube.com/watch?v=nqowUJzG-iM&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&pp=iAQB" },


{ title1:"Full Playlist",title2:"Playlist 1 C++",title3:"Playlist 2 C++",title4:"Playlist 1 Java",title5:"Playlist 2 Java",link1:"https://www.youtube.com/watch?v=WQoB2z67hvY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA",link2:"https://www.youtube.com/watch?v=EAR7De6Goz4&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz",link3:"https://www.youtube.com/watch?v=6iCHf7OZn6c&list=PL6Zs6LgrJj3tDXv8a_elC6eT_4R5gfX4d",link4:"https://www.youtube.com/watch?v=RJ733wzbNoA&list=PLxgZQoSe9cg00xyG5gzb5BMkOClkch7Gr" }

];


const dsaResourceList = $("#dsaResource-list");

$.each(dsaResources, function(index, dsaResource) {
    const dsaListItem = $("<li>").append(
        $("<a>").text(dsaResource.title1),
        $("<a>").attr("href",dsaResource.link1).text(dsaResource.title2),
        $("<a>").attr("href", dsaResource.link2).text(dsaResource.title3),
        $("<a>").attr("href", dsaResource.link3).text(dsaResource.title4),
        $("<a>").attr("href", dsaResource.link4).text(dsaResource.title5)
                   
    );

    dsaResourceList.append(dsaListItem);
});

$("#dsaResource-list a").css({
"padding":"5px",
"text-align":"center"
});

$("#dsa").click(function(){
 $(".web-development").css("display","none");
 $("#Data-structures").slideToggle(200);
 $(".dsa").css(
    "display","block");
});