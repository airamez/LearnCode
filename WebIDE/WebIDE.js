class Input {
    
    constructor () {
        
    }

    static PrepareInput () {
        if (Input._inputContent == null) {
            Input._inputContent = $('#input').text();
            Input._currentIdex = 0;
        }
    }

    static Read () {
        Input.PrepareInput();
        var space = Input._inputContent.indexOf(" ", Input._currentIdex);
        var inputValue = Input._inputContent.substring(Input._currentIdex, space);
        Input._currentIdex = space + 1;
        return inputValue;
        
    }

    static ReadLine () {
        Input.PrepareInput();
        var lineBreak = Input._inputContent.indexOf('\n', Input._currentIdex);
        var line = Input._inputContent.substring(Input._currentIdex, lineBreak);
        Input._currentIdex = lineBreak + 1;
        return line;
    }
    
    static ReadArray () {
        var line = Input.ReadLine();
        var inputArray = line.split(" ");
        return inputArray;
    }
}

Input._inputContent;
Input._currentIdex;

class Output {
    constructor() {
    
    }
    
    static WriteLine () {
        Output.PreapreOutput();
        for (var i = 0; i < arguments.length; i++) {
            Output.Write(arguments[i] + ' ');
        }
        Output.Write("\n");
        
    }
    
    static Write (content) {
        Output.PreapreOutput();
        Output._output.append(content);
    }
    
    static PreapreOutput () {
        if (Output._output == null) {
            Output._output = $('#output');
        }
    }

}

Output._output;

class Code {
    
    static Run() {
        var code = editor.getValue();
        $('#output').empty();
        Input._currentIdex = 0;
        eval(code);
    }
    
    static Clear() {
        editor.setValue('');
        $('#code').empty();
    }
}