function emailValidation() {
    //VARS:
    const form = document.getElementById('form');
    let confirmationEmail = document.getElementById('email_confirm');
    let email = document.getElementById("email");
    let tbody = document.getElementsByTagName('tbody')[0];

    //Creating the Node to be added as alert about the emails don't match.
    let redTextElement = document.createElement('p');
    let redText = document.createTextNode("Emails do not match"); 
    redTextElement.setAttribute("id", "red_text"); //Set an id to the element
    redTextElement.appendChild(redText);  //Add the text to the 'p' Element
    redTextElement.style.color = "#d14539"; //Changing the color of the text.

    //EventListener for confirmationEmail input:
    confirmationEmail.addEventListener('keyup', e => {
        if(confirmationEmail.value != email.value){
            confirmationEmail.style.backgroundColor = "rgba(230,169,171,.5)";//Change the background color of the input.
            if(document.getElementById("red_text") == null){  //If the element doesnt exist in the document, then it wiil be added.
                confirmationEmail.parentElement.parentElement.parentElement.insertBefore(redTextElement, confirmationEmail.parentElement.parentElement.nextSibling);
            }
        }else{ //Return the background color to white and remove the redText.
            confirmationEmail.style.backgroundColor = "white"
            tbody.removeChild(redTextElement);
        }
    })

    form.addEventListener('submit', e => {
      e.preventDefault();
      if(form.email.value !== form.email_confirm.value) {
        const element = document.createElement('p')
        const message = document.createTextNode("Email does not match")
        form.appendChild(element);
        element.appendChild(message);
        element.classList.add("alert");
        setTimeout(() => {
          form.removeChild(element)
        }, 3000)
      } else {
        form.submit();
      }
    });
  };
  
  window.onload = emailValidation;