class Notification {
    send() {
        throw new Error("Send method must be implemented");
    }
}

class EmailNotification extends Notification {
    send() {
        console.log("Email notification sent");
    }
}

class SMSNotification extends Notification {
    send() {
        console.log("SMS notification sent");
    }
}

class PushNotification extends Notification {
    send() {
        console.log("Push notification sent");
    }
}

let email = new EmailNotification();
let sms = new SMSNotification();
let push = new PushNotification();

email.send();
sms.send();
push.send();