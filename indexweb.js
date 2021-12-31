let selectedFile;
console.log(window.XLSX);
document.getElementById('input').addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
})

let data=[{
    "name":"jayanth",
    "data":"scd",
    "abc":"sdef"
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

              const setdate = rowObject.map((item => {
                return item.SetDate;
              }))



              console.log(refnum);      
              
              document.getElementById("refNum").innerHTML = refnum;
              document.getElementById("refNum1").innerHTML = refnum;
              document.getElementById("date").innerHTML = date;
              document.getElementById("cstAdr1").innerHTML = cstAdrOne;
              document.getElementById("cstAdr1_1").innerHTML = cstAdrOne;
              document.getElementById("cstAdr2").innerHTML = cstAdrTwo;
              document.getElementById("cstAdr1_2").innerHTML = cstAdrTwo;
           
 
              document.getElementById("cstName").innerHTML = cstname;
              document.getElementById("cstName1").innerHTML = cstname;
              document.getElementById("supName").innerHTML = supname;
              document.getElementById("supName1").innerHTML = supname;

              document.getElementById("vhMade").innerHTML = vhMade;
              document.getElementById("vhMade2").innerHTML = vhMade;


              document.getElementById("vhNum").innerHTML = vheNum;
              document.getElementById("vhNum2").innerHTML = vheNum;

              document.getElementById("vhMode").innerHTML = vheMode;
              
              document.getElementById("chnum").innerHTML = chasNum;
              document.getElementById("chnum1").innerHTML = chasNum;

              document.getElementById("engnum").innerHTML = engNum;
              document.getElementById("engnum1").innerHTML = engNum;

              document.getElementById("yom").innerHTML = yom;
              document.getElementById("yom1").innerHTML = yom;

              document.getElementById("rsum").innerHTML = rsum;
              document.getElementById("stdate").innerHTML = setdate;

              document.getElementById("vhNum1").innerHTML = vheNum1;
              document.getElementById("vhMade1").innerHTML = vhMade1;
              document.getElementById("vhMode1").innerHTML = vheMode1;

              document.getElementById("stdate1").innerHTML = setdate;
              document.getElementById("cstAdr1_3").innerHTML = cstAdrTwo;
           
             
            

              
         });
        }
    } 
});


function webtopdf(){
    // const elem = document.getElementById('invoice');
    // html2pdf().from(elem).save();

    var element = document.getElementById('tab-content1');
    var opt = {
    margin:       1,
    filename:     'myfile.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // New Promise-based usage:
    html2pdf().set(opt).from(element).save();

    // Old monolithic-style usage:
    //html2pdf(element, opt);
}
