function starString(num){
    let star = "";
    for(let i = 0; i<num; i++){
        star += "*";
    }
    return star;
}

function drawString(arr){
    const stars = [];
    for(let i =0; i<arr.length; i++){
        if(typeof arr[i] === 'number'){
            stars.push(starString(arr[i]))
        }else if (typeof arr[i] == 'string'){
            let string = "";
            for(let j = 0; j<arr[i].length; j++){
                string += arr[i][0].toLowerCase();
            }
            stars.push(string);
        }
    }
    return stars;
}
let y = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"];


console.log(drawString(y))
