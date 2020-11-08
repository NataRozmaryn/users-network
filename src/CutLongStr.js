export const CutLongStr = (link) => {
    if (link && link.length > 31) {
        link = link.slice( 0, 30) + "...";
    }
    return link
}
export default CutLongStr;
