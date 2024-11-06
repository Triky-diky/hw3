  /*
    Author: Devin McGough
    Date created: 9/16/2024
    Date last updated: 9/17/2024
    Description: Homework 2 - javascript
*/

/*this code is for the date*/
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

/*this code is for the range slider*/
let slider = document.getElementById("range")
    let output = document.getElementById("range-slider")
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value;};

// dob validation
function valDob()
{
  dob=document.getElementById("dob");
  let date = new Date(dob.value);
  let maxDate = new Date().setFullYear(new Date()-150);

  if (date > new Date())
  {
    document.getElementById("dob-error").innerHTML = "Cannot be future date."
    dob.value="";
    return false;
  } 

  else if(date < new Date(maxDate)) 
  {
    document.getElementById("dob-error").innerHTML = "Cannot be more than 150 years ago."
    dob.value="";
    return false;
  } 

  else
  {
    document.getElementById("dob-error").innerHTML = "";
    return true
  }

}    

// ssn validation
function valSsn() 
{
  const ssn = document.getElementById("ssn").value;

  // regex for ssn pattern
  const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

  if (!ssnR.test(ssn))
  {
    document.getElementById("ssn-error").innerHTML = "Enter valid social security number";
    return false;

  }

  else
  {
    document.getElementById("ssn-error").innerHTML = "";
    return true;
  }
}

function valAddress1()
{
  var address1 = document.getElementById("address1").value;
  console.log(address1);
  console.log(address1.length);

  if (address1.length < 2)
  {
    document.getElementById("address1-error").innerHTML = "Enter address here";
    return false;
  }

  else
  {
    document.getElementById("address1-error").innterHTML = "";
    return true;
  }
}

// zip code validation
function valZip()
{
  const zipInput = document.getElementById("zip")
  let zip = zipInput.value.replace(/[^\d-]/g, "") // removes unwanted characters for zip

  if (!zip) 
  {
    document.getElementById("zip-error").innerHTML = "Enter zip code";
    return false;
  }

  if (zip.length > 5)
  {
    zip = zip.slice(0,5) + "-" + zip.slice(5,9); //formats for 9 digit zip
  }

  if (zip.length < 5)
  {
    document.getElementById("zip-error").innerHTML = "Enter the correct number of digits";
    return false;
  }

  zipInput.value = zip;
  document.getElementById("zip-error").innerHTML = "";
  return true;
}

// email validation
function valEmail()
{
  email = document.getElementById("email").value;
  var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email validation

  if (email =="")
  {
    document.getElementById("email-error").innerHTML = "Enter email here";
    return false;
  }

  else if (!email.match(emailR))
  {
    document.getElementById("email-error").innerHTML = "Enter a valid email address"
    return false;
  }

  else 
  {
    document.getElementById("email-error").innerHTML = "";
    return true;
  }
}

// phone validation
function valPhone()
{
  const phoneInput = document.getElementById("phone");
  const phone = phoneInput.value.replace(/\D/g, ""); //removes non number characters

  if (phone.length == 0)
  {
    document.getElementById("phone-error").innerHTML = "Enter valid phone number";
    return false;
  }

  const formatPhone = phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6,10) //formats phone number to include dashes
  phoneInput.value = formatPhone;
  document.getElementById("phone-error").innerHTML = "";
  return true;
}

// username validation
function valUsername()
{
  username = document.getElementById("username").value;

  //convert input to lowercase
  username = username.toLowerCase();

  //displays username 
  document.getElementById("username").value = username;

  if (username.length == 0)
  {
    document.getElementById("username-error").innerHTML = "Enter a username";
    return false;
  }

  //username doesn't start with number
  if (!isNaN(username.charAt(0)))
  {
    document.getElementById("username-error").innerHTML = "Username must start with a letter";
    return false;
  }

  //regex for username
  let regex = /^[a-zA-Z0-9_]+$/;
  if (!regex.test(username))
  {
    document.getElementById("username-error").innerHTML = "Allowed characters: letters, numbers, underscores";
    return false;
  }

  else if (username.length < 5)
  {
    document.getElementById("username-error").innerHTML = "Username must be at least 5 characters";
    return false;
  }

  else if (username.length > 30)
  {
    document.getElementById("username-error").innerHTML = "Username must be less than 20 characters";
    return false;
  }

  else
  {
    document.getElementById("username-error").innerHTML = "";
    return true;
  }
}

// password validation
function valPassword()
{
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;

  //initializing array
  const errorMessage = [];

  //checks for lowercase letters
  if (!password.match(/[a-z]/))
  {
    errorMessage.push("Enter at least one lowercase letter");
  }

  //checks for uppercase letters
  if (!password.match(/[A-Z]/))
  {
    errorMessage.push("Enter at least one uppercase letter");
  }

  //checks for numbers
  if (!password.match(/[0-9]/))
  {
    errorMessage.push("Enter at least one number");
  }

  //checks for special characters
  if (!password.match(/[!\@#\$%&*\-_\\.+\(\)]/))
  {
    errorMessage.push("Enter at least one special character");
  }

  //checks for same username as password
  if (password == username || password.includes(username))
  {
    errorMessage.push("Password can't contain the username");
  }

  //display error messages
  const errorContainer = document.querySelector(".password-message");
  errorContainer.innerHTML = errorMessage
  .map((message) => `<span>${message}</span><br/>`)
  .join("");
}

//passowrd confirmation validation
function conPassword()
{
  password1 = document.getElementById("password").value;
  password2 = document.getElementById("password2").value;

  if (password1 == password2)
  {
    document.getElementById("password2-error").innerHTML = "Passwords are the same.";
    return true;
  }

  else 
  {
    document.getElementById("password2-error").innerHTML = "Passwords are not the same.";
    return false;
  }
}

//display all of user input
function reviewInput()
{
  var formContent = document.getElementById("signup");
  var formOutput;
  var i;
  formOutput = "<table class='output'><th colspan = '3'>Your Information:</tb>";
  for (i = 0; i < formContent.length; i++)
  {
    if (formContent.elements[i].value != "")
    {
      datatype = formContent.elements[i].type;
      switch (datatype)
      {
        case "checkbox": //for displaying checkboxes
          if (formContent.elements[i].checked)
          {
            formOutput = formOutput + "<tr><td align='right'>" + formContent.elements[i].value + "</td>";
            formOutput = formOutput + "<td class='outputdata'>&#x2713;</td></tr>";
          }
          break;
        case "radio": //for displaying radio buttons
          if (formContent.elements[i].checked)
          {
            formOutput = formOutput + "<tr><td align='right'" + formContent.elements[i].name + "</td>";
            formOutput = "<td class='ouputdata'>" + formOutput + "</td></tr>";
          }
          break;
        case "button":
        case "submit":
        case "reset":
          break;
        default:
          formOutput = formOutput + "<tr><td align='right'>" + formContent.elements[i].name + "</td>";
          formOutput = formOutput + "<td class='outputdata'>" + formContent.elements[i].value + "</td></tr>";   
      }
    }
  }
  if (formOutput.length > 0)
  {
    formOutput = formOutput + "</table>";
    document.getElementById("showInput").innerHTML = formOutput;
  }
}

//remove user input
function removeReview()
{
  document.getElementById("showInput").innerHTML = "";
}

