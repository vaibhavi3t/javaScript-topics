var pubsup = {};

(function(myObj) {
   var topics = {};
   var subUid = -1;
  
    // publisher function
    myObj.publish = function(topic, args) {
      if (!topics[topic]) {
        return false;
      }
      var subscribers = topics[topic];
      var subLength = subscribers ? subscribers.length : 0;
      while (subLength--) {
        subscribers[subLength].func(topic, args);
      }
      return this;
    }
  
    myObj.subsriber = function(topic, func) {
      if (!topics[topic]) {
        topics[topic] = [];
      }
      var token = (++subUid).toString();
      topics[topic].push({
        'token': token,
        'func': func
      });
      
      return token;
    }
})(pubsup);


// Usage of pubsup
var messageLogger = function(topic, data) {
  console.log("Message" + topic + ':' + data);
}

var subscription = pubsup.subsriber('inbox/message', messageLogger);

var publisher = pubsup.publish('inbox/message', ['a', 'b']);
