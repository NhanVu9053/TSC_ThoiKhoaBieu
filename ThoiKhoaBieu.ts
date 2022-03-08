const [SUN, MON, TUE, WED, THU, FRI, SAT] = [0, 1, 2, 3, 4, 5, 6];
const DAY_STR = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const HOLIDAY_LIST = [
    "2022-04-09",
    "2022-04-10",
    "2022-04-11",
    "2022-04-30",
    "2022-05-01",
    "2022-05-02",
    "2022-05-03",
    "2022-09-01",
    "2022-09-02",
    "2022-09-03",
    "2022-09-04"
];

let lessons_list = [
    "Bài 1. ",
    "Bài 2. ",
    "Bài 3. ",
    "Bài 4. ",
    "Bài 5. ",
    "Bài 6. ",
    "Bài 7. ",
    "Bài 8. ",
    "Bài 9. ",
    "Bài 10.",
    "Bài 11.",
    "Bài 12.",
    "Bài 13.",
    "Bài 14.",
    "Bài 15.",
    "Bài 16.",
    "Bài 17.",
    "Bài 18.",
    "Bài 19.",
    "Bài 20.",
    "Bài 21.",
    "Bài 22.",
    "Bài 23.",
    "Bài 24.",
    "Bài 25.",
    "Bài 26.",
    "Bài 27.",
    "Bài 28.",
    "Bài 29.",
    "Bài 30."
];

var learning_day = [TUE, THU, SAT];
function getDateString(date: Date) {
    return date.toISOString().substring(0, 10);
}

function next_day(date: Date) {
    date.setDate(date.getDate() + 1);
    return date;
}

function is_holiday(date: Date) {
    return !learning_day.includes(date.getDay()) || HOLIDAY_LIST.includes(getDateString(date));
}


function get_learning_day(date: Date) {
    var learningDay = date;
    while (true) {
        if (!is_holiday(learningDay)) {
            return learningDay;
        }
        learningDay = next_day(learningDay);
    }
}


function getSchedule(start_day: string){

    var currentDay = new Date(start_day);
    lessons_list.forEach(lesson => {
        currentDay = get_learning_day(currentDay);      
        console.log(DAY_STR[currentDay.getDay()] + " " +getDateString(currentDay) + " " + lesson);
        currentDay = next_day(currentDay);
    });

}

getSchedule("2022-04-05");