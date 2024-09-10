


//https://www.conestogac.on.ca/fulltime/bachelor-of-computer-science-honours

//<img src={logo} className="App-logo" alt="logo" />


export const openRole = (evt, roleName) =>  {
  //open the default one to show something even if they haven't clicked on anything yet
  
  
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("MyTabs");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

      // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

      // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(roleName).style.display = "block";
  //evt.curre
  
  
  
};

export const defaultTab = () => {
  document.getElementById("defaultOpen").click();
}

