// Function to perform basic natural language understanding
function understand(input) {
    input = input.toLowerCase();
    if (input.includes("weather")) {
        return "I can't provide weather information. Please try asking something else.";
    } else if (input.includes("news")) {
        return "I'm sorry, I don't have access to news updates.";
    } else {
        return "I'm sorry, I didn't understand that.";
    }
}
