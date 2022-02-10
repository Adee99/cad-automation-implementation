// fetch data from Excel
let reffnum = 0;
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
    document.getElementById("date6").innerHTML=date+" "+month+", "+year;

  
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
             
              reffnum = rowObject.map((item) => {
                  return item.RefNo;
              })

              const dateoffer= rowObject.map((item) => {
                  return item.Date_Offer_Letter;
              })

              const custAdrOne = rowObject.map((item) => {
                  return item.CstAdressOne;
              })

              const custAdrTwo = rowObject.map((item) => {
                return item.CstAddressTwo;
              })

              const supname = rowObject.map((item) => {
                return item.SuppName;
              })
              const supadrs = rowObject.map((item) => {
                return item.Supp_Address;
              })


              // const vhMade = rowObject.map((item => {
              //     return item.VehicleMade;
              // }))

              // const vhMade1 = rowObject.map((item => {
              //   return item.VehicleMade;
              // }))

              // const vhNum = rowObject.map((item => {
              //   return item.VehicleNum;
              // }))

              // const vhNum1 = rowObject.map((item => {
              //   return item.VehicleNum;
              // }))

              // const vhMode = rowObject.map((item => {
              //   return item.VehicleModel;
              // }))

              // const vhMode1 = rowObject.map((item => {
              //   return item.VehicleModel;
              // }))

              
              const custname = rowObject.map((item => {
                return item.CstName;
              }))
              const custfname = rowObject.map((item => {
                return item.CstFName;
              }))
              const cusnic = rowObject.map((item => {
                return item.C_NIC;
              }))

              const chasNum = rowObject.map((item => {
                return item.ChassNo;
              }))

              const engNum = rowObject.map((item => {
                return item.EngiNo;
              }))

              const yom = rowObject.map((item => {
                return item.YOM;
              }))

              const marketvalue = rowObject.map((item => {
                return item.MarketValue;
              }))

              const dmvalue = rowObject.map((item => {
                return item.Total;
              }))

              const setdate = rowObject.map((item => {
                return item.SetDate;
              }))
              
              const dateapplied = rowObject.map((item => {
                return item.D_Application;
              }))
              const noofunit = rowObject.map((item => {
                return item.No_ofUnits;
              }))
              const make = rowObject.map((item => {
                return item.Make;
              }))
              const vehtype = rowObject.map((item => {
                return item.Vehicle;
              }))
              const regstatus = rowObject.map((item => {
                return item.RegStatus;
              }))
              const netrent = rowObject.map((item => {
                return item.NRPayable;
              }))
              const vat = rowObject.map((item => {
                return item.VAT;
              }))
              const grossrent = rowObject.map((item => {
                return item.GPayable;
              }))
              const stampduty = rowObject.map((item => {
                return item.SDuty;
              }))
              const servicecharge = rowObject.map((item => {
                return item.SCharge;
              }))
              const pgName = rowObject.map((item => {
                return item.Personal_Guarantee_Full_Name;
              }))
              const pgAdrs = rowObject.map((item => {
                return item.Personal_Guarantee_Address;
              }))
              const pgNIC = rowObject.map((item => {
                return item.Personal_Guarantee_NIC;
              }))




              //console.log(refnum);      
              
              document.getElementById("reffNum").innerHTML = reffnum;
              document.getElementById("reffNum1").innerHTML = reffnum;
              document.getElementById("reffNum2").innerHTML = reffnum;
              // document.getElementById("reffNum3").innerHTML = reffnum;
              document.getElementById("reffNum5").innerHTML = reffnum;
              document.getElementById("reffNum6").innerHTML = reffnum;
              document.getElementById("reffNum7").innerHTML = reffnum;
              document.getElementById("reffNum8").innerHTML = reffnum;
              document.getElementById("reffNum9").innerHTML = reffnum;
              document.getElementById("reffNum10").innerHTML = reffnum;
              document.getElementById("reffNum11").innerHTML = reffnum;
              document.getElementById("reffNum12").innerHTML =reffnum;
              document.getElementById("reffNum13").innerHTML =reffnum;
              document.getElementById("reffNum14").innerHTML =reffnum;
              document.getElementById("reffNum15").innerHTML =reffnum;
              document.getElementById("reffNum16").innerHTML =reffnum;
              document.getElementById("reffNum17").innerHTML =reffnum;
              document.getElementById("reffNum18").innerHTML =reffnum;
              document.getElementById("reffNum19").innerHTML =reffnum;
              document.getElementById("reffNum20").innerHTML =reffnum;
           
              // document.getElementById("date").innerHTML = date;
              document.getElementById("custAdr0_1").innerHTML = custAdrOne;
              document.getElementById("custAdr1").innerHTML = custAdrOne;
              document.getElementById("custAdr1_1").innerHTML = custAdrOne;
              document.getElementById("custAdr1_2").innerHTML = custAdrOne;
              document.getElementById("custAdr1_3").innerHTML = custAdrOne;
              document.getElementById("custAdr1_4").innerHTML = custAdrOne;
              document.getElementById("custAdr1_5").innerHTML = custAdrOne;
              document.getElementById("custAdr1_6").innerHTML = custAdrOne;
              document.getElementById("custAdr1_7").innerHTML = custAdrOne;
              document.getElementById("custAdr1_8").innerHTML = custAdrOne;
              document.getElementById("custAdr1_9").innerHTML = custAdrOne;
              document.getElementById("custAdr1_10").innerHTML = custAdrOne;
              document.getElementById("custAdr1_11").innerHTML = custAdrOne;
              document.getElementById("custAdr1_12").innerHTML = custAdrOne;
              document.getElementById("custAdr1_13").innerHTML = custAdrOne;
              document.getElementById("custAdr1_14").innerHTML = custAdrOne;
              document.getElementById("custAdr1_15").innerHTML = custAdrOne;
              document.getElementById("custAdr1_16").innerHTML = custAdrOne;


              //document.getElementById("custAdr2").innerHTML = custAdrTwo;
              // document.getElementById("custAdr1_2").innerHTML = custAdrTwo;
              // document.getElementById("custAdr1_41").innerHTML = custAdrTwo; 
              // document.getElementById("custAdr1_51").innerHTML = custAdrTwo; 
              // document.getElementById("custAdr1_61").innerHTML = custAdrTwo;
              
             
              // document.getElementById("reffNum2").innerHTML = reffnum;          
              document.getElementById("custName0_1").innerHTML = custname;
              document.getElementById("custName").innerHTML = custname;
              document.getElementById("custName1").innerHTML = custname;
              document.getElementById("custName2").innerHTML = custname;
              document.getElementById("custName3").innerHTML = custname;
              document.getElementById("custName4").innerHTML = custname;
              document.getElementById("custName5").innerHTML = custname;
              document.getElementById("custName6").innerHTML = custname;
              document.getElementById("custName7").innerHTML = custname;
              document.getElementById("custName8").innerHTML = custname;
              document.getElementById("custName9").innerHTML = custname;
              document.getElementById("custName10").innerHTML = custname;
              document.getElementById("custName11").innerHTML = custname;
              document.getElementById("custName12").innerHTML = custname;
              document.getElementById("custName13").innerHTML = custname;
              document.getElementById("custName14").innerHTML = custname;
              document.getElementById("custName15").innerHTML = custname;
              document.getElementById("custName16").innerHTML = custname;

              // document.getElementById("custfName").innerHTML = custfname;
              // document.getElementById("custfName1").innerHTML = custfname;
              // document.getElementById("custfName2").innerHTML = custfname;
              // document.getElementById("custfName3").innerHTML = custfname;
              // document.getElementById("custfName4").innerHTML = custfname;
              // document.getElementById("custfName5").innerHTML = custfname;
              // document.getElementById("custfName6").innerHTML = custfname;
              // document.getElementById("custfName7").innerHTML = custfname;
              
              document.getElementById("cusNIC").innerHTML = cusnic;
              document.getElementById("cusNIC2").innerHTML = cusnic;
              document.getElementById("cusNIC3").innerHTML = cusnic;
              document.getElementById("cusNIC4").innerHTML = cusnic;
              document.getElementById("cusNIC5").innerHTML = cusnic;
              document.getElementById("cusNIC6").innerHTML = cusnic;

              document.getElementById("dateoffer").innerHTML = dateoffer;
              document.getElementById("dateoffer2").innerHTML = dateoffer;
              document.getElementById("dateoffer3").innerHTML = dateoffer;

              document.getElementById("dateapplied").innerHTML = dateapplied;
              document.getElementById("dateapplied2").innerHTML = dateapplied;

              document.getElementById("noofunits").innerHTML = noofunit;
              document.getElementById("noofunits2").innerHTML = noofunit;
              
              document.getElementById("make").innerHTML = make;
              document.getElementById("make2").innerHTML = make;

              document.getElementById("supname0_1").innerHTML = supname;
              document.getElementById("supname").innerHTML = supname;
              document.getElementById("supname2").innerHTML = supname;
              document.getElementById("supname3").innerHTML = supname;

              document.getElementById("supAdrs0_1").innerHTML = supadrs;
              document.getElementById("supAdrs").innerHTML = supadrs;
              document.getElementById("supAdrs2").innerHTML = supadrs;
              document.getElementById("supAdrs3").innerHTML = supadrs;

              document.getElementById("pgName").innerHTML = pgName;
              document.getElementById("pgName2").innerHTML = pgName;

              document.getElementById("pgAdrs").innerHTML = pgAdrs;
              document.getElementById("pgAdrs2").innerHTML = pgAdrs;

              document.getElementById("pgNIC").innerHTML = pgNIC;
              document.getElementById("pgNIC2").innerHTML = pgNIC;

              document.getElementById("vehtype").innerHTML = vehtype;
              document.getElementById("vehtype2").innerHTML = vehtype;
              document.getElementById("vehtype3").innerHTML = vehtype;
              document.getElementById("vehtype4").innerHTML = vehtype;
              document.getElementById("vehtype5").innerHTML = vehtype;
              document.getElementById("vehtype6").innerHTML = vehtype;


              
              
              document.getElementById("chasnum").innerHTML = chasNum;
              document.getElementById("chasnum2").innerHTML = chasNum;
              document.getElementById("chasnum3").innerHTML = chasNum;
              document.getElementById("chasnum4").innerHTML = chasNum;
              document.getElementById("chasnum5").innerHTML = chasNum;

              document.getElementById("enginum").innerHTML = engNum;
              document.getElementById("enginum2").innerHTML = engNum;
              document.getElementById("enginum3").innerHTML = engNum;
              document.getElementById("enginum4").innerHTML = engNum;
              document.getElementById("enginum5").innerHTML = engNum;

              document.getElementById("yofm").innerHTML = yom;
              document.getElementById("yofm2").innerHTML = yom;
              document.getElementById("yofm3").innerHTML = yom;
              document.getElementById("yofm4").innerHTML = yom;
              document.getElementById("yofm5").innerHTML = yom;

              document.getElementById("regstatus").innerHTML = regstatus;
              document.getElementById("regstatus2").innerHTML = regstatus;
              document.getElementById("regstatus3").innerHTML = regstatus;

              document.getElementById("netrent").innerHTML = netrent;

              document.getElementById("grossrent").innerHTML = grossrent;

              document.getElementById("vat").innerHTML = vat;

              document.getElementById("stampduty").innerHTML = stampduty;

              document.getElementById("servicecharge").innerHTML = servicecharge;

              document.getElementById("mvalue").innerHTML = marketvalue;

              document.getElementById("dmvalue").innerHTML = dmvalue;
              document.getElementById("dmvalue2").innerHTML = dmvalue;
              document.getElementById("dmvalue3").innerHTML = dmvalue;

              // document.getElementById("rsum").innerHTML = rsum;
              // document.getElementById("rsum1").innerHTML = rsum;
              // document.getElementById("rsum2").innerHTML = "LKR "+rsum;
              // document.getElementById("rsum3").innerHTML = "LKR "+rsum;
              // document.getElementById("rsum4").innerHTML = rsum;

              document.getElementById("stdate").innerHTML = setdate;

               document.getElementById("vhNum1").innerHTML = vheNum1;
          
              document.getElementById("vhMode1").innerHTML = vheMode1;
              document.getElementById("vhMode5").innerHTML = vheMode1;

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
      const invoice = this.document.getElementById("test1");
      const invoice2 = this.document.getElementById("test");
      const invoice3 = this.document.getElementById("test2");
      const invoice4 = this.document.getElementById("test3");
      const invoice5 = this.document.getElementById("test4");
      const invoice6 = this.document.getElementById("test5");
      
      var opt1 = {
        margin: 1,
        filename: reffnum + '_Official Purchase Order.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        
    };

    var opt2 = {
      margin: 0.6,
      top:0.6,
      filename: reffnum + '_Offer_Letter.pdf',
      //path: 'C:\Users\Acer\Documents\abc',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2},
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

    var opt3 = {
      margin: 0.6,
      filename: reffnum + '_Lease Agreement.pdf',
      //path: 'C:\Users\Acer\Documents\abc',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  var opt4 = {
    margin: 0.6,
    filename: reffnum + '_Gurantte Bond.pdf',
    //path: 'C:\Users\Acer\Documents\abc',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
}; var opt5 = {
  margin: 0.6,
  filename: reffnum + '_Ijara Additional Document.pdf',
  //path: 'C:\Users\Acer\Documents\abc',
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
};


    //window.location.href = "mailto:user@example.com?subject=Subject&body=message%20goes%20here";
    //html2pdf().from(invoice).set(opt1).save();
    // html2pdf().from(invoice2).set(opt2).toPdf().get('pdf').then(function(pdf) {
      // var totalPages = pdf.internal.getNumberOfPages();
      // for (i = 1; i <= totalPages; i++) {
      //     pdf.setPage(i);
      //     pdf.setFontSize(10);
      //     pdf.setTextColor(100);
      //     pdf.text('Page ' + i + ' of ' + totalPages, (pdf.internal.pageSize.getWidth() / 1.2), (pdf.internal.pageSize.getHeight() - 0.4));
      // })}
    html2pdf().from(invoice2).set(opt1).save();
    html2pdf().from(invoice3).set(opt2).save();
    html2pdf().from(invoice4).set(opt3).save();
    html2pdf().from(invoice5).set(opt4).save();
    html2pdf().from(invoice6).set(opt5).save();

// var zip = new JSZip();
// var count = 0;
// var zipFilename = "alldocx.zip";
// var urls = [
//   // 'html2pdf().from(invoice).set(opt1).save()',
//   "./data/Original and other copie",
//   "./dataOriginal and other copie.pdf",
//   "./data/Original and other copie.pdf"
// ];



// urls.forEach(function(url){
//   var filename = "filename.pdf";
//   // loading a file and add it in a zip file
//   JSZipUtils.getBinaryContent(url, function (err, data) {
//      if(err) {
//         throw err; // or handle the error
//      }
//      zip.file(filename, data, {binary:true});
//      count++;
//      if (count == urls.length) {
//        zip.generateAsync({type:'blob'}).then(function(content) {
//           saveAs(content, zipFilename);
//        });
//     }
//   });
// });

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
// var file;
// var dataUri;

// function uploadFileToServer()
// {
    
//    file = event.target.files[0];
//    var reader = new FileReader();
//    reader.readAsBinaryString(file);
//    reader.onload = function () {
//    dataUri = "data:" + file.type + ";base64," + btoa(reader.result);
//    };
//    reader.onerror = function() {
//        console.log('Something went wrong');
//    };
// } 

// function sendEmail() {
//   let fields = {
//     name: document.querySelector("#name").value,
//     email: document.querySelector("#email").value,
//     message: document.querySelector("#message").value
//   };
  
//   let body = '<br><b>Name:</b> ' + fields.name + '<br>' +
//   '<b>E-mail:</b> ' + fields.email + '<br>' +
//   '<b>Message:</b> ' + fields.message + '</p>';
  
//   Email.send({
//     SecureToken : "306dd484-c271-4c41-ac7f-fe4b5c37f741",
//     To : fields.email,
//     From : "testalphamails882@gmail.com",
//     Subject : "Comaplaint",
//     Body : body,
//     Attachments: [
//       {
//       name: file.name,
//       data: dataUri
//       }
//     ]
//   }).then(function (message) {
//     alert("Mail has been sent successfully")
//     });
//   };
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

// function downloadZip(){
//   // var zip = new JSZip();
//   // zip.file("Hello.txt", "hello word\n");

//   // zip.generateAsync({type:"blob"})
//   //   .then(function(content) {
//   //     saveAs(content, "archieve.zip");
//   //   });

// var zip = new JSZip();
// var count = 0;
// var zipFilename = "zipFilename.zip";
// var urls = [
//   html2pdf().from(invoice).set(opt1).save(),
// ];

// urls.forEach(function(url){
//   var filename = "filename.pdf";
//   // loading a file and add it in a zip file
//   JSZipUtils.getBinaryContent(url, function (err, data) {
//      if(err) {
//         throw err; // or handle the error
//      }
//      zip.file(filename, data, {binary:true});
//      count++;
//      if (count == urls.length) {
//        zip.generateAsync({type:'blob'}).then(function(content) {
//           saveAs(content, zipFilename);
//        });
//     }
//   });
// });

// }



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