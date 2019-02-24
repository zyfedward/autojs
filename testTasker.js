var date = new Date();
var today = date.toDateString();

app.sendBroadcast({
    action: "net.dinglisch.android.tasker.ActionCodes.RUN_SCRIPT",
    extras: {
        name: "蚂蚁森林",
        time: today + " 12:52:00"
        }
    });
