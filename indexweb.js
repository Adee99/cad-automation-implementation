// fetch data from Excel
let selectedFile;
console.log(window.XLSX);
document.getElementById('input').addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
})

window.onload = setInterval(clock,1000);
function clock()
{
    var d = new Date();
    var date = d.getDate();
    var year = d.getFullYear();
    var month = d.getMonth();
    var monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
    month = monthArr[month];
    document.getElementById("date2").innerHTML=date+" "+month+", "+year;
    document.getElementById("date3").innerHTML=date+" "+month+", "+year;
    document.getElementById("date4").innerHTML=date+" "+month+", "+year;
    document.getElementById("date5").innerHTML=date+" "+month+", "+year;
}


let data=[{
    "name":"abc",
    "data":"scd",
    "anc":"mrvl"
}]

document.getElementById('button').addEventListener("click", () => {
    XLSX.utils.json_to_sheet(data, 'out.xlsx');
    if(selectedFile){
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event)=>{
         let data = event.target.result;
         let workbook = XLSX.read(data,{type:"binary"});
         console.log(workbook);
         workbook.SheetNames.forEach(sheet => {
            rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
           
              //console.log(rowObject);

              //var refnum = data.rowObject.RefNo;

              //console.log(refnum);
              //console.log(data);
              //document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4)
             
              const refnum = rowObject.map((item) => {
                  return item.RefNo;
              })

              const date = rowObject.map((item) => {
                  return item.Date;
              })

              const cstAdrOne = rowObject.map((item) => {
                  return item.CstAddressOne;
              })

              const cstAdrTwo = rowObject.map((item) => {
                return item.CstAddressTwo;
              })

              const supname = rowObject.map((item) => {
                return item.SupName;
              })

              const vhMade = rowObject.map((item => {
                  return item.VehicleMade;
              }))

              const vhMade1 = rowObject.map((item => {
                return item.VehicleMade;
              }))

              const vheNum = rowObject.map((item => {
                return item.VehicleNum;
              }))

              const vheNum1 = rowObject.map((item => {
                return item.VehicleNum;
              }))

              const vheMode = rowObject.map((item => {
                return item.VehicleModel;
              }))

              const vheMode1 = rowObject.map((item => {
                return item.VehicleModel;
              }))


              const cstname = rowObject.map((item => {
                return item.CstName;
              }))

              const chasNum = rowObject.map((item => {
                return item.ChasNo;
              }))

              const engNum = rowObject.map((item => {
                return item.EngNo;
              }))

              const yom = rowObject.map((item => {
                return item.YOM;
              }))

              const rsum = rowObject.map((item => {
                return item.RSUM;
              }))

              const dmsum = rowObject.map((item => {
                return item.DmSum;
              }))

              const setdate = rowObject.map((item => {
                return item.SetDate;
              }))


              //console.log(refnum);      
              
              document.getElementById("refNum").innerHTML = refnum;
              document.getElementById("refNum1").innerHTML = refnum;
              document.getElementById("refNum3").innerHTML = refnum;
           
              document.getElementById("date").innerHTML = date;
              document.getElementById("cstAdr1").innerHTML = cstAdrOne;
              document.getElementById("cstAdr1_1").innerHTML = cstAdrOne;
              document.getElementById("cstAdr1_4").innerHTML = cstAdrOne;
              document.getElementById("cstAdr1_5").innerHTML = cstAdrOne;
              document.getElementById("cstAdr1_6").innerHTML = cstAdrOne;
              document.getElementById("cstAdr1_7").innerHTML = cstAdrOne;
              document.getElementById("cstAdr1_8").innerHTML = cstAdrOne;
              document.getElementById("cstAdr2").innerHTML = cstAdrTwo;
              document.getElementById("cstAdr1_2").innerHTML = cstAdrTwo;
              document.getElementById("cstAdr1_41").innerHTML = cstAdrTwo; 
              document.getElementById("cstAdr1_51").innerHTML = cstAdrTwo; 
              document.getElementById("cstAdr1_61").innerHTML = cstAdrTwo;
              document.getElementById("cstAdr1_71").innerHTML = cstAdrTwo;
              document.getElementById("cstAdr1_81").innerHTML = cstAdrTwo;
              
             
              document.getElementById("refNum2").innerHTML = refnum;          

              document.getElementById("cstName").innerHTML = cstname;
              document.getElementById("cstName1").innerHTML = cstname;
              document.getElementById("cstName2").innerHTML = cstname;
              document.getElementById("cstName3").innerHTML = cstname;
              document.getElementById("cstName4").innerHTML = cstname;
              document.getElementById("cstName5").innerHTML = cstname;
              document.getElementById("cstName6").innerHTML = cstname;
              document.getElementById("cstName7").innerHTML = cstname;
              document.getElementById("cstName8").innerHTML = cstname;
              document.getElementById("cstName9").innerHTML = cstname;
              
              
              document.getElementById("supName").innerHTML = supname;
              document.getElementById("supName1").innerHTML = supname;
              document.getElementById("supName2").innerHTML = supname;
              document.getElementById("supName3").innerHTML = supname;

              document.getElementById("vhMade").innerHTML = vhMade;
              document.getElementById("vhMade1").innerHTML = vhMade1;
              document.getElementById("vhMade2").innerHTML = vhMade;
              document.getElementById("vhMade3").innerHTML = vhMade;
              document.getElementById("vhMade4").innerHTML = vhMade;
              document.getElementById("vhMade5").innerHTML = vhMade;

              document.getElementById("vhNum").innerHTML = vheNum;
              document.getElementById("vhNum2").innerHTML = vheNum;
              document.getElementById("vhNum3").innerHTML = vheNum;
              document.getElementById("vhNum4").innerHTML = vheNum;
              document.getElementById("vhNum5").innerHTML = vheNum;
              document.getElementById("vhNum6").innerHTML = vheNum;

              document.getElementById("vhMode").innerHTML = vheMode;
              
              document.getElementById("chnum").innerHTML = chasNum;
              document.getElementById("chnum1").innerHTML = chasNum;
              document.getElementById("chnum3").innerHTML = chasNum;
              document.getElementById("chnum4").innerHTML = chasNum;
              document.getElementById("chnum5").innerHTML = chasNum;
              document.getElementById("chnum6").innerHTML = chasNum;

              document.getElementById("engnum").innerHTML = engNum;
              document.getElementById("engnum1").innerHTML = engNum;
              document.getElementById("engnum3").innerHTML = engNum;
              document.getElementById("engnum4").innerHTML = engNum;
              document.getElementById("engnum5").innerHTML = engNum;
              document.getElementById("engnum6").innerHTML = engNum;

              document.getElementById("yom").innerHTML = yom;
              document.getElementById("yom1").innerHTML = yom;
              document.getElementById("yom3").innerHTML = yom;
              document.getElementById("yom4").innerHTML = yom;
              document.getElementById("yom5").innerHTML = yom;
              document.getElementById("yom6").innerHTML = yom;

              document.getElementById("rsum").innerHTML = rsum;
              document.getElementById("rsum1").innerHTML = rsum;
              document.getElementById("rsum2").innerHTML = "LKR "+rsum;
              document.getElementById("rsum3").innerHTML = "LKR "+rsum;
              document.getElementById("rsum4").innerHTML = rsum;

              document.getElementById("stdate").innerHTML = setdate;

              document.getElementById("vhNum1").innerHTML = vheNum1;
          
              document.getElementById("vhMode1").innerHTML = vheMode1;
              document.getElementById("vhMode5").innerHTML = vheMode1;
              document.getElementById("vhMode6").innerHTML = vheMode1;
              document.getElementById("vhMode7").innerHTML = vheMode1;


              document.getElementById("stdate1").innerHTML = setdate;
              document.getElementById("cstAdr1_3").innerHTML = cstAdrTwo;

              document.getElementById("dmsum").innerHTML = dmsum;  


              //dateTime
              //datetime
              n =  new Date();
              y = n.getFullYear();
              m = n.getMonth() + 1;
              d = n.getDate();
              document.getElementById("date").innerHTML = m + "/" + d + "/" + y;


         });
        }
    } 
});


// function webtopdf(){
//     // const elem = document.getElementById('invoice');
//     // html2pdf().from(elem).save();

//     var element = document.getElementById('invoice8');
//     var opt = {
//     margin:       1,
//     filename:     'Delivery_Order_Report.pdf',
//     image:        { type: 'jpeg', quality: 0.98 },
//     html2canvas:  { scale: 2 },
//     jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
//     };

//     // New Promise-based usage:
//     html2pdf().set(opt).from(element).save();

//     // Old monolithic-style usage:
//     //html2pdf(element, opt);
// }

// Delivery Order Status
function changeTextDevOrder(){
  document.getElementById("changeStat").innerHTML = document.getElementById("stat").innerHTML+ '<span class="nullwrap" style="color: green;"><i class="fas fa-check-circle"></i></span>';
}

function completeOfrLtr(){
  document.getElementById("changeStat1").innerHTML = document.getElementById("stat").innerHTML+ '<span class="nullwrap" style="color: green;"><i class="fas fa-check-circle"></i></span>';
}

function completeTrmSht(){
  document.getElementById("changeStat2").innerHTML = document.getElementById("stat").innerHTML+ '<span class="nullwrap" style="color: green;"><i class="fas fa-check-circle"></i></span>';
}

function completeAppDm(){
  document.getElementById("changeStat3").innerHTML = document.getElementById("stat").innerHTML+ '<span class="nullwrap" style="color: green;"><i class="fas fa-check-circle"></i></span>';
}

function paySchd(){
  document.getElementById("changeStat4").innerHTML = document.getElementById("stat").innerHTML+ '<span class="nullwrap" style="color: green;"><i class="fas fa-check-circle"></i></span>';
}

function triggerAllEvents(){
  changeTextDevOrder();
  completeOfrLtr();
  completeTrmSht();
  completeAppDm();
  paySchd();

}

// pdf download function
window.onload = function(){

//   document.getElementById("emailfile").addEventListener("click", () => {
//     const invoice = this.document.getElementById("invoice");
    
//     var opt = {
//       margin: 1,
//       filename: 'Delivery_Order_Report.pdf',
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      
//   };
//   window.location.href = "mailto:user@example.com? attach = Delivery_Order_Report.pdf";
//   html2pdf().from(invoice).set(opt).save();
// });

  document.getElementById("downloadfile").addEventListener("click", () => {
      const invoice = this.document.getElementById("invoice");
      const invoice2 = this.document.getElementById("test");
      const invoice3 = this.document.getElementById("test2");
      const invoice4 = this.document.getElementById("test3");
      
      var opt1 = {
        margin: 1,
        filename: 'Delivery_Order_Report.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 4 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        
    };

      var opt2 = {
        margin: 0.6,
        top:0.6,
        filename: 'Offer_Letter.pdf',
        //path: 'C:\Users\Acer\Documents\abc',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2},
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

      var opt3 = {
        margin: 0.6,
        filename: 'Facility_Term_Sheet.pdf',
        //path: 'C:\Users\Acer\Documents\abc',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

      var opt4 = {
        margin: 0.5,
        filename: 'Sharia_Documents.pdf',
        //path: 'C:\Users\Acer\Documents\abc',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };


    //window.location.href = "mailto:user@example.com?subject=Subject&body=message%20goes%20here";
    html2pdf().from(invoice).set(opt1).save();
    html2pdf().from(invoice2).set(opt2).toPdf().get('pdf').then(function(pdf) {
      var totalPages = pdf.internal.getNumberOfPages();
      for (i = 1; i <= totalPages; i++) {
          pdf.setPage(i);
          pdf.setFontSize(10);
          pdf.setTextColor(100);
          pdf.text('Page ' + i + ' of ' + totalPages, (pdf.internal.pageSize.getWidth() / 1.2), (pdf.internal.pageSize.getHeight() - 0.4));
      }
  }).save();
    html2pdf().from(invoice3).set(opt3).save();
    html2pdf().from(invoice4).set(opt4).toPdf().get('pdf').then(function(pdf){
      var totalPages = pdf.internal.getNumberOfPages();
      for (i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        pdf.setFontSize(10);
        pdf.setTextColor(100);
        pdf.text('Page ' + i + ' of ' + totalPages, (pdf.internal.pageSize.getWidth() / 1.2), (pdf.internal.pageSize.getHeight() - 0.4));
    }
    }).save();






var zip = new JSZip();
var count = 0;
var zipFilename = "alldocx.zip";
var urls = [
  // 'html2pdf().from(invoice).set(opt1).save()',
  "./data/Delivery_Order_Report.pdf",
  "./data/Delivery_Order_Report2.pdf",
  "./data/Delivery_Order_Report3.pdf"
];



urls.forEach(function(url){
  var filename = "filename.pdf";
  // loading a file and add it in a zip file
  JSZipUtils.getBinaryContent(url, function (err, data) {
     if(err) {
        throw err; // or handle the error
     }
     zip.file(filename, data, {binary:true});
     count++;
     if (count == urls.length) {
       zip.generateAsync({type:'blob'}).then(function(content) {
          saveAs(content, zipFilename);
       });
    }
  });
});

  });

//   document.getElementById("ofrltrpdf").addEventListener("click", () => {
//     const invoice2 = this.document.getElementById("test");
    
//     var opt = {
//       margin: 1,
//       filename: 'Delivery_Order_Report2.pdf',
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//   };
//   html2pdf().from(invoice2).set(opt).save();
// })

}

// function TriggerOutlook()
// {        
//   Email.send({
//     Host: "mailto:user@example.com",
//     //window: "mailto:user@example.com?attachment=C:\Users\Acer\Documents\abc\Delivery_Order_Report.pdf",
//     Username: "mailto:user@example.com",
//     Password: "Enter your password",
//     To: 'receiver@email_address.com',
//     From: "sender@email_address.com",
//     Subject: "Sending Email using javascript",
//     Body: "Well that was easy!!",
//     Attachments: [
//       {
//         name: "File_Name_with_Extension",
//         path: "Full Path of the file"
//       }]
//   })
//     // .then(function (message) {
//     //   alert("Mail has been sent successfully")
//     // });

// }   


// function sendEmail() {
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "sender@email_address.com",
//     Password: "Enter your password",
//     To: 'receiver@email_address.com',
//     From: "sender@email_address.com",
//     Subject: "Sending Email using javascript",
//     Body: escape(window.document.title + String.fromCharCode(13)+ window.location.href),
//     Attachments: [
//       {
//         name: "Delivery_Order_Report.pdf",
//         path: "C:\Users\Acer\Documents\abc"
//       }]
//   })
//     .then(function (message) {
//       window.location.href = "mailto:?body="+Body+"&subject="+Subject +"&attachment="+Attachments; 
//       alert("Mail has been sent successfully")
//     });    
// }

//function to show user data edit table
$(function() {
  $(".btn-success").on("click",function(e) {
    e.preventDefault();
    $(".tabledetailedit").hide();
    $("#"+this.id+"div").show();
  });
});

//function to hide user data edit table
$(function() {
  $(".btn-info").on("click",function(e) {
    e.preventDefault();
    $(".tabledetailedit").hide();
    $("#"+this.id+"div").hide();
  });
});

$(function() {
  $(".button-65").on("click",function(e) {
    e.preventDefault();
    $(".displayemail").hide();
    $("#"+this.id+"div").show();
  });
});

// email documents 
var file;
var dataUri;

function uploadFileToServer()
{
    
   file = event.target.files[0];
   var reader = new FileReader();
   reader.readAsBinaryString(file);
   reader.onload = function () {
   dataUri = "data:" + file.type + ";base64," + btoa(reader.result);
   };
   reader.onerror = function() {
       console.log('Something went wrong');
   };
} 

function sendEmail() {
  let fields = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value
  };
  
  let body = '<br><b>Name:</b> ' + fields.name + '<br>' +
  '<b>E-mail:</b> ' + fields.email + '<br>' +
  '<b>Message:</b> ' + fields.message + '</p>';
  
  Email.send({
    SecureToken : "306dd484-c271-4c41-ac7f-fe4b5c37f741",
    To : fields.email,
    From : "testalphamails882@gmail.com",
    Subject : "Comaplaint",
    Body : body,
    Attachments: [
      {
      name: file.name,
      data: dataUri
      }
    ]
  }).then(function (message) {
    alert("Mail has been sent successfully")
    });
  };
  // $(function () {
  //   $('.SendEmail').click(function (event) {
  //     var email = 'sample@gmail.com';
  //     var subject = 'Test';
  //     var emailBody = 'Hi Sample,';
  //     //var attach = 'C:\\\Users\Acer\Documents\abc\Delivery_Order_Report.pdf';
  //     var attachments =  [{
  //       name: "Delivery_Order_Report.pdf",
  //       path: "C:\Users\Acer\Documents\abc"
  //       }]
  //     document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody+
  //         "?attach="+attachments.name;
  //   });
  // });

function downloadZip(){
  // var zip = new JSZip();
  // zip.file("Hello.txt", "hello word\n");

  // zip.generateAsync({type:"blob"})
  //   .then(function(content) {
  //     saveAs(content, "archieve.zip");
  //   });

var zip = new JSZip();
var count = 0;
var zipFilename = "zipFilename.zip";
var urls = [
  html2pdf().from(invoice).set(opt1).save(),
];

urls.forEach(function(url){
  var filename = "filename.pdf";
  // loading a file and add it in a zip file
  JSZipUtils.getBinaryContent(url, function (err, data) {
     if(err) {
        throw err; // or handle the error
     }
     zip.file(filename, data, {binary:true});
     count++;
     if (count == urls.length) {
       zip.generateAsync({type:'blob'}).then(function(content) {
          saveAs(content, zipFilename);
       });
    }
  });
});

}



// $(function download() {
//   var doc = new jsPDF();

//   doc.setFontSize(40);
//   doc.text(35, 25, "Octonyan loves jsPDF");

// var zip = new JSZip();
// zip.file("Hello.pdf", doc.output());
// zip.generateAsync({ type: "blob" })
// .then(function (content) {
//   saveAs(content, "example.zip");
// });
// })