function lowerCaseManual(teksKecil){
  let hurufKecil = "";
  for(let i = 0;i < teksKecil.length;i++) {
    let kodeAngka =teksKecil.charCodeAt(i);
    
    if (kodeAngka >= 65 && kodeAngka <= 90) {
      hurufKecil += String.fromCharCode(kodeAngka + 32);
    } else {
      hurufKecil += teksKecil[i];
    } 
  }
  return hurufKecil;
}

function prosesThenEmail() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((respon) => {
        return respon.json();
    })
    .then((dataArrayEmail) => {
        let dataEmail = [];
        for(let i = 0; i < dataArrayEmail.length;i++) {
            let emailUsers = dataArrayEmail[i].email;
            let hurufEmailKecil = lowerCaseManual(emailUsers);
            dataEmail.push(hurufEmailKecil);
            
        }
    })
}

async function prosesAsyncEmail() {
    try {
        const respon = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await respon.json()
        
        let emailArray = [];
        
        for(let i = 0; i < users.length;i++) {
            
            let emailUsers = users[i].email;
            let lowerEmail = lowerCaseManual(emailUsers);
            emailArray.push(lowerEmail);
        }
      console.log(emailArray);
    }catch (error){
        console.error("Terjadi masalah ketika mengambil data")};
}

prosesThenEmail();
prosesAsyncEmail();

