function checkauthorization(role){
    switch(role){
        case "Employee":
            return "You have the access to Dietory services";
            break;
        case "Enrolled Member":
            return "you have access to Dietory services and 1-1 interaction with dietician";
            break;
        case "Subscriber":
            return "You have partial access tp Dietory services";
            break;
        case "Non-Subscriber":
            return "You need to enroll or atleast subscriber first";
            break;
        default:
            return "Invalid entry";
    }
}

const roles = ["Employee", "Enrolled Member", "Subscriber", "Non-Subscriber", "Invalid Role"];

roles.forEach(role => {
    console.log(`Role: ${role} - ${checkauthorization(role)}`);
});
