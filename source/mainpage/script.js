//.value won't work so I had to do it the hard way.
//Sorry for the dumb switch.
function redirectToExercises(x) {
    switch (x) {
        case "1":
            window.location.href = "source/exercisepages/exercises.html?id=aritimetica";
            break;

        case "2":
            window.location.href = "source/exercisepages/exercises.html?id=algebra";
            break;
    
        case "3":
            window.location.href = "source/exercisepages/exercises.html?id=geometriab";
            break;
            
        case "4":
            window.location.href = "source/exercisepages/exercises.html?id=trigb";
            break;  

        case "5":
            window.location.href = "source/exercisepages/exercises.html?id=estatistica";
            break;

        case "6":
            window.location.href = "source/exercisepages/exercises.html?id=geometriaa";
            break;

        case "7":
            window.location.href = "source/exercisepages/exercises.html?id=triga";
            break;

        case "8":
            window.location.href = "source/exercisepages/exercises.html?id=impossivel";
            break;
    }
}