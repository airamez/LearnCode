var Input = { 
    PrepareInput: function () {
        if (Input._inputContent == null) {
            Input._inputContent = $('#input').text();
            Input._currentIdex = 0;
        }
    },

    Read: function() {
        Input.PrepareInput();
        var space = Input._inputContent.indexOf(" ", Input._currentIdex);
        var inputValue = Input._inputContent.substring(Input._currentIdex, space);
        Input._currentIdex = space + 1;
        return inputValue;
        
    },

    ReadLine: function () {
        Input.PrepareInput();
        var lineBreak = Input._inputContent.indexOf('\n', Input._currentIdex);
        var line = Input._inputContent.substring(Input._currentIdex, lineBreak);
        Input._currentIdex = lineBreak + 1;
        return line;
    },
    
    ReadArray: function () {
        var line = Input.ReadLine();
        var inputArray = line.split(" ");
        return inputArray;
    },
}

Input._inputContent;
Input._currentIdex;

var Output = { 
    
    WriteLine: function() {
        Output.PreapreOutput();
        for (var i = 0; i < arguments.length; i++) {
            Output.Write(arguments[i] + ' ');
        }
        Output.Write("\n");
        
    },
    
    Write: function (content) {
        Output.PreapreOutput();
        Output._output.append(content);
    },
    
    PreapreOutput: function() {
        if (Output._output == null) {
            Output._output = $('#output');
        }
    }
}

Output._output;

var Code =  {
    
    Run: function() {
        var code = editor.getValue();
        $('#output').empty();
        Input._currentIdex = 0;
        eval(code);
    },
    
    Clear: function () {
        editor.setValue('');
        $('#code').empty();
    }
}