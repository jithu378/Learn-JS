class Test{
    constructor(name,mark){
        this.name = name;
        this.mark = mark;
    }

    improve(impMark){
        this.mark += impMark;
        console.log(this.mark);
    }
}

let obj = new Test("jb",78);
obj.improve(10);