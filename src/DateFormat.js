export const DateFormat = (date) => {
    let options = {hour12: false, month: 'long', day: 'numeric', year: 'numeric', hour: "numeric", minute: "numeric", second: "numeric"};
    let today  = new Date();
    
    console.log(today.toLocaleDateString("en-US", options));
    return new Date(date).toLocaleDateString("en-US", options);
}
export default DateFormat;