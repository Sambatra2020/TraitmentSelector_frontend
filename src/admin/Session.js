
var Session = (function() {
    var status = false;
  
    var getStatus = function() {
      return status;    // Or pull this from cookie/localStorage
    };
  
    var setStatus = function(newstatus) {
        status = newstatus;     
      // Also set this in cookie/localStorage
    };
  
    return {
        getStatus: getStatus,
        setStatus: setStatus
    }
  
  })();
  
  export default Session;