const calculateDifferenceInDate = (date) => {
    const d1 = new Date(date).getTime();
    const d2 = new Date().getTime();
    if (isNaN(d1) || d1 > d2) return "";
    let strResult = "";

    const diffTime = Math.abs(d2 - d1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    if(diffDays === 0) strResult = "Today";
    else if(diffDays === 1) strResult = "Yesterday";
    else if(diffDays <= 7) strResult = `${diffDays} days ago`;
    else if(diffDays <= 30) strResult = `${Math.ceil(diffDays / 7)} weeks ago`;
    else strResult = `${Math.ceil(diffDays / 30)} months ago`;

    return strResult;
}

export {
    calculateDifferenceInDate
}