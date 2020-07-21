let TimeCalc;

let InputTime = [];
let TempTime = [];
let ResultTime = [];

let Midnight = 0, LastOneThird = 0, LastOneSixth = 0;
let m, t, s;

function setup() {
    noCanvas();
    let button;
    button = select("#button");
    assign();

    TimeCalc = new TimeCalculation();

    for (var i = 0; i < 4; i++) {
        InputTime[i] = select("#id" + i);
    }

    InputTime[0].input(() => update(0));
    InputTime[1].input(() => update(1));
    InputTime[2].input(() => update(2));
    InputTime[3].input(() => update(3));

    button.mousePressed(CalculateTime)
}

function assign() {
    m = select("#M");
    t = select("#T");
    s = select("#S");
}


function update(i) {
    TempTime[i] = Number(InputTime[i].value());
}

function display() {
    m.html('Midnight - ' + ResultTime[0] + ':' + ResultTime[1]);
    t.html('LastOneThird - ' + ResultTime[2] + ':' + ResultTime[3]);
    s.html('LastOneSixth - ' + ResultTime[4] + ':' + ResultTime[5]);
}

function CalculateTime() {
    TimeCalc.Calc(TempTime[0], TempTime[1], TempTime[2], TempTime[3]);

    Midnight = TimeCalc.Midnight();
    LastOneThird = TimeCalc.LastOneThird();
    LastOneSixth = TimeCalc.LastOneSixth();

    ResultTime[0] = TimeCalc.HourPart(Midnight);
    ResultTime[1] = TimeCalc.MinutePart(Midnight);

    ResultTime[2] = TimeCalc.HourPart(LastOneThird);
    ResultTime[3] = TimeCalc.MinutePart(LastOneThird);

    ResultTime[4] = TimeCalc.HourPart(LastOneSixth);
    ResultTime[5] = TimeCalc.MinutePart(LastOneSixth);

    display();
}