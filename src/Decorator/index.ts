/**
 *  Decorator is a structural design pattern that enable to attach new behaviors to existing object by 
 *  wrapping with object that contains the new behaviors 
 */

 interface Notifier{
    send():void
 }

class SimpleNotifier implements Notifier{
    send(){
        console.log(`Message Sent in Simple Way`)
    }
 }

class NotifierDecorator implements Notifier {
    private wrapper: Notifier;

    constructor(source: Notifier){
        this.wrapper = source;
    }

     send(){
        this.wrapper.send();
        console.log(`Message Sent in Decorator`)
     }
 }


 class SMSNotifierDecorator extends NotifierDecorator{
    send(){
        console.log(`Message Sent Via SMS`)
    }
 }

class SlackNotifierDecorator extends NotifierDecorator{
    send(){
        console.log(`Message Sent Via SLACK`)
    }
}
class EmailNotifierDecorator extends NotifierDecorator{
    send(){
        console.log(`Message Sent Via EMAIL`)
    }
}

class NotificationServiceClient {
    public source = new SimpleNotifier();
    public isSlackNotificationEnabled: boolean = false;
    public isEmailNotificationEnabled: boolean = false;
    public isSMSNotificationEnabled: boolean = false;

    notify(){
        if(this.isSlackNotificationEnabled){
            this.source = new SlackNotifierDecorator(this.source);
        }else if (this.isSMSNotificationEnabled){
            this.source = new SMSNotifierDecorator(this.source);
        }else if(this.isEmailNotificationEnabled){
            this.source = new EmailNotifierDecorator(this.source);
        }

        this.source.send();
    }
}

const Logger = new NotificationServiceClient();
Logger.isEmailNotificationEnabled = true;
Logger.notify();
Logger.isSlackNotificationEnabled = true;
Logger.notify();
Logger.isSMSNotificationEnabled = true;
Logger.notify();


