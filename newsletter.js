// Subscriber class
class Subscriber{
    constructor(name,emailAddress,age){
      this.name=name;
      this.emailAddress=emailAddress;
      this.age=age
    }
}
// Message class
class Message{
  constructor(content, minimumAge=13){
    this.content=content;
    this.minimumAge=minimumAge;
  }
}

// Send email function
const sendEmail=(emailAddress,messageContent)=>{
 console.log(messageContent);
}

// Newsletter system class
class NewsletterSytem{
  
    constructor(sendEmail){
      this.sendEmail=sendEmail
      this.subscribers=new Set()
    }
  subscribe(subscriber){
      if(this.subscribers.has(subscriber)){
        return;
      }
      this.subscribers.add(subscriber);
  }

  unsubscribe(subscriber){
    this.subscribers.delete(subscriber);
  }
    sendNewsletter(message){
      if(this.subscribers.size==0){
        return;
      }

      for(let sub of this.subscribers){
        if(sub.age>=13){
          let personalizemessage=`Hello ${sub.name} ${message.content}`
          sendEmail(sub.emailAddress, personalizemessage);
        }
      }
    }
}

const john=new Subscriber("John","john@example.com", 10);
const kerry=new Subscriber("Kerry","kerry@gmail.com",22);
const naj=new Subscriber("Naj","naj@yahoo.com",20)
const dennis=new Subscriber("Dennis","dennis@gmail.com",28)
const luke=new Subscriber("Luke","luke@example.com",16)
const leia=new Subscriber("Leia", "leia@example.com",16)
const eric=new Subscriber("eric","erci@example.com",12)

let newslettersystem=new NewsletterSytem(sendEmail)
newslettersystem.subscribe(john)
newslettersystem.subscribe(kerry)
newslettersystem.subscribe(naj)
newslettersystem.subscribe(dennis)
newslettersystem.subscribe(luke)
newslettersystem.subscribe(leia)
newslettersystem.subscribe(eric)

const invitation=new Message("Come and join our conference")
const loanAd=new Message("We have the best loan",21)

newslettersystem.sendNewsletter(invitation)
console.log("********************************new message***********************************");
newslettersystem.sendNewsletter(loanAd)

// class Demo{
//   constructor(){
//     this.message="Hello programmer"
//     this.farmers=new Set()
//   }
// }

// let mes=new Demo()
// mes.farmers.add(kerry)
// console.log(mes.farmers)


