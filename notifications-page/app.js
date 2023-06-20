const markAllAsRead = document.querySelector("header h4");
const notifications = document.querySelectorAll(".notification-container")
markAllAsRead.addEventListener("click", () => {
    notifications.forEach(notification => {
        notification.classList.remove("new")
    });
})