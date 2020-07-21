class TimeCalculation {
    constructor() {
        this.TimeF = 0;
        this.TimeM = 0;
        this.difference = 0;
    }

    Calc(FajrH, FajrM, MaghribH, MaghribM) {
        this.TimeF = FajrH + (FajrM / 60);
        this.TimeM = MaghribH + (MaghribM / 60);
        this.difference = 12 - (this.TimeM - this.TimeF);
    }

    Midnight() {
        return (this.TimeM + (this.difference / 2));
    }

    LastOneThird() {
        return (this.TimeF - (this.difference / 3));
    }

    LastOneSixth() {
        return (this.TimeF - (this.difference / 6));       
    }

    HourPart(time) {
        return floor(time);
    }

    MinutePart(time) {
        return floor(60 * (time - floor(time)));
    }
}