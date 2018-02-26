const extract = (str, x) => String.fromCodePoint(str.codePointAt(x));
let state = {
    memory: Array.apply(null, Array(16)).map(Number.prototype.valueOf, 0),
    pointer: 0
};

module.exports = {
    eval: (str, rl = undefined) => {
        let scope = Array();

        for(let i = 0; i < str.length / 2; i++) {
            switch(extract(str, i*2)) {
                case "😂":
                    state.memory[state.pointer]++;
                    break;
                case "😭":
                    state.memory[state.pointer]--;
                    break;
                case "👄":
                    process.stdout.write(String.fromCodePoint(state.memory[state.pointer]));
                    break;
                case "👂":
                    console.log("👂 is not implemented yet");
                    break;
                case "🔝":
                    state.pointer++;
                    break;
                case "🔙":
                    state.pointer--;
                    break;
                case "🔜":
                    scope.push(i);
                    break;
                case "🔚":
                    if(state.memory[state.pointer] !== 0) { 
                        i = scope[scope.length - 1];
                    }
                    break;
            }
        }

        process.stdout.write('\n');
    }
}
