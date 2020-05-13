class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton("Start");
        this.greeting = createElement("h2");

    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement(h3);
        title.html("Simple Survey");
        title.position(130,0);

        this.input.position(130,160);
        this.button.position(250,200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            voter.name = this.input.value();
            voterCount+=1
            voter.index = voterCount;
            voter.update();
            voter.updateCount(voterCount);

            this.greeting+html(Hi + voter.name);
            this.greeting.position(130,160);
        })
    }

}
