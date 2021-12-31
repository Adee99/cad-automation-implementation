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

              console.log(refnum);      
              
              document.getElementById("data2").innerHTML = refnum;
              
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
