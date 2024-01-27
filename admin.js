const { kafka } = require("./client");

async function init() {
    const admin = kafka.admin();
    console.log("Admin connecting");
    admin.connect();
    console.log("admin connected");

    console.log("Topic creating");
    admin.createTopics({
        topics: [{
            topic: "rider-updates",
            numPartitions: 2
        },
    ],
    });

    console.log("Topic is created");

    await admin.disconnect();
    console.log("Admin Disconnect");
}

init();