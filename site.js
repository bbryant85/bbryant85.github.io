
  /* Grab all of the links in the navigation */
const navigation = document.querySelectorAll("#navbar a");

/* Attach event listeners to each of these links */
for (let i=0; i < navigation.length; i++) {
  let link = navigation[i];
  link.addEventListener("click", function(event){
    let href = event.target.href;
    let id = href.replace(location.origin + location.pathname, "");
    
     /* Un-highlight any previously selected headers */
    let highlighted = document.querySelectorAll('.highlight');
    for (let x=0; x < highlighted.length; x++) {
      highlighted[x].className = "";
    }
    
    /* Highlight the selected header */
    
    
    document.querySelector(id).className = "highlight";    
  });
}