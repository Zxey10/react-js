export const formatDate = (date) => {
    const today = new Date(date);
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const today1 = dd + '-' + mm + '-' + yyyy;

    return today1;
}

export const formatDateMonth = (date) => {
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    let d = new Date(date)
    return {
        day: d.getDay(),
        month: monthNames[d.getMonth()],
        year: d.getFullYear()
    }
    //"2022-04-30"
}