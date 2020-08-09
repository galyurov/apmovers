async function postData(text) {
    const response = await fetch('https://api.telegram.org/bot1192366179:AAEGgX1rrt12A1ZtuE_Gd2s9qadjeEqG3f8/sendMessage', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"chat_id":375532873, "parse_mode":"HTML", "text":text})
    });
    return await response.json();
}
let footerSubmit = document.getElementById('footerButton');
footerSubmit.addEventListener('click', (event)=> {
    event.preventDefault()
    let submitInfo = {
        Name: document.getElementById('footerInputName').value,
        Email: document.getElementById('footerInputEmail').value,
        Phone: document.getElementById('footerInputPhone').value,
        Text: document.getElementById('footerInputText').value,
    };
    let text = `<b><i>CONTACT</i></b>
<b>${submitInfo.Name}</b>,
${submitInfo.Phone},
${submitInfo.Email},
${submitInfo.Text},`
    if(submitInfo.Name && submitInfo.Phone && submitInfo.Email && submitInfo.Text) {
        postData(text)
            .then((data) => {
                if (data.ok) {
                    event.target.innerText = 'Your message send';
                    event.target.classList.add('send')

                }
            })
    }
})
